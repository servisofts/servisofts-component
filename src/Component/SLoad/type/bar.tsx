import React, { Component, PureComponent } from 'react';
import { Animated, Easing } from 'react-native';
import { SLoad, STheme, SView } from '../../../';
import { SLoadPropsType } from '../type';
export default class BarraCargando extends PureComponent<SLoadPropsType> {
    animValue;
    state;
    constructor(props) {
        super(props);
        this.state = {
            // size: 250,
            // dotSize: 16
        };
        this.animValue = new Animated.Value(0);
    }
    componentDidMount() {
        
        this.anim_rotar();
    }

    anim_rotar() {
        Animated.timing(this.animValue, {
            toValue: 1,
            duration: 3500 * (Math.random() * 0.2 + 0.5),
            useNativeDriver: true,
            easing: Easing.linear
        }).start(() => {
            this.animValue.setValue(0);
            this.anim_rotar();
        });
    }
    getBar() {
        if (!this.state.size) return null;
        return <SView animated style={{
            left: 1,
            transform: [{
                translateX: this.animValue.interpolate({ inputRange: [0, 1], outputRange: [-50, this.state.size + 50] })
            }]
        }}>
            <SView width={50} height={4} style={{ borderRadius: 8, backgroundColor: this.props.color, }}  {...this.props}/>
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"} height={6} style={{ justifyContent: 'center', overflow: 'hidden', backgroundColor: STheme.color.card, borderRadius: 8 }}
                {...this.props}
                onLayout={(event) => {
                    this.setState({ size: event.nativeEvent.layout.width })
                }}
            >
                {this.getBar()}
            </SView>
        )
    }
}