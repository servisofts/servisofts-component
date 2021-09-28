import React, { Component } from 'react'
import { Animated, Text, View } from 'react-native'
import SText from '../SText'
export type Header_props = {
    label: String,
    key: string,
    width?: number,
    index?: number,
    hidden?: Boolean,
    editable?: Boolean,
    order?: "asc" | "desc",
    orderPriority?: number,
    // type?: SInputType,
    options?: Array<any>,
    render?: (data: String, id?: any) => {}
}
type Props = {
    index: number,
    header: Header_props,
    data: object,
    animationSize: Animated.Value,
    animationPosition: Animated.Value,

}
export default class Data extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getData = (obj, key) => {
        var path = key.split("/");
        var data = obj;
        path.map((dir) => {
            dir = dir.replace(/-.*/, "")
            if (dir == "") {
                return;
            }
            if (!data) data = {};
            if (typeof data == "string") {
                try { data = JSON.parse(data) } catch (e) { }
            }
            data = data[dir];
        })
        return data;
    }
    getContent() {
        if (this.props.header.key == "index") {
            return <SText>{this.props.index + 1}</SText>
        }
        var data = this.getData(this.props.data, this.props.header.key);
        if (this.props.header.render) {
            data = this.props.header.render(data, this.props.data);
        }
        if (typeof data != "object") {
            return <SText>
                {data}
            </SText>
        }
        return data;
    }
    render() {
        return <>
            <Animated.View style={{
                width: this.props.animationSize,
                height: 40,
            }} />
            <Animated.View
                style={{
                    top: 0,
                    left: this.props.animationPosition,
                    position: "absolute",
                    width: this.props.animationSize,
                    height: "100%",
                }}>
                <View style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (this.props.index % 2 == 0) ? "#ffffff11" : "#00000011",
                    overflow: "hidden",
                }}>
                    {this.getContent()}
                </View>

            </Animated.View>
        </>
    }
}
