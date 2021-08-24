import React, { Component } from 'react'
import { Text, View } from 'react-native'

export type PropsType = {
    icon?: any,
    title?: string,
    message?: string,
    onPress: () => void
    onClose?: () => void
}
export default class Alert extends Component<PropsType> {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            message: '',
            onConfirm: () => { },
            onCancel: () => { },
        }
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
