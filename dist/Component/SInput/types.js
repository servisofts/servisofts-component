var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { View } from "react-native";
import SDate from "../SDate";
import { SText, STheme, SView, SPopupOpen, SIcon } from "../../index";
import SIDialCodeAlert from "./SInputTypes/SIDialCodeAlert";
import SIFechaAlert from "./SInputTypes/SIFechaAlert";
import SISelect from "./SInputTypes/SISelect";
import DropFile from "./SInputTypes/DropFile";
import SScrollView2 from "../SScrollView2";
import SNavigation from "../SNavigation";
import DropFileSingle from "./SInputTypes/DropFileSingle";
import SIFecha_MY_Alert from "./SInputTypes/SIFecha_MY_Alert";
import SIColorAlert from "./SInputTypes/SIColorAlert";
var buildResp = function (data) {
    return data;
};
export var Type = function (type, Parent) {
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
                props: {},
                style: {
                    View: {},
                    InputText: {},
                    LabelStyle: {}
                }
            });
    }
};
var phone = function (type, Parent) {
    var _a;
    var value = Parent.getValueClean();
    var dialcodeTxt = "+591";
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
    var dialcode = SIDialCodeAlert.getDialCode(dialcodeTxt);
    if (!((_a = Parent.getData()) === null || _a === void 0 ? void 0 : _a.dialCode)) {
        Parent.setData({
            dialCode: dialcode
        });
    }
    else {
        dialcode = Parent.getData().dialCode;
    }
    return buildResp({
        props: {
            keyboardType: "phone-pad"
        },
        onChangeText: function (text) {
            // var _value = Parent.getValue();
            return text;
        },
        verify: function (value) {
            if (!value)
                return false;
            var countOfNumber = dialcode.mask.match(/./g).length;
            var isVerified = countOfNumber === (value === null || value === void 0 ? void 0 : value.length);
            return isVerified;
        },
        filter: function (value) {
            if (!value)
                return value;
            var _value = value;
            var unmaskedPhoneNumber = (_value.match(/\d+/g) || []).join('');
            if (unmaskedPhoneNumber.length === 0) {
                return "";
            }
            var phoneNumber = dialcode.mask.replace(/9/g, '_');
            for (var index = 0; index < unmaskedPhoneNumber.length; index += 1) {
                phoneNumber = phoneNumber.replace('_', unmaskedPhoneNumber[index]);
            }
            var numberPointer = 0;
            for (var index = phoneNumber.length; index > 0; index -= 1) {
                if (phoneNumber[index] !== ' ' && !isNaN(parseInt(phoneNumber[index]))) {
                    numberPointer = index;
                    break;
                }
            }
            phoneNumber = phoneNumber.slice(0, numberPointer + 1);
            unmaskedPhoneNumber = (phoneNumber.match(/\d+/g) || []).join('');
            return phoneNumber;
        },
        icon: (SIDialCodeAlert.getOpenButtom(dialcode.dialCode, Parent.getStyle().InputText, function (dial) {
            Parent.setValue(Parent.getValueClean());
            dialcode = dial;
            Parent.setData({
                dialCode: dialcode
            });
            // Parent.notifyBlur();
        })),
        style: {
            View: {
            // backgroundColor:"#f0f"
            },
            InputText: {
                // padding:10,
                paddingEnd: 55
            },
            LabelStyle: {}
        }
    });
};
var email = function (type, Parent) {
    return buildResp({
        props: {
            keyboardType: "email-address"
        },
        style: {
            View: {},
            InputText: {}
        },
        filter: function (_value) {
            if (!_value)
                return _value;
            var value = _value;
            value = value.trim();
            value = value.split(" ")[0];
            value = value.toLowerCase();
            return value;
        },
        verify: function (value) {
            if (!value)
                return false;
            return /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
        }
    });
};
var password = function (type, Parent) {
    return buildResp({
        props: {
            secureTextEntry: true
        },
        style: {
            View: {},
            InputText: {},
            LabelStyle: {}
        }
    });
};
var color = function (type, Parent) {
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none"
        },
        onPress: function () {
            SPopupOpen({
                key: "fechaPicker",
                content: React.createElement(SIColorAlert, { defaultValue: Parent.getValue(), onClose: function () {
                        // Parent.notifyBlur();
                    }, onChange: function (val) {
                        // console.log(val);
                        Parent.setValue(val);
                    } })
            });
        },
        icon: (React.createElement(SView, { style: {
                width: 30,
                height: "100%",
                padding: 6,
                backgroundColor: Parent.getValue()
            }, center: true })),
        style: {
            View: {},
            InputText: {},
            LabelStyle: {}
        }
    });
};
var fecha = function (type, Parent) {
    var format = "yyyy-MM-dd";
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none"
        },
        onPress: function () {
            var value = new SDate(Parent.getValue() + "", "yyyy-MM-dd");
            SPopupOpen({
                key: "fechaPicker",
                content: React.createElement(SIFechaAlert, { props: {
                        defaultValue: value
                    }, onClose: function () {
                        Parent.notifyBlur();
                    }, onChange: function (val) {
                        // console.log(val);
                        Parent.setValue(val.toString(format));
                    } })
            });
        },
        style: {
            View: {},
            InputText: {},
            LabelStyle: {}
        }
    });
};
var date_my = function (type, Parent) {
    var format = "yyyy-MM";
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none"
        },
        onPress: function () {
            var value = new SDate(Parent.getValue() + "", "yyyy-MM");
            SPopupOpen({
                key: "fechaPicker",
                content: React.createElement(SIFecha_MY_Alert, { props: {
                        defaultValue: value
                    }, onClose: function () {
                        Parent.notifyBlur();
                    }, onChange: function (val) {
                        // console.log(val);
                        Parent.setValue(val.toString(format));
                    } })
            });
        },
        style: {
            View: {},
            InputText: {},
            LabelStyle: {}
        },
        filter: function (_value) {
            var value = new SDate(_value + "", "yyyy-MM");
            return value.toString("yyyy-MM");
        }
    });
};
var select = function (type, Parent) {
    // var format = "yyyy-MM-dd";
    return buildResp({
        props: {
            editable: false,
            // focusable: false,
            pointerEvents: "none"
        },
        render: function (_Parent) {
            var value = _Parent.getValue();
            var options = _Parent.getOption("options");
            options.map(function (option) {
                if (option.key == value) {
                    value = option;
                }
            });
            if (!value)
                return React.createElement(View, null);
            if (typeof value != "object") {
                return React.createElement(SText, { col: "xs-12" }, value);
            }
            if (!value.content)
                return React.createElement(View, null);
            if (typeof value.content != "object") {
                return React.createElement(SText, { col: "xs-12" }, value.content);
            }
            return value.content;
        },
        onPress: function () {
            // var value = new SDate(Parent.getValue() + "", "yyyy-MM-dd");
            var options = Parent.getOption("options");
            SPopupOpen({
                key: "fechaPicker",
                content: React.createElement(SISelect, { height: 300, props: {
                        defaultValue: Parent.getValue()
                    }, options: options, onClose: function () {
                        Parent.notifyBlur();
                    }, onChange: function (val) {
                        // console.log(val);
                        Parent.setValue(val);
                    } })
            });
        },
        style: {
            View: {
                justifyContent: "center"
            },
            InputText: {
                fontSize: 0
            },
            LabelStyle: {}
        }
    });
};
var number = function (type, Parent) {
    return buildResp({
        props: {
            keyboardType: "number-pad"
        },
        style: {
            View: {},
            InputText: {}
        },
        filter: function (_value) {
            if (!_value)
                return _value;
            var value = _value;
            if (typeof value === 'string') {
                value = value.replace(/[^\d]/g, '');
            }
            return value;
        },
        verify: function (value) {
            if (!value)
                return false;
            return true;
        }
    });
};
var money = function (type, Parent) {
    return buildResp({
        props: {
            keyboardType: "number-pad",
            placeholder: "0.00"
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
                fontSize: 16
            }
        },
        icon: (React.createElement(SView, { style: {
                width: 30,
                height: "100%"
            }, center: true },
            React.createElement(SText, null, "Bs."))),
        filter: function (_value) {
            if (!_value)
                return _value;
            var value = _value + "";
            value = value.trim();
            // var value: any = value.replace(/./g, "");
            if (value.indexOf("\.") >= 0) {
                var arr = value.split("\.");
                var int = arr[0].replace(/\D/, "");
                var dec = arr[1].replace(/\D/, "");
                var num = parseInt(int + dec) / 100;
                value = num.toFixed(2);
                // if (dec > 99) {
                //     int += "" + Math.round(dec / 100)
                //     dec = dec % 100;
                // }
            }
            else {
                value = value.replace(/\D/, "");
                value = parseFloat(value);
                // value = value.toFixed(2);
                value = "0.0" + value;
            }
            return value + "";
        },
        verify: function (value) {
            if (!value)
                return false;
            return true;
        }
    });
};
var hour = function (type, Parent) {
    return buildResp({
        props: {
            keyboardType: "number-pad",
            placeholder: "00:00"
        },
        style: {},
        icon: (React.createElement(SView, { style: {
                width: 30,
                height: "100%"
            }, center: true },
            React.createElement(SText, null, "H"))),
        filter: function (_value) {
            if (!_value)
                return null;
            var int = _value.replace(/\D/, "") + "";
            var hora = int.substring(0, 2);
            var minutos = int.substring(2, 4);
            if (parseFloat(minutos) >= 60)
                minutos = "59";
            if (parseFloat(hora) >= 24) {
                int = "2359";
                hora = "23";
                minutos = "59";
            }
            if (int.length > 2)
                return hora + ":" + minutos;
            //     if (parseFloat(int) > 24) int = "24"
            //     return int.substring(0, 2) + ":" + int.substring(2, 4);
            // }
            // if (parseFloat(int) > 24) int = "24"
            return hora;
        },
        verify: function (value) {
            if (!value)
                return false;
            return true;
        }
    });
};
var link = function (type, Parent) {
    return buildResp({
        props: {
            // keyboardType: "number-pad",
            placeholder: "https://servisofts.com/"
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
                fontSize: 16
            }
        },
        icon: (React.createElement(SView, { style: {
                width: 30,
                height: "100%",
                padding: 6
            }, center: true },
            React.createElement(SIcon, { name: "World", fill: STheme.color.text }))),
        filter: function (_value) {
            var value = _value + "";
            if (!value) {
                return "";
            }
            return unescape(value);
        },
        verify: function (value) {
            if (!value)
                return false;
            return true;
        }
    });
};
var image = function (type, Parent) {
    return buildResp({
        props: {
            editable: false,
            placeholder: ""
        },
        style: {
            View: {
                paddingStart: 0,
                backgroundColor: "transparent",
                height: Parent.getOption("height") == "default" ? 100 : Parent.getOption("height")
            },
            InputText: {
                display: 'none'
            }
        },
        render: function (data) {
            var bgColor = "";
            var customStyle = Parent.getCustomStyle();
            if (customStyle) {
                if (customStyle.View) {
                    bgColor = customStyle.View.backgroundColor;
                }
            }
            return React.createElement(SView, { col: "xs-12", center: true, height: true },
                React.createElement(SView, { style: {
                        overflow: 'hidden',
                        backgroundColor: STheme.color.card
                    }, height: true, colSquare: true },
                    React.createElement(DropFileSingle, __assign({}, Parent.getProps(), { accept: "image/*", cstyle: Parent.getStyle(), onChange: function (val) {
                            Parent.setValue(val);
                        } }))));
        }
        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    });
};
var file = function (type, Parent) {
    return buildResp({
        props: {
            editable: false
        },
        style: {
            View: {
                paddingStart: 0,
                height: 180
            }
        },
        render: function (data) {
            return React.createElement(SView, { style: {
                    width: "100%",
                    height: "100%",
                    flex: 1,
                    // backgroundColor:"#f0f",
                    overflow: 'hidden'
                } },
                React.createElement(DropFileSingle, __assign({}, Parent.getProps(), { cstyle: Parent.getStyle(), onChange: function (val) {
                        // console.log(val);
                        Parent.setValue(val);
                    } })));
        }
        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    });
};
var files = function (type, Parent) {
    return buildResp({
        props: {
            editable: false
        },
        style: {
            View: {
                paddingStart: 0,
                height: 180
            }
        },
        render: function (data) {
            return React.createElement(SView, { style: {
                    width: "100%",
                    height: "100%",
                    overflow: 'hidden'
                } },
                React.createElement(SScrollView2, { disableHorizontal: true, contentContainerStyle: {
                        flex: 1
                    } },
                    React.createElement(DropFile, __assign({}, Parent.getProps(), { cstyle: Parent.getStyle(), onChange: function (val) {
                            // console.log(val);
                            Parent.setValue(val);
                        } }))));
        }
        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    });
};
var direccion = function (type, Parent) {
    return buildResp({
        props: {
            editable: false
        },
        style: {
            View: {
            // height: 100,
            }
        },
        onPress: function () {
            // alert("asdsa")
            SNavigation.navigate("sc_direccion", { direccion: Parent.getValue(), lat: Parent.getOption("latLng").latitude, lng: Parent.getOption("latLng").longitude });
        }
        // verify: (value) => {
        //     if (!value) return false;
        //     return true;
        // }
    });
};
var textArea = function (type, Parent) {
    return buildResp({
        props: {
            multiline: true
        },
        style: {
            View: {
                height: 100
            }
        }
    });
};
var checkBox = function (type, Parent) {
    return buildResp({
        props: {
            editable: false
        },
        style: {
            View: {
                paddingStart: 0,
                width: 20,
                height: 20
            },
            LabelStyle: {
                width: null,
                position: "absolute"
            }
        },
        render: function (data) {
            var active = Parent.getValue();
            Parent.state.value = !!active;
            return React.createElement(SView, { style: {
                    width: 20,
                    height: 20,
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: STheme.color.card,
                    backgroundColor: !active ? "" : "#1975FF"
                }, onPress: function () {
                    if (Parent.getProps().disabled) {
                        return;
                    }
                    Parent.setValue(!active);
                }, center: true }, !active ? null : React.createElement(SText, { fontSize: 18, font: "Roboto", bold: true, color: "#fff" }, "✓"));
        }
    });
};
