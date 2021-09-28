import React, { Component } from 'react'
import { Animated, Text, View } from 'react-native'
import SText from '../SText'
import STheme from '../STheme'
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
    data: Header_props,
    animationSize: Animated.Value,
    animationPosition: Animated.Value,

}
export default class Header extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return <>
            <Animated.View
                style={{
                    top: 0,
                    left: this.props.animationPosition,
                    position: "absolute",
                    width: this.props.animationSize,
                    height: "100%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: STheme.color.primary,
                }}>
                <SText>
                    {this.props.data.label}
                </SText>
            </Animated.View>
        </>
    }
}
