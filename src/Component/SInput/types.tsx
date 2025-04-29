import React, { Component } from "react"
import { StyleSheet, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle, Text } from "react-native"
import { SInput } from "."
import SDate from "../SDate"
import { SText, STheme, SView, SPopupOpen, SPopupClose, SIcon } from "../../index"
import SIDialCodeAlert from "./SInputTypes/SIDialCodeAlert"
import SIFechaAlert from "./SInputTypes/SIFechaAlert"
import SISelect from "./SInputTypes/SISelect"
import DropFile from "./SInputTypes/DropFile"
import SScrollView2 from "../SScrollView2"
import SNavigation from "../SNavigation"
import DropFileSingle from "./SInputTypes/DropFileSingle"
import SIFecha_MY_Alert from "./SInputTypes/SIFecha_MY_Alert"
import SIColorAlert from "./SInputTypes/SIColorAlert"

export type TypeType =
    "default"
    | "select"
    | "fecha"
    | "date"
    | "date_my"
    | "password"
    | "email"
    | "phone"
    | "number"
    | "money"
    | "telefono"
    | "image"
    | "files"
    | "file"
    | "direccion"
    | "textArea"
    | "checkBox"
    | "link"
    | "hour"
    | "color"

type returnType = {
    props?: TextInputProps,
    onPress?: Function,
    verify?: Function,
    filter?: Function,
    onChangeText?: Function,
    render?: Function,
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
        case "select":
            return select(type, Parent);
        case "fecha":
            return fecha(type, Parent);
        case "color":
            return color(type, Parent);
        case "date":
            return fecha(type, Parent);
        case "date_my":
            return date_my(type, Parent);
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
        case "hour":
            return hour(type, Parent);
        case "image":
            return image(type, Parent);
        case "file":
            return file(type, Parent);
        case "files":
            return files(type, Parent);
        case "direccion":
            return direccion(type, Parent);
        case "textArea":
            return textArea(type, Parent);
        case "checkBox":
            return checkBox(type, Parent);
        case "link":
            return link(type, Parent);
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
    var value = Parent.getValueClean();
    var dialcodeTxt = "+591"
    if (value && value.length > 0) {
        if (value.indexOf("+") >= 0) {
            var arr = value.split(" ");
            if (arr.length > 1) {
                dialcodeTxt = arr[0];
                value = value.replace(dialcodeTxt + " ", "");
                Parent.setValue(value);
            }
        }
    }


    var dialcode = SIDialCodeAlert.getDialCode(dialcodeTxt)

    if (!Parent.getData()?.dialCode) {
        Parent.setData({
            dialCode: dialcode
        })
    } else {
        dialcode = Parent.getData().dialCode
    }
    return buildResp({
        props: {
            keyboardType: "phone-pad",
        },
        onChangeText: (text) => {
            // var _value = Parent.getValue();
            return text;
        },
        verify: (value) => {
            if (!value) return false;
            const countOfNumber = dialcode.mask.match(/./g).length
            const isVerified = countOfNumber === value?.length;
            return isVerified;
        },
        filter: (value: String) => {
            if (!value) return value;
            var _value = value;
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
            SIDialCodeAlert.getOpenButtom(dialcode.dialCode, Parent.getStyle().InputText, (dial) => {

                Parent.setValue(Parent.getValueClean())
                dialcode = dial;
                Parent.setData({
                    dialCode: dialcode
                })
                // Parent.notifyBlur();
            })
        ),
        style: {
            View: {
                // backgroundColor:"#f0f"
            },
            InputText: {
                // padding:10,
                paddingEnd: 55,
                // backgroundColor:"#f0f"
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
            value = value.toLowerCase();
            return value;
        },
        verify: (value) => {
            if (!value) return false;
            return /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value)
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
const color = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            // editable: true,
            // focusable: false,
            // pointerEvents: "none",
        },

        icon: (<SView style={{
            width: 30,
            height: "100%",
            padding: 6,
            backgroundColor: Parent.getValue(),
        }} center onPress={() => {
            SPopupOpen({
                key: "fechaPicker",
                content: <SIColorAlert
                    defaultValue={Parent.getValue()}
                    onClose={() => {
                        // Parent.notifyBlur();
                    }}
                    onChange={(val) => {
                        // console.log(val);
                        Parent.setValue(val);
                    }} />
            })
        }} >
            {/* <SIcon name="World" fill={STheme.color.text} /> */}
        </SView>
        ),
        style: {
            View: {

            },
            InputText: {

            },
            LabelStyle: {}
        },
        filter: (_value: String) => {
            return _value
        },
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
            var value = new SDate(Parent.getValue() + "", "yyyy-MM-dd");
            SPopupOpen({
                key: "fechaPicker",
                content: <SIFechaAlert
                    props={{
                        defaultValue: value,
                    }}
                    onClose={() => {
                        Parent.notifyBlur();
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
        },

    })
}
const date_my = (type: TypeType, Parent: SInput) => {
    var format = "yyyy-MM";
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none",
        },
        onPress: () => {
            var value = new SDate(Parent.getValue() + "", "yyyy-MM");
            SPopupOpen({
                key: "fechaPicker",
                content: <SIFecha_MY_Alert
                    props={{
                        defaultValue: value,
                    }}
                    onClose={() => {
                        Parent.notifyBlur();
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
        },
        filter: (_value: String) => {
            var value = new SDate(_value + "", "yyyy-MM");
            return value.toString("yyyy-MM");
        },
    })
}
const select = (type: TypeType, Parent: SInput) => {
    // var format = "yyyy-MM-dd";
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none",
        },
        render: (_Parent: SInput) => {
            var value = _Parent.getValue();

            var options = _Parent.getOption("options");
            options.map((option) => {
                if (option.key == value) {
                    value = option;
                }
            })
            const style = {
                ...(_Parent.customStyle?.InputText ?? {}),

            }
            if (!value) return <SText clean col={"xs-12"} style={{
                ...style,
                color: _Parent.customStyle?.InputText?.placeholderTextColor ?? "#EEEEEE"
                // backgroundColor:"#f0f"
            }}>{_Parent?.props?.placeholder}</SText>

            if (typeof value != "object") {
                if (!!value.renderResult) return <SText clean col={"xs-12"} style={style}>{value.renderResult(value)}</SText>
                return <SText clean col={"xs-12"} style={style}>{value}</SText>
            }
            if (!value.content) return <View />

            if (typeof value.content != "object") {
                if (!!value.renderResult) return <SText clean col={"xs-12"} style={style}>{value.renderResult(value.content)}</SText>
                return <SText clean col={"xs-12"} style={style}>{value.content}</SText>
            }
            return value.content;
        },
        onPress: () => {
            // var value = new SDate(Parent.getValue() + "", "yyyy-MM-dd");
            var options = Parent.getOption("options");
            SPopupOpen({
                key: "fechaPicker",
                content: <SISelect
                    height={300}
                    props={{
                        defaultValue: Parent.getValue(),
                    }}
                    options={options}
                    onClose={() => {
                        Parent.notifyBlur();
                    }}
                    onChange={(val) => {
                        // console.log(val);
                        Parent.setValue(val);
                    }} />
            })
        },
        style: {
            View: {
                justifyContent: "center",
                // alignItems:"center",
            },
            InputText: {
                fontSize: 0,
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
            if (typeof value === 'string') {
                value = value.replace(/[^\d]/g, '');
            }
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
            placeholder: "0.00",
        },
        style: {
            View: {
                // alignItems:"flex-start",
                // justifyContent:"flex-start",
            },
            InputText: {
                flex: 1,
                width: "100%",
                marginEnd: 4,
                textAlign: "right",
                fontSize: 16,
            }
        },
        icon: (<SView style={{
            width: 30,
            height: "100%",
        }} center >
            <SText >Bs.</SText>
        </SView>
        ),
        filter: (_value: String) => {
            if (!_value) return _value;
            var value: any = _value + "";
            value = value.trim();
            // var value: any = value.replace(/./g, "");

            if (value.indexOf("\.") >= 0) {
                var arr = value.split("\.");
                var int: any = arr[0].replace(/\D/, "");
                var dec = arr[1].replace(/\D/, "");

                var num = parseInt(int + dec) / 100;
                value = num.toFixed(2);
                // if (dec > 99) {
                //     int += "" + Math.round(dec / 100)
                //     dec = dec % 100;
                // }
            } else {
                value = value.replace(/\D/, "");
                value = parseFloat(value);
                // value = value.toFixed(2);
                value = "0.0" + value;

            }
            return value + "";
        },
        verify: (value) => {
            if (!value) return false;
            return true;
        }
    })
}
const hour = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            keyboardType: "number-pad",
            placeholder: "00:00",
        },
        style: {

        },
        icon: (<SView style={{
            width: 30,
            height: "100%",
        }} center >
            <SText >H</SText>
        </SView>
        ),
        filter: (_value: String) => {
            if (!_value) return null;
            var int: string = _value.replace(/\D/, "") + "";
            let hora = int.substring(0, 2);
            let minutos = int.substring(2, 4);
            if (parseFloat(minutos) >= 60) minutos = "59";
            if (parseFloat(hora) >= 24) {
                int = "2359";
                hora = "23";
                minutos = "59";
            }
            if (int.length > 2) return hora + ":" + minutos
            //     if (parseFloat(int) > 24) int = "24"
            //     return int.substring(0, 2) + ":" + int.substring(2, 4);
            // }
            // if (parseFloat(int) > 24) int = "24"
            return hora;
        },
        verify: (value) => {
            if (!value) return false;
            return true;
        }
    })
}
const link = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            // keyboardType: "number-pad",
            placeholder: "https://servisofts.com/",
        },
        style: {
            View: {
                // alignItems:"flex-start",
                // justifyContent:"flex-start",
            },
            InputText: {
                flex: 1,
                width: "100%",
                marginEnd: 4,
                // textAlign: "right",
                fontSize: 16,
            }
        },
        icon: (<SView style={{
            width: 30,
            height: "100%",
            padding: 6,
        }} center >
            <SIcon name="World" fill={STheme.color.text} />
        </SView>
        ),
        filter: (_value: String) => {
            let value = _value + "";
            if (!value) {
                return "";
            }
            return unescape(value);

        },
        verify: (value) => {
            if (!value) return false;
            return true;
        }
    })
}

const image = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            editable: false,
            placeholder: "",
        },
        style: {
            View: {
                paddingStart: 0,
                backgroundColor: "transparent",
                height: Parent.getOption("height") == "default" ? 100 : Parent.getOption("height"),


                // width: Parent.getOption("height")=="default"?100:Parent.getOption("height"),
            },
            InputText: {
                display: 'none',
            }
        },
        render: (data) => {
            var bgColor = "";
            var customStyle = Parent.getCustomStyle();
            if (customStyle) {
                if (customStyle.View) {
                    bgColor = customStyle.View.backgroundColor;
                }
            }
            return <SView col={"xs-12"} center height >
                <SView style={{
                    overflow: 'hidden',
                    backgroundColor: STheme.color.card,
                }} height colSquare>
                    <DropFileSingle {...Parent.getProps()} style={{}} accept={"image/*"} cstyle={Parent.getStyle()} onChange={(val) => {
                        Parent.setValue(val);
                    }} />
                </SView>
            </SView>
        }

        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    })
}
const file = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            editable: false,
        },
        style: {
            View: {
                paddingStart: 0,
                height: 180,
            }
        },
        render: (data) => {
            return <SView style={{
                width: "100%",
                height: "100%",
                flex: 1,
                // backgroundColor:"#f0f",
                overflow: 'hidden',
            }}>
                <DropFileSingle {...Parent.getProps()} style={{}} cstyle={Parent.getStyle()} onChange={(val) => {
                    // console.log(val);
                    Parent.setValue(val);
                }} />
            </SView>
        }

        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    })
}
const files = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            editable: false,
        },
        style: {
            View: {
                paddingStart: 0,
                height: 180,
            }
        },
        render: (data) => {
            return <SView style={{
                width: "100%",
                height: "100%",
                overflow: 'hidden',
                // backgroundColor:"#00f",
            }}>
                <SScrollView2 disableHorizontal contentContainerStyle={{
                    flex: 1
                }}>
                    <DropFile {...Parent.getProps()} cstyle={Parent.getStyle()} onChange={(val) => {
                        // console.log(val);
                        Parent.setValue(val);
                    }} />
                </SScrollView2>
            </SView>
        }

        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    })
}
const direccion = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            editable: false,
        },
        style: {
            View: {
                // height: 100,
            }
        },
        onPress: () => {
            // alert("asdsa")
            SNavigation.navigate("sc_direccion", { direccion: Parent.getValue(), lat: Parent.getOption("latLng").latitude, lng: Parent.getOption("latLng").longitude })
        }


        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    })
}
const textArea = (type: TypeType, Parent: SInput) => {
    return buildResp({
        props: {
            multiline: true,
        },
        style: {
            View: {
                height: 100,
            }
        },
    })
}
const checkBox = (type: TypeType, Parent: SInput) => {
    let style = {};
    if (Parent) {
        if (Parent.getProps()) {
            if (Parent.getProps().style) {
                style = Parent.getProps().style;
            }
        }
    }

    return buildResp({
        props: {
            editable: false,
        },
        style: {
            View: {
                flexDirection: "row",
                paddingStart: 0,
                // flex:1,
                flexWrap: "wrap",
                // width: 20,
                // height: 20,
                borderWidth: 0,
                backgroundColor: "transparent"
                // opacity:0,
            },
            LabelStyle: {
                position: "absolute",
                // width: "auto",
                margin: 0,
                padding: 0,
                marginRight: 0,
                top: 2,
                left: 20,

            }

        },
        render: (data) => {
            var active = Parent.getValue();
            Parent.state.value = !!active;

            return <SView style={{
                position: "absolute",
                left: 0,
                width: 20,
                height: 20,
                borderWidth: 1,
                borderRadius: 4,
                borderColor: (Parent.props.color ?? STheme.color.text),
                backgroundColor: !active ? "" : (Parent.props.backgroundColor ?? "#1975FF"),
                justifyContent: "center",
                alignItems: "center",
                ...style
            }} onPress={() => {
                if (Parent.getProps().disabled) {
                    return;
                }

                Parent.setValue(!active);

            }} center >
                {!active ? null : <SText fontSize={16} font={"Roboto"} bold color={(Parent.props.color ?? STheme.color.text)}>{"✓"}</SText>}
            </SView >
        }
    })
}