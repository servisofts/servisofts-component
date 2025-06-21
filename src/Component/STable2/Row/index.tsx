import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SText from '../../SText';
import STheme from '../../STheme';
import SView from '../../SView';
import { HeaderProps } from '../Header';

export type STable2cellStyle = {
    fontSize?: number
    height?: number,
    textAlign?: "center" | "right" | "left",
    justifyContent?: "center",
}
type typeProps = {
    header: Array<HeaderProps>,
    data: Object,
    obj: Object,
    animHeader: any,
    animSize: any,
    space?: number,
    height: number,
    index: number,
    cellStyle: STable2cellStyle,
}

class Row extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };

    }
    static getDatoRecursive(obj, key, index) {
        if (key == "index") return index + 1;
        var path = key.split("/");
        var data = obj;
        path.map((dir) => {
            dir = dir.replace(/-.*/, "")
            if (dir == "") {
                return;
            }
            if (!data) data = {};
            if (typeof data == "string") {
                try { data = JSON.parse(data) } catch (e) {
                    data = {};
                }
            }

            data = data[dir];
        })
        if (data == null) data = "";
        return data;
    }
    getItems = () => {
        return this.props.header.map((item, index) => {
            let cellStyle: any = {
                fontSize: 12,
                textAlign: "left",
                textWrap: "nowrap",
                // height: this.props?.height ?? 30,
                ...this.props.cellStyle ?? {},
                ...item.cellStyle ?? {},
            }
            var data: any = this.props.data;
            // console.log(data);
            data = data[item.key];
            var ITEM;
            if (item.key == "index") {
                data = this.props.index + 1;
            }
            if (item.component) {
                ITEM = item.component(data, this.props.obj);
            } else {
                if (typeof data == "object") {
                    data = JSON.stringify(data);
                }
                ITEM = <SText font={"Calibri"} fontSize={cellStyle.fontSize} col={"xs-12"} center={item.center} style={{
                    textAlign: cellStyle.textAlign,
                    ...cellStyle
                }} >{data}</SText>
            }

            return <SView row key={"itm_row_" + item.key} height={cellStyle.height}>
                <SView width={this.props.space} height
                    style={{
                        // borderRightWidth: 1,
                        // borderColor: STheme.color.text + "33"
                    }}
                // backgroundColor={STheme.color.gray}
                />
                <SView
                    animated
                    height
                    style={{
                        width: this.props.animHeader[item.key],

                        // overflow: 'hidden',
                        // borderRightWidth: 1,
                        // borderColor: STheme.color.text + "22"
                    }}
                >
                    <SView
                        height
                        {...item}
                        onPress={!item.onPress ? null : item.onPress.bind(this, data, this.props.obj)}
                        style={{
                            backgroundColor: this.props.index % 2 == 0 ? "" : STheme.color.card,
                            overflow: 'hidden',
                            // padding: 1,
                            justifyContent: 'center',
                            alignItems: "center",
                            width: "100%",

                        }}>
                        {ITEM}
                    </SView>
                </SView>
            </SView >
        })
    }
    render() {
        return (
            <SView
                row
                height={this.props?.cellStyle?.height ?? this.props.height}
                animated
                style={{
                    width: this.props.animSize,
                }}
            >
                {this.getItems()}
            </SView>
        );
    }
}
export default Row;