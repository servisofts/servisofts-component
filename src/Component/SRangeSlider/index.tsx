import React, { Component } from 'react';
import { Animated } from 'react-native';
import { SView, SText, SColType, STheme } from '../../index';
import SAPanResponder from '../SAnimated/SAPanResponder';

type SRangeSliderType = {
    range: [number, number],
    onChange?: (evt) => {},
    defaultValue?: number,
    value?: number,
    color?: string,
    backgroundColor?: string,
    col?: SColType,
    width?: number

}
// } & SViewProps

export default class SRangeSlider extends Component<SRangeSliderType> {
    state;
    pos;
    pan; initSize;
    constructor(props) {
        super(props);
        this.state = {
            height: 8,
            markerSize: 24,
            value: (this.props.value ?? this.props.defaultValue) ?? 0,
        };
        this.pos = new Animated.Value(this.formatValue(this.state.value));
        this.createPan();
    }

    formatValue(val) {
        if (val > this.props.range[1]) return 1;
        if (val < this.props.range[0]) return 0;
        var a = this.props.range[1] - this.props.range[0];
        var b = val - this.props.range[0];
        return b / a;
    }

    getValue(fixed = 2) {
        var val = this.pos._value;
        var a = this.props.range[1] - this.props.range[0];
        var r = (val * a) + this.props.range[0];
        return r.toFixed(fixed);
    }
    createPan() {
        this.pan = new SAPanResponder({
            onGrand: (e, gs) => {
                this.initSize = this.pos._value;
            },
            onMove: (e, gs) => {
                if (this.props.value) return;
                var dx = (gs.dx / this.state.layout.width);
                if (this.initSize + dx < 0) {
                    this.pos.setValue(0);
                    return;
                }
                if (this.initSize + dx > 1) {
                    this.pos.setValue(1)
                    return;
                }
                this.pos.setValue(this.initSize + dx);
                var value = this.getValue();
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
                if (this.state.value != value) {
                    this.setState({ value: value })
                }
            },
            onRelease: () => {
            }
        });

    }
    Marcador() {
        const { layout } = this.state;
        if (!layout) return;
        var size = this.state.markerSize;
        return <SView animated style={{
            width: size,
            height: size,
            top: -((size / 2) - (this.state.height / 2)),
            borderRadius: 100,
            position: "absolute",
            backgroundColor: this.props.color ?? STheme.color.primary,
            transform: [{
                translateX: this.pos.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, layout.width - size]
                })
            }]
        }}
            {...this.pan.getPanHandlers()} center>
            <SText color={STheme.color.secondary} fontSize={10} bold center>{this.getValue(1)}</SText>
        </SView>
    }
    render() {
        return (<SView col={"xs-12"} height={this.state.markerSize} onLayout={(evt) => {
            this.setState({
                layout: evt.nativeEvent.layout
            })
        }}>
            <SView col={"xs-12"} card height={8} style={{
                backgroundColor: this.props.backgroundColor ?? STheme.color.card,
                borderRadius: 8,
            }}></SView>
            {this.Marcador()}
        </SView>
        )
    }

}