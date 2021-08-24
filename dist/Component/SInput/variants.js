import { StyleSheet } from "react-native";
var getType = function (type) {
    switch (type) {
        case "center":
            return StyleSheet.create({
                "View": {
                    justifyContent: "center",
                    alignItems: "center"
                }
            });
        case "center-horizontal":
            return StyleSheet.create({
                "View": {
                    justifyContent: "center"
                }
            });
        case "center-vertical":
            return StyleSheet.create({
                "View": {
                    alignItems: "center"
                }
            });
        case "small":
            return StyleSheet.create({
                "View": {
                    height: 40
                }
            });
        default:
            return StyleSheet.create({
                "View": {
                    paddingStart: 8,
                    height: 50
                }
            });
    }
};
export var Variant = function (type) {
    var arrStyles = type;
    if (typeof type == "string") {
        arrStyles = type.split(" ");
    }
    if (!arrStyles) {
        arrStyles = ["default"];
    }
    var styleTemp = [getType("default")];
    for (var i = 0; i < arrStyles.length; i++) {
        styleTemp.push(getType(arrStyles[i]));
    }
    return StyleSheet.flatten(styleTemp);
};
