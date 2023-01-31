import React, { Component } from 'react'
import { Text, View } from 'react-native'

type SHr_Props = {
    height?: number,
    color?: string,
    h?: number,
}
export default class SHr extends Component<SHr_Props> {
    static defaultProps = {
        height: 8,
    }
    render() {
        return (
            <View style={{
                width: "100%",
                height: this.props.h ?? this.props.height,
                backgroundColor: this.props.color,
            }}>

            </View>
        )
    }
}
