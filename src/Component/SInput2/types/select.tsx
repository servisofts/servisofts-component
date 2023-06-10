import { Picker, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { Component } from 'react'
import SInput2TypeAbstract from '../SInput2TypeAbstract'

export default class select extends SInput2TypeAbstract {
    handleFocus = (e) => {
        if (this._ref.input) {
            this._ref.input.blur();

        }
    }
    handlePress = (e) => {
        console.log(e.nativeEvent)
        console.log(this._ref.input.value)
    }
    render() {
        console.log(this._ref)
        return <Picker

            // mode='dropdown'
            // selectedValue={selectedValue}
            style={[{
                padding: 0,
                margin: 0,
                width: "100%",
            }, this.props.style]}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>

    }
}