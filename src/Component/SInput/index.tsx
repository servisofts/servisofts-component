import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, TextInputProps, Animated, TextInput, Platform } from 'react-native';
import { STheme, SText, SView } from '../../index';
import { Variant, TypeVariant } from './variants';
import { Type, TypeType } from './types';
import { CustomStyles, TypeStyles } from './styles';
import { SColType } from '../../Types';
// import SSize from '../SSize';
// import { SText } from '../SText';
// import { SView } from '../SView';

export type TypeInputProps = {
    style: ViewStyle,
    customStyle: TypeStyles,
    type: TypeType,
    isRequired: Boolean,
    variant: TypeVariant,
    // col: TypeCol,
    icon: Component,
    label: String,
}

interface IProps extends TextInputProps {
    style?: ViewStyle,
    props?: TypeInputProps,
    col?: SColType,
    onPress?: (val: any) => void,
    onStateChange?: (value: any) => void,

}
// export type SInputProps = IProps;

export class SInput extends Component<IProps> {
    static TYPE(type: TypeType) { return type };
    layout
    style
    type
    state
    customStyle
    variant


    static defaultProps = {
        props: {},
        style: {},
        onStateChange: () => { }
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.defaultValue,
            error: false,
            data: {}
        };
    }
    getOption(option) {
        return !this.props.props[option] ? 'default' : this.props.props[option]
    }
    buildStyle() {
        this.style = {
            ...(this.props.props.style ? this.props.props.style : {}),
            ...this.props.style,
        }
    }
    verify(noStateChange?: boolean) {
        if (!this.props.props.isRequired) return true;
        var isValid = true;
        if (!this.getValue()) {
            isValid = false;
        } else {
            if (this.type) {
                if (this.type.verify) {
                    if (!this.type.verify(this.getValue())) {
                        isValid = false;
                    }
                }
            }
        }
        if (!isValid != this.state.error) {
            if (!noStateChange) {
                this.props.onStateChange(isValid)
            }
            this.state.error = !isValid;
            this.setState({ error: this.state.error });
        }
        return isValid
    }
    setValue(val) {
        this.setState({ value: val });
    }
    getValue() {
        return this.state.value;
    }
    setData(val) {
        this.setState({ data: { ...this.state.data, ...val } });
    }
    getData() {
        return this.state.data;
    }
    getIcon() {
        if (!this.type) return <View />
        var ITEM: any = false;
        if (this.props.props.icon) {
            ITEM = this.props.props.icon
        }
        if (this.type.icon) {
            ITEM = this.type.icon
        }
        if (!ITEM) {
            return <View />
        }
        return <SView
            center
            style={{
                width: 60,
                height: "100%"
            }}>
            {ITEM}
        </SView>
    }
    getStyle = () => {
        return this.customStyle
    }
    getLabel() {
        if (!this.props.props.label) {
            return <View />
        }
        return <SText style={[
            this.customStyle.LabelStyle,
            this.type.style.LabelStyle,
        ]}>{this.props.props.label}</SText>
    }
    render() {
        this.buildStyle();
        this.variant = Variant(this.getOption("variant"));
        this.customStyle = CustomStyles(this.getOption("customStyle"))
        var size = { width: "100%" }
        var type = Type(this.getOption("type"), this);
        this.type = type;
        var Component: any = View;
        if (this.props.onPress || type.onPress) {
            Component = TouchableOpacity;
        }
        var valueFilter = this.state.value;
        if (this.type) {
            if (this.type.filter) {
                valueFilter = this.type.filter(valueFilter);
            }
        }
        if (valueFilter) {
            if (valueFilter) {
                this.verify();
            }
        }
        return (
            <Component
                onLayout={(evt) => {
                    this.layout = evt.nativeEvent.layout
                    if (this.props.onLayout) this.props.onLayout(evt);
                }}
                onPress={() => {
                    if (this.props.onPress) this.props.onPress({
                        layout: this.layout
                    });
                    if (type.onPress) type.onPress({
                        layout: this.layout
                    });
                }}
                style={[
                    this.variant.View,
                    this.customStyle.View,
                    type.style.View,
                    (this.state.error ? this.customStyle.error : {}),
                    {
                        ...size,
                        ...this.style,
                    }
                ]} >
                {this.getLabel()}
                <SView
                    col={"xs-12"}
                    row
                    style={{ flex: 1, height: "100%" }}>
                    {this.getIcon()}
                    <TextInput

                        value={valueFilter}
                        {...type.props}
                        {...this.props}
                        onChangeText={(_text) => {
                            var text = _text;
                            if (this.type) {
                                if (this.type.onChangeText) {
                                    text = this.type.onChangeText(text)
                                }
                                if (this.type.filter) {
                                    text = this.type.filter(text)
                                }

                            }
                            if (this.props.onChangeText) {
                                this.props.onChangeText(text)
                            }
                            this.state.value = text
                            this.setState({ value: this.state.value })
                            this.verify()
                        }}
                        style={[
                            this.customStyle.InputText,
                            type.style.InputText,
                            {
                                flex: 1,
                                height: "100%",
                                outline: "none",

                            }]}
                        placeholderTextColor={this.customStyle.placeholder.color}

                    />
                </SView>
            </Component >
        );
    }
}
