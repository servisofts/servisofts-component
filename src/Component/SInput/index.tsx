import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, TextInputProps, Animated, TextInput, Platform } from 'react-native';
import { STheme, SText, SView, SViewProps } from '../../index';

import { Variant, TypeVariant } from './variants';
import { Type, TypeType } from './types';
import { CustomStyles, TypeStyles } from './styles';
import { SColType } from '../../Types';

export type SInputType = TypeType;
export type TypeInputProps = {
    customStyle?: TypeStyles,
    type?: TypeType,
    options?: Array<any>,
    isRequired?: Boolean,
    variant?: TypeVariant,
    col?: SColType,
    defaultValue?: any,
    placeholder?: any,
    icon?: any,
    iconR?: any,
    label?: String,
    props?: any,
    separation?: number,
    onChangeText?: (text: string) => any,
    onPress?: (val: any) => void,
    onStateChange?: (value: any) => void,
    latLng?: { latitude: number, longitude: number },
} & TextInputProps & SViewProps


export class SInput extends Component<TypeInputProps> {
    static TYPE(type: TypeType) { return type };
    layout
    style
    type
    state
    customStyle
    variant
    _ref
    inpref
    static defaultProps = {
        props: {},
        style: {},
        onStateChange: () => { }
    };

    constructor(props) {
        super(props);

        // props;
        // constructor(_props) {
        //     super(_props);
        //     this.props = {
        //         ..._props,
        //         ..._props.props
        //     };


        this.state = {
            value: this.props.defaultValue,
            error: false,
            data: {}
        };
    }
    componentDidMount(): void {
   
    }
    getComponent() {
        return <SInput {...this.props} onChangeText={(vak) => {
            this.state.value = vak;
        }} />
    }
    getProps() {
        return this.props;
    }
    getStyle() {
        return this.style;
    }
    getOption(option) {
        return !this.props[option] ? 'default' : this.props[option]
    }
    getData() {
        return this.state.data;
    }
    verify(noStateChange?: boolean) {
        if (this.props) {
            if (!this.props.isRequired) return true;
        }
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
                if (this.props.onStateChange) this.props.onStateChange(isValid)

            }
            this.state.error = !isValid;
            this.setState({ error: this.state.error });
        }
        return isValid
    }
    notifyBlur() {
        if (this.props.onBlur) {
            this.props.onBlur(null);
        }
    }
    setValue(value) {
        this.setState({ value });
        this.onChangeText(value);
    }
    getType() {
        return this.props.type;
    }
    getValue() {
        return this.state.value;
    }

    getCustomStyle() {
        return this.customStyle;
    }
    isRender(type) {
        if (type.render) {
            return <View style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {type.render(this)}
            </View>
        }
    }
    onChangeText = (_text) => {
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
            var text2 = this.props.onChangeText(text)
            if (text2) {
                text = text2;
            }
        }
        this.state.value = text
        this.setState({ value: this.state.value })
        this.verify()
    }
    getLabel() {
        if (!this.props.label) return null;
        return <SText style={{ ...this.customStyle["LabelStyle"] }}>{this.props.label}</SText>
    }

    getIcon_r() {
        var ITEM: any = false;

        if (this.props.iconR) {
            ITEM = this.props.iconR
        } else {
            if (!this.type) return <View />
            if (this.props.props.iconR) {
                ITEM = this.props.props.iconR
            }
            if (this.type.iconR) {
                ITEM = this.type.iconR
            }
            if (!ITEM) {
                return <View />
            }
        }

        return <SView
            center
            style={{
                height: "100%",
            }}>
            {ITEM}
        </SView>
    }
    getIcon() {
        var ITEM: any = false;
        if (this.props.icon) {
            ITEM = this.props.icon
        } else {
            if (!this.type) return <View />
            if (this.props.props.icon) {
                ITEM = this.props.props.icon
            }
            if (this.type.icon) {
                ITEM = this.type.icon
            }
            if (!ITEM) {
                return <View />
            }
        }
        return <SView
            center
            style={{
                height: "100%",
            }}>
            {ITEM}
        </SView>
    }
    render() {

        var customStyle = CustomStyles(this.props.customStyle);
        this.customStyle = customStyle;
        this.style = this.props.style;
        var type = Type(this.props.type, this);
        this.type = type;
        var isOnPress = this.props.onPress || type.onPress;

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
        if (this.props.autoFocus) {
            this.inpref?.focus();
        }
        return (
            <SView
                col={"xs-12"}
                {... (isOnPress ? {
                    onPress: () => {
                        if (this.props.onPress) this.props.onPress({
                            layout: this.layout
                        });
                        if (type.onPress) type.onPress({
                            layout: this.layout
                        });
                    }
                } : {})}
                {...this.props}
                style={{
                    ...customStyle["View"],
                    ...type.style.View,
                    ...(this.state.error ? customStyle.error : {}),
                    ...this.style,
                    ...(!this.props.label ? { marginTop: this.props.separation } : {}),
                }}
            >

                {this.getLabel()}
                <SView
                    col={"xs-12"}
                    row
                    center
                    style={{ flex: 1, height: "100%", }}>
                    {this.getIcon()}
                    <SView flex>
                        <TextInput
                            ref={(ref) => { this.inpref = ref }}
                            value={valueFilter}
                            {...this.props}
                            {...type.props}
                            style={{
                                flex: 1,
                                height: "100%",
                                outline: "none",
                                ...customStyle["InputText"],
                                ...type.style.InputText,
                                // ...this.props.style,
                            }}
                            onChangeText={this.onChangeText}
                        />
                    </SView>
                    {this.getIcon_r()}

                </SView>
                {this.isRender(type)}
            </SView>
        );
    }
}
