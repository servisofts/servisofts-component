import React, { Component } from "react"
import { StyleSheet, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { SInput } from "."
import SDate from "../SDate"
import { SText, STheme, SView, SPopupOpen, SPopupClose } from "../../index"
import SIDialCodeAlert from "./SInputTypes/SIDialCodeAlert"
import SIFechaAlert from "./SInputTypes/SIFechaAlert"

export type TypeType = "default" | "fecha" | "password" | "email" | "phone" | "number" | "money" | "telefono"

type returnType = {
    props?: TextInputProps,
    onPress?: Function,
    verify?: Function,
    filter?: Function,
    onChangeText?: Function,
    icon?: any,
    style?: {
        View?: ViewStyle,
        InputText?: TextStyle,
        LabelStyle?: TextStyle
    }

}

const buildResp = (data: returnType) => {
    return data;
}
export const Type = (type: TypeType, Parent: SInput): returnType => {
    switch (type) {
        case "fecha":
            return fecha(type, Parent);
        case "password":
            return password(type, Parent);
        case "phone":
            return phone(type, Parent);
        case "telefono":
            return phone(type, Parent);
        case "email":
            return email(type, Parent);
        case "number":
            return number(type, Parent);
        case "money":
            return money(type, Parent);
        default:
            return buildResp({
                props: {

                },
                style: {
                    View: {},
                    InputText: {},
                    LabelStyle: {}
                }
            })
    }
}
const phone = (type: TypeType, Parent: SInput) => {
    var value = Parent.getValue();
    var arr = []
    if (value) {
        arr = value.split(" ");
    }
    var dialcodeTxt = "+591"
    if (arr.length > 1) {
        dialcodeTxt = arr[0];
        value = arr[1];
    } else {
        if (Parent.getData().dialCode) {
            dialcodeTxt = Parent.getData().dialCode.dialCode
        }
    }
    var dialcode = SIDialCodeAlert.getDialCode(dialcodeTxt)
    return buildResp({
        props: {
            keyboardType: "phone-pad",
        },
        onChangeText: (text) => {
            var _value = Parent.getValue();
            if (_value) {
                var arr = _value.split(" ");
                if (arr.length > 1) {
                    console.log(arr[1])
                    dialcode = SIDialCodeAlert.getDialCode(arr[0])
                }
            }
            return dialcode.dialCode + " " + text;
        },
        verify: (value) => {
            if (!value) return false;
            var arr = value.split(" ");
            if (arr.length > 1) {
                value = arr[1];
            }
            const countOfNumber = dialcode.mask.match(/9/g).length
            const isVerified = countOfNumber === value?.length;
            return isVerified;
        },
        filter: (value: String) => {
            if (!value) return value;
            var _value = value;
            var arr = _value.split(" ");
            if (arr.length > 1) {
                dialcode = SIDialCodeAlert.getDialCode(arr[0])
                _value = arr[1];
            }

            let unmaskedPhoneNumber = (_value.match(/\d+/g) || []).join('');
            if (unmaskedPhoneNumber.length === 0) {
                return ""
            }
            let phoneNumber = dialcode.mask.replace(/9/g, '_');
            for (let index = 0; index < unmaskedPhoneNumber.length; index += 1) {
                phoneNumber = phoneNumber.replace('_', unmaskedPhoneNumber[index]);
            }
            let numberPointer = 0;
            for (let index = phoneNumber.length; index > 0; index -= 1) {
                if (phoneNumber[index] !== ' ' && !isNaN(parseInt(phoneNumber[index]))) {
                    numberPointer = index;
                    break;
                }
            }
            phoneNumber = phoneNumber.slice(0, numberPointer + 1);
            unmaskedPhoneNumber = (phoneNumber.match(/\d+/g) || []).join('');
            return phoneNumber;
        },
        icon: (
            SIDialCodeAlert.getOpenButtom(dialcodeTxt, Parent.getStyle().InputText, (dial) => {
                var value = Parent.getValue();
                var arr = []
                if (value) {
                    arr = value.split(" ");
                }
                if (arr.length > 0) {
                    Parent.setValue(dial.dialCode + " " + arr[1])
                } else {
                    Parent.setValue(dial.dialCode + " " + "")
                }
            })
        ),
        style: {
            View: {

            },
            InputText: {

            },
            LabelStyle: {}
        }
    })
}
const email = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            keyboardType: "email-address"
        },
        style: {
            View: {},
            InputText: {}
        },
        filter: (_value: String) => {
            if (!_value) return _value;
            var value = _value;
            value = value.trim();
            value = value.split(" ")[0];
            return value;
        },
        verify: (value) => {
            if (!value) return false;
            return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value)
        }
    })
}
const password = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            secureTextEntry: true,
        },
        style: {
            View: {

            },
            InputText: {

            },
            LabelStyle: {}
        }
    })
}
const fecha = (type: TypeType, Parent: SInput) => {
    var format = "yyyy-MM-dd";
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none",
        },
        onPress: () => {
            SPopupOpen({
                key: "fechaPicker",
                content: <SIFechaAlert
                    props={{
                        defaultValue: new SDate(Parent.getValue(), format)
                    }}
                    onChange={(val) => {
                        // console.log(val);
                        Parent.setValue(val.toString(format));
                    }} />
            })
        },
        style: {
            View: {

            },
            InputText: {

            },
            LabelStyle: {}
        }
    })
}

const number = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            keyboardType: "number-pad"
        },
        style: {
            View: {},
            InputText: {}
        },
        filter: (_value: String) => {
            if (!_value) return _value;
            var value = _value;
            value = value.trim();
            value = value.replace(/\D/, "");
            return value;
        },
        verify: (value) => {
            if (!value) return false;
            return true;
        }
    })
}

const money = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            keyboardType: "number-pad",
        },
        style: {
            View: {
            },
            InputText: {
                flex: 1,
                marginEnd: 4,
                textAlign: "right",
                fontSize: 16,
            }
        },
        icon: (<SView style={{
            width: 35,
            height: "100%",
        }} center >
            <SText style={{
                color: "#fff",
                fontSize: 16,
            }}>Bs.</SText>
        </SView>
        ),
        filter: (_value: String) => {
            if (!_value) return _value;
            var value = _value + "";
            value = value.trim();
            if (value.indexOf("\.") >= 0) {
                var arr = value.split("\.");
                value = arr[0].replace(/\D/, "") + "." + arr[1].replace(/\D/, "");
            } else {
                value = value.replace(/\D/, "");
            }
            return value;
        },
        verify: (value) => {
            if (!value) return false;
            return true;
        }
    })
}