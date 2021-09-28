import React, { Component } from 'react'
import { Text, View } from 'react-native'

type SHr_Props = {
    height?: number,
    color?: string,
}
export default class SHr extends Component<SHr_Props> {
    static defaultProps = {
        height: 8,
    }
    render() {
        return (
            <View style={{
                width: "100%",
                height: this.props.height,
                backgroundColor: this.props.color,
            }}>

            </View>
        )
    }
}
