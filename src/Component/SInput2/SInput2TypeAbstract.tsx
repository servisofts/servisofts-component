import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import { SInput2PropsType } from './type'


export default abstract class SInput2TypeAbstract extends Component<SInput2PropsType> {
    _ref: { input?: TextInput & { value?:any } };

    constructor(props) {
        super(props);
        this._ref = {};
    }
    handleRef = (r, type) => {
        this._ref[type] = r;
    }
}