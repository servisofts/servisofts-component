import React, { Component } from 'react';
import { Circle } from 'react-native-maps';
import SCircleAbstract from './abstract';


export default class SCircle extends SCircleAbstract {
    constructor(props) {
        super(props);

    }
 
    render() {
        return <Circle
            {...this.props}
        />
    }
}