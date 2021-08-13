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
import { Platform, StyleSheet } from "react-native";
import { STheme } from "../../index";
var getType = function (type) {
    switch (type) {
        case "calistenia":
            return StyleSheet.create({
                "View": {
                    backgroundColor: STheme.color.primary + "22",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "44",
                    borderRadius: 4,
                    marginTop: 32,
                    paddingStart: 8
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -22,
                    left: 8,
                    fontSize: 14,
                    color: STheme.color.primary
                },
                "InputText": __assign({ fontSize: 14, color: STheme.color.primary }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background })),
                "placeholder": {
                    color: STheme.color.background
                },
                "error": {
                    borderColor: STheme.color.danger
                }
            });
        case "secondary":
            return StyleSheet.create({
                "View": {
                    backgroundColor: STheme.color.secondary,
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    borderRadius: 4
                },
                "LabelStyle": {},
                "InputText": __assign({ padding: 4, color: STheme.color.primary }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background })),
                "placeholder": {
                    color: STheme.color.background
                },
                "error": {
                    borderColor: STheme.color.danger
                }
            });
        case "primary":
            return StyleSheet.create({
                "View": {
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    backgroundColor: STheme.color.primary + "11",
                    borderRadius: 2,
                    marginTop: 32,
                    paddingStart: 8
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -22,
                    left: 8,
                    fontSize: 14,
                    color: STheme.color.secondary
                },
                "InputText": __assign({ fontSize: 14, color: STheme.color.secondary }, (Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background })),
                "placeholder": {
                    color: STheme.color.background
                },
                "error": {
                    borderColor: STheme.color.danger
                    // color: STheme.color.primary + "66"
                }
            });
        default:
            return StyleSheet.create({
                "View": {},
                "LabelStyle": {},
                "InputText": {},
                "placeholder": {},
                "error": {
                    borderColor: STheme.color.danger
                }
            });
    }
};
export var CustomStyles = function (type) {
    var arrStyles = type;
    if (typeof type == "string") {
        arrStyles = type.split(" ");
    }
    var styleTemp = [];
    for (var i = 0; i < arrStyles.length; i++) {
        styleTemp.push(getType(arrStyles[i]));
    }
    return StyleSheet.flatten(styleTemp);
};
