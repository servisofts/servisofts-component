import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SText from '../../SText';
import STheme from '../../STheme';
import SView from '../../SView';
import { HeaderProps } from '../Header';

type typeProps = {
    header: [HeaderProps],
    data: Object,
    animHeader: any,
    animSize: any,
    space?: number,
    height: number,
    index: number,
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
            var data = this.props.data;
            data = data[item.key];
            var ITEM;
            if (item.key == "index") {
                data = this.props.index + 1;
            }
            if (item.component) {
                ITEM = item.component(data);
            } else {
                if (typeof data == "object") {
                    data = JSON.stringify(data);
                }
                ITEM = <SText fontSize={12}>{data}</SText>
            }
            return <>
                <SView width={this.props.space} height
                    backgroundColor={this.props.index % 2 == 0 ? STheme.color.primary + "22" : STheme.color.secondary + "22"}
                />
                <SView
                    animated
                    height
                    style={{
                        width: this.props.animHeader[item.key],
                        overflow: 'hidden',
                    }}
                >
                    <SView
                        height
                        {...item}
                        style={{
                            backgroundColor: this.props.index % 2 == 0 ? STheme.color.primary + "22" : STheme.color.secondary + "22",
                            overflow: 'hidden',
                            padding: 2,
                            justifyContent: 'center',
                            width: "100%",
                        }}>
                        {ITEM}
                    </SView>
                </SView>
            </>
        })
    }
    render() {
        return (
            <SView
                row
                height={this.props.height}
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