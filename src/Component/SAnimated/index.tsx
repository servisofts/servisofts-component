import React, { Component } from 'react';
import { View, StyleSheet, Animated, ViewStyle } from 'react-native';
import STheme from '../STheme';
type typeConfig = {
    type: 'default',
    variant: 'default',
}
type typeProps = {
    style: ViewStyle,
    options: typeConfig,
    // onPress: Function,
    //callBack:Function,
}

export class SAnimated extends Component<typeProps> {
    styleType
    variant
    props;
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getOption(option) {
        return !this.props.options[option] ? 'default' : this.props.options[option]
    }
    //---RENDER
    getTypes() {
        return {
            default: StyleSheet.create({
                view: {
                    borderRadius: 4,
                    backgroundColor: STheme.color.primary,
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...this.props.style,
                },
            }),
        }
    }
    getVariant() {
        return {
            'default': StyleSheet.create({
                view: {
                    flex: 1,
                    width: '100%',
                    height: '100%',
                },
            }),
        }
    }
    //---RENDER
    render() {
        // var theme = SThemeStyle();
        this.styleType = this.getTypes()
        this.variant = this.getVariant()
        //---RETURN
        var variant = this.variant[this.getOption('variant')]
        var style = this.styleType[this.getOption('type')]
        return (
            <View style={[variant.view, style.view]}>
                {this.props.children}
            </View >
        );
    }
}
