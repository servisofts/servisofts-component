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
import { Platform } from "react-native";
import { STheme } from "../../index";
//------ESTILOS------
// En los estilos NO SE DEVE colocar
//Tamanhos y fomas
import SComponentContainer from "../SComponentContainer";
var getType = function (type) {
    var _a, _b, _c, _d;
    var typesConfig = (_a = SComponentContainer.getInputsConfig()) !== null && _a !== void 0 ? _a : {};
    switch (type) {
        case "calistenia":
            return {
                "View": {
                    backgroundColor: STheme.color.secondary + "22",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "44",
                    borderRadius: 6,
                    marginTop: 32,
                    paddingStart: 8,
                    height: 50
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -10,
                    left: 0,
                    fontSize: 14,
                    width: "100%",
                    color: STheme.color.secondary
                },
                "InputText": __assign({ fontSize: 14, color: STheme.color.secondary }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.secondary + "66" })),
                "placeholder": {
                    color: STheme.color.secondary + "66"
                },
                "error": {
                    borderColor: STheme.color.danger
                }
            };
        case "kolping":
            return {
                "View": {
                    // backgroundColor: STheme.color.secondary + "22",
                    borderWidth: 3,
                    borderColor: STheme.color.lightGray,
                    borderRadius: 10,
                    marginTop: 32,
                    // paddingStart: 8,
                    height: 50
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -10,
                    left: 0,
                    fontSize: 14,
                    width: "100%",
                    color: STheme.color.text,
                    fontFamily: "LondonBetween"
                },
                "InputText": __assign({ fontSize: 14, paddingTop: 4, color: STheme.color.text, fontFamily: "LondonBetween", paddingStart: 4, justifyContent: 'center', alignItems: 'center', height: "100%" }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.text + "66" })),
                "placeholder": {
                    color: STheme.color.text + "66"
                },
                "error": {
                    borderColor: STheme.color.danger
                }
            };
        case "yoalquilo":
            return {
                "View": {
                    backgroundColor: STheme.color.card,
                    borderRadius: 10,
                    marginTop: 42,
                    borderWidth: 1,
                    borderColor: STheme.color.card,
                    // paddingStart: 8,
                    height: 45
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -10,
                    left: 2,
                    fontSize: 14,
                    width: "100%",
                    color: STheme.color.text,
                    fontFamily: "Roboto"
                },
                "InputText": __assign({ fontSize: 14, paddingTop: 4, color: STheme.color.text, fontFamily: "Roboto", paddingStart: 8, justifyContent: 'center', alignItems: 'center', height: "100%" }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.text + "66" })),
                "placeholder": {
                    color: STheme.color.text + "66"
                },
                "error": {
                    borderColor: STheme.color.danger
                }
            };
        case "bateon":
            return {
                "View": {
                    backgroundColor: STheme.color.secondary + "88",
                    // backgroundColor: "#ff0",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "44",
                    borderRadius: 32,
                    marginTop: 16,
                    height: 50,
                    paddingStart: 8
                },
                "LabelStyle": {
                    position: "absolute",
                    display: 'none',
                    // top: -10,
                    // left: 0,
                    fontSize: 14,
                    width: "100%",
                    color: STheme.color.secondary
                },
                "InputText": __assign({ fontSize: 14, color: STheme.color.secondary, alignItems: 'center', textAlign: "center" }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.secondary })),
                "placeholder": {
                    color: STheme.color.secondary
                },
                "error": {
                    borderColor: STheme.color.danger
                }
            };
        case "secondary":
            return __assign({ "View": {
                    backgroundColor: STheme.color.secondary,
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    borderRadius: 4
                }, "LabelStyle": {}, "InputText": __assign({ padding: 4, color: STheme.color.primary }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background })), "placeholder": {
                    color: STheme.color.background
                }, "error": {
                    borderColor: STheme.color.danger
                } }, (_b = typesConfig.secondary) !== null && _b !== void 0 ? _b : {});
        case "primary":
            return __assign({ "View": {
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    backgroundColor: STheme.color.primary + "11",
                    borderRadius: 2,
                    marginTop: 32,
                    paddingStart: 8
                }, "LabelStyle": {
                    position: "absolute",
                    top: -10,
                    fontSize: 14,
                    color: STheme.color.secondary
                }, "InputText": __assign({ fontSize: 14, color: STheme.color.secondary }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background })), "placeholder": {
                    color: STheme.color.background
                }, "error": {
                    borderColor: STheme.color.danger
                    // color: STheme.color.primary + "66"
                } }, (_c = typesConfig.primary) !== null && _c !== void 0 ? _c : {});
        default:
            if (type != "default" && typesConfig[type]) {
                return typesConfig[type];
            }
            return __assign({ "View": {}, "LabelStyle": {
                    color: STheme.color.secondary
                }, "InputText": {
                    color: STheme.color.secondary
                }, "placeholder": {}, "error": {
                    borderColor: STheme.color.danger
                } }, (_d = typesConfig["default"]) !== null && _d !== void 0 ? _d : {});
    }
};
export var CustomStyles = function (type) {
    var arrStyles = type;
    if (typeof type == "string") {
        arrStyles = type.split(" ");
    }
    if (!arrStyles) {
        arrStyles = ["default"];
    }
    var styleTemp = {};
    for (var i = 0; i < arrStyles.length; i++) {
        styleTemp = __assign(__assign({}, styleTemp), getType(arrStyles[i]));
    }
    return styleTemp;
};
