import React, { Component } from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity, TextInputProps, Animated, TextInput, Platform } from 'react-native';
import { STheme, SText, SView, SViewProps, SThread } from '../../index';

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
    required?: Boolean,
    variant?: TypeVariant,
    col?: SColType,
    color?: any,
    defaultValue?: any,
    error?: boolean,
    placeholder?: any,
    icon?: any,
    iconR?: any,
    label?: String,
    props?: any,
    separation?: number,
    filePath?: String,
    name?: String,
    onChangeText?: (text: string) => any,
    onPress?: (val: any) => void,
    onStateChange?: (value: any) => void,
    latLng?: { latitude: number, longitude: number },
    render?: (ref) => any,
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
    refView
    inpref
    refSelect;
    required;
    fisrtFocus = false;
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
            value: this.props.value ?? this.props.defaultValue,
            error: this.props.error,
            data: {}
        };
        this.inpref = null;

        this.onChangeText = this.onChangeText.bind(this);
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
    setData(data) {
        this.state.data = data;

    }
    verify(noStateChange?: boolean) {
        if (this.props) {
            if (!this.required) return true;
        }
        var isValid = true;
        if (!this.getValue()) {
            isValid = false;
        } else {
            if (this.type) {
                if (this.type.verify) {
                    if (!this.type.verify(this.getValueClean())) {
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
        if (this.props.onEndEditing) {
            this.props.onEndEditing(null);
        }
    }
    setValue(value) {
        this.setState({ value: value });
        this.onChangeText(value);
    }
    getType() {
        return this.props.type;
    }
    getValue() {
        var value = this.state.value ?? "";
        if (this.state.data?.dialCode) {
            return this.state.data?.dialCode?.dialCode + " " + value;
        }
        if (this.props.type == "link") {
            value = escape(unescape(this.state.value));
            return value;
        }
        return this.state.value;
    }
    getValueClean() {
        return this.state.value;
    }
    focus() {
        if (this.inpref) {
            this.inpref.focus();
            return;
        }
        if (this.type) {
            if (this.type.onPress) {
                this.type.onPress();
                return;
            }
        }
    }
    getCustomStyle() {
        return this.customStyle;
    }
    isRender(type) {
        if (this.props.render) {
            var RESPITEM = this.props.render(this);
            if (RESPITEM) {
                return <View style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {RESPITEM}
                </View>
            }

        }
        if (type.render) {
            return type.render(this)
            // return  <View style={{
            //     width: "100%",
            //     height: "100%",
            //     justifyContent: "center",
            //     alignItems: "center",
            // }}>
            //     {type.render(this)}
            // </View>
        }
    }
    onChangeText = (_text) => {
        console.log("onChangeText", _text);
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
        return <SText style={{ position: "absolute", ...this.customStyle["LabelStyle"], ...this.type?.style?.LabelStyle ?? {} }}>{this.props.label}</SText>
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

        if (this.props.type == "checkBox") {
            if (this.props.value !== null && this.props.value !== undefined) {
                this.state.value = this.props.value;
            }
        } else {
            if (this.props.value) {
                this.state.value = this.props.value;
            }
        }
        if (this.props.required || this.props.isRequired) {
            this.required = true;
        }
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
        } else {
            valueFilter = "";
        }
        // if (this.props.autoFocus) {
        //     this.inpref?.focus();
        // }

        var styleFinal = {
            ...customStyle["View"],
            ...type.style.View,
            ...(this.state.error ? customStyle.error : {}),
            ...this.style,
            ...(!this.props.label ? { marginTop: this.props.separation } : {}),

        }
        if (this.props.height) {
            delete styleFinal.height
        }
        var sp: any = this.props.style

        let styleInputFinal = {
            flex: 1,
            height: "100%",
            ...(Platform.select({
                web: { outline: "none" },
            })),
            ...customStyle["InputText"],
            ...type.style.InputText,
            ...(this.props.color ? { color: this.props.color } : {}),
            ...sp,
        }

        var extraprops = {
            ...this.props,
            ...type.props
        }
        if (Platform.OS == "android") {
            delete styleInputFinal["placeholderTextColor"]
            delete styleInputFinal["flex"]
            delete extraprops["flex"]

            styleInputFinal.height = "100%"
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
                onLayout={(evt) => {
                    this.layout = evt.nativeEvent.layout;
                    // @ts-ignore
                    this.refView = evt.nativeEvent.target;
                    // console.log("onLayout", this.layout, this.refView);
                }}
                style={styleFinal}
            >
                {this.getLabel()}
                {type.render ? null : <SView
                    col={"xs-12"}
                    row
                    center
                    style={{ flex: 1, height: "100%", }}>
                    {this.getIcon()}
                    <SView flex height>
                        <TextInput
                            ref={(ref) => {
                                this.inpref = ref
                                if (this.props.autoFocus && this.inpref) {
                                    if(this.fisrtFocus) return;
                                    this.fisrtFocus = true;
                                    new SThread(200, "start", false).start(() => {
                                        this.inpref.focus();
                                    })

                                }
                            }}
                            value={valueFilter}
                            editable={!this.props.disabled}
                            placeholderTextColor={customStyle["InputText"]?.placeholderTextColor ?? ""}
                            {...extraprops}
                            autoFocus={false}

                            style={styleInputFinal}
                            onChangeText={this.onChangeText}
                        />
                    </SView>
                    {this.getIcon_r()}
                </SView>}
                {this.isRender(type)}
            </SView>
        );
    }
}
