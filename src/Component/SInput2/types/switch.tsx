import { Picker, Switch, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { Component } from 'react'
import SInput2TypeAbstract from '../SInput2TypeAbstract'

export default class index extends SInput2TypeAbstract {
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
        return <Switch

            // trackColor={{ false: "#767577", true: "#DAA520" }}
            // thumbColor={this.state.value ? "#DAA520" : "#f4f3f4"}
            // onValueChange={this.handleChange.bind(this)}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            // value={this.state.value}
        />

    }
}