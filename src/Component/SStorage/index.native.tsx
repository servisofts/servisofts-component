import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AsyncStorage } from 'react-native'
export default class SStorage extends Component {
    static getItem = async (key, callback) => {
        AsyncStorage.getItem(key).then((resp) => {
            console.log(resp);
            callback(resp);
            ////
        });
        // return {}
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
                {/* <Text>{JSON.stringify(packageJson)}</Text> */}
            </View>
        )
    }
}
