import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class SStorage extends Component {
    static getItem = async (key, callback) => {
        AsyncStorage.getItem(key).then((resp) => {
            callback(resp);
        });
    }
    static setItem = (key, data) => {
        AsyncStorage.setItem(key, data);
    }
    static removeItem = (key) => {
        AsyncStorage.removeItem(key);
    }
    render() {
        return (
            <View>
                <Text> SStorage AsyncStorage Native </Text>
            </View>
        )
    }
}
