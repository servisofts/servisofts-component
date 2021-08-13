import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { SView, SText, SThread, STheme, SPopupOpen, SPopupClose } from '../../../index'
// import { SPopupClose, SPopupOpen } from '../../SPopup';
import SelectAlert from '../SelectAlert';

export type SDataType = {
    defaultHeight: number,
    actionTypes: Array<String>,
    onAction: Function,
    onSelectRow: Function,
    data: Object,
    header: Array<any>,
    animates: any,
}
export default class SData extends Component<SDataType> {
    animHeight
    state

    static defaultProps = {
        defaultHeight: 30,
    }
    constructor(props) {
        super(props);
        this.state = {
            colorSelect: STheme.color.primary,
            select: {
                x: -1,
                y: -1
            },
        };
        this.animHeight = new Animated.Value(this.props.defaultHeight);
    }
    reloadAnimate = () => {
        console.log("Recargando animate")
        // this.setState({ headerLoad: false })
    }
    getData = (obj, key) => {
        var path = key.split("/");
        var data = obj;
        path.map((dir) => {
            dir = dir.replace(/-.*/, "")
            if (!data) data = {};
            if (typeof data == "string") {
                try { data = JSON.parse(data) } catch (e) { }
            }
            data = data[dir];
        })
        return data;
    }
    getColorHover({ x, y, position }) {
        if ((this.state.select.x == x && this.state.select.y == y)) {
            return this.state.colorSelect + "66";
        }
        if ((this.state.select.x == x || this.state.select.y == y)) {
            return this.state.colorSelect + "22";
        }
        if (position % 2 == 0) {
            return STheme.color.secondary + "11"
        }
        return "transparent";
    }
    getRow(obj, key, position) {
        return this.props.header.map((header, i) => {
            if (header.hidden) return <View />
            var Anims = this.props.animates;
            if (!Anims) {
                return <View />
            }
            if (!Anims.widthHeaderAnim) {
                return <View />
            }
            var DATA = this.getData(obj, header.key);
            if (header.key == "index") {
                DATA = position;
            }
            if (header.render) {
                DATA = header.render(this.getData(obj, header.key))
            }
            if (typeof DATA == "string") {
                DATA = <SText>
                    {DATA}
                </SText>
            }

            return (
                <SView animated center style={{
                    position: "absolute",
                    left: 0,
                    height: "100%",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "22",
                    backgroundColor: this.getColorHover({ x: header.key, y: key, position }),
                    width: (Anims.widthHeaderAnim[header.key] ? Anims.widthHeaderAnim[header.key].x : header.width),
                    zIndex: (Anims.animSelect[header.key] ? Anims.animSelect[header.key] : 1),
                    transform: [
                        { translateX: (Anims.positionHeader[header.key] ? Anims.positionHeader[header.key].x : 0) }
                    ]
                }} >
                    <SView center style={{
                        width: "100%",
                        height: "100%",
                    }} onPress={() => {
                        // Anims.animHover[header.key].setValue(1);
                        if (this.props.onSelectRow) {
                            this.props.onSelectRow(obj, header);
                        }
                        if (this.props.onAction) {
                            SPopupOpen({
                                "key": "SelectTableAlert",
                                content: <SelectAlert data={obj} actionTypes={this.props.actionTypes} onAction={(type) => {
                                    SPopupClose("SelectTableAlert");
                                    if (this.props.onAction) {
                                        this.props.onAction(type, obj);
                                    }
                                }} />
                            })
                        }

                        this.setState({
                            select: {
                                x: header.key,
                                y: key
                            }
                        })
                    }}>
                        {DATA}
                    </SView>
                </SView>
            );
        })

    }
    render() {
        if (!this.props.animates) {
            return <View />
        }
        var i = 0;
        return Object.keys(this.props.data).map((key) => {
            var obj = this.props.data[key];
            i++;
            return (
                <SView
                    animated
                    row
                    style={{
                        width: "100%",
                        height: this.animHeight,
                    }}>

                    {this.getRow(obj, key, i)}
                </SView>
            );
        })

    }
}
