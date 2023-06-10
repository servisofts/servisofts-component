import React from "react";
import { View } from "react-native";
import SDate from "../SDate";
import { SText, SView, SPopupOpen } from "../../index";
import SIDialCodeAlert from "./SInputTypes/SIDialCodeAlert";
import SIFechaAlert from "./SInputTypes/SIFechaAlert";
import SISelect from "./SInputTypes/SISelect";
var buildResp = function (data) {
    return data;
};
export var Type = function (type, Parent) {
    switch (type) {
        case "select":
            return select(type, Parent);
        case "fecha":
            return fecha(type, Parent);
        case "date":
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
        case "image":
            return image(type, Parent);
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
    var value = Parent.getValue();
    var arr = [];
    if (value) {
        arr = value.split(" ");
    }
    var dialcodeTxt = "+591";
    if (arr.length > 1) {
        dialcodeTxt = arr[0];
        value = arr[1];
    }
    else {
        if (Parent.getData().dialCode) {
            dialcodeTxt = Parent.getData().dialCode.dialCode;
        }
    }
    var dialcode = SIDialCodeAlert.getDialCode(dialcodeTxt);
    return buildResp({
        props: {
            keyboardType: "phone-pad"
        },
        onChangeText: function (text) {
            var _value = Parent.getValue();
            if (_value) {
                var arr = _value.split(" ");
                if (arr.length > 1) {
                    console.log(arr[1]);
                    dialcode = SIDialCodeAlert.getDialCode(arr[0]);
                }
            }
            return dialcode.dialCode + " " + text;
        },
        verify: function (value) {
            if (!value)
                return false;
            var arr = value.split(" ");
            if (arr.length > 1) {
                value = arr[1];
            }
            var countOfNumber = dialcode.mask.match(/9/g).length;
            var isVerified = countOfNumber === (value === null || value === void 0 ? void 0 : value.length);
            return isVerified;
        },
        filter: function (value) {
            if (!value)
                return value;
            var _value = value;
            var arr = _value.split(" ");
            if (arr.length > 1) {
                dialcode = SIDialCodeAlert.getDialCode(arr[0]);
                _value = arr[1];
            }
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
        icon: (SIDialCodeAlert.getOpenButtom(dialcodeTxt, Parent.getStyle().InputText, function (dial) {
            var value = Parent.getValue();
            var arr = [];
            if (value) {
                arr = value.split(" ");
            }
            if (arr.length > 0) {
                Parent.setValue(dial.dialCode + " " + arr[1]);
            }
            else {
                Parent.setValue(dial.dialCode + " " + "");
            }
            Parent.notifyBlur();
        })),
        style: {
            View: {},
            InputText: {},
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
            return value;
        },
        verify: function (value) {
            if (!value)
                return false;
            return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(value);
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
                content: React.createElement(SISelect, { props: {
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
            keyboardType: "number-pad"
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
            if (value.indexOf("\.") >= 0) {
                var arr = value.split("\.");
                value = arr[0].replace(/\D/, "") + "." + arr[1].replace(/\D/, "");
            }
            else {
                value = value.replace(/\D/, "");
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
var image = function (type, Parent) {
    return buildResp({
        props: {
            keyboardType: "number-pad"
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
        verify: function (value) {
            if (!value)
                return false;
            return true;
        }
    });
};
