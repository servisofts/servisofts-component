import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Animated } from 'react-native';
import { SHr, SLoad, SText, STheme, SView } from '../../..';
import SLoadContainer from '../SLoadContainer';
import { SLoadPropsType } from '../type';

export default class skeleton extends Component<SLoadPropsType> {
    props: SLoadPropsType;
    animation = new Animated.Value(0);
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount(): void {

        Animated.loop(Animated.timing(this.animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }), {}).start(()=>{
            this.animation.setValue(0);
        });
    }
    render() {
        if (this.props.hidden) return null;
        var style_parent: any = this.props.style;
        var style: any = {
            ...style_parent,
            backgroundColor: this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["#AAAAAA22", "#44444422"]
            })
        }
        return (
            <SView animated  {...this.props} style={style} >

            </SView >
        );
    }
}