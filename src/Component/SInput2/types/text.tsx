import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import SInput2TypeAbstract from '../SInput2TypeAbstract'

export default class text extends SInput2TypeAbstract {
    render() {
        return <TextInput
            ref={this.handleRef.bind(this, "input")}
            {...this.props}
            style={[{
                padding: 0,
                margin: 0,
                width: "100%",
            }, this?.props?.style]} />
    }
}