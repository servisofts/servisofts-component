import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SStorage extends Component {
    static getItem = async (key, callback: (a: string) => void | undefined = null) => {
        var text = localStorage.getItem(key)
        if (callback) callback(text)
        return text;
        // return {}
    }
    static setItem = (key, data) => {
        localStorage.setItem(key, data);
    }
    static removeItem = (key) => {
        localStorage.removeItem(key);
    }
    render() {
        return (
            <View>
                <Text> SSTorage localStorage web </Text>
            </View>
        )
    }
}
