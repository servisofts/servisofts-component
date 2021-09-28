import { StyleSheet } from "react-native"
import { STheme } from "../../index"

export type Typesp = "default"
    | "center"
    | "center-horizontal"
    | "center-vertical"
    | "small"


export type TypeVariant = Typesp | [Typesp]

const getType = (type: TypeVariant) => {
    switch (type) {
        case "center":
            return StyleSheet.create({
                "View": {
                    justifyContent: "center",
                    alignItems: "center",
                }
            })
        case "center-horizontal":
            return StyleSheet.create({
                "View": {
                    justifyContent: "center"
                }
            })
        case "center-vertical":
            return StyleSheet.create({
                "View": {
                    alignItems: "center"
                }
            })
        case "small":
            return StyleSheet.create({
                "View": {
                    height: 40,
                }
            })
        default:
            return StyleSheet.create({
                "View": {
                    paddingStart: 8,
                    height: 50,
                }
            })
    }
}

export const Variant = (type: TypeVariant) => {
    var arrStyles: any = type;
    if (typeof type == "string") {
        arrStyles = type.split(" ");
    }
    if(!arrStyles){
        arrStyles=["default"];
    }
    var styleTemp = [getType("default")]
    for (let i = 0; i < arrStyles.length; i++) {
        styleTemp.push(getType(arrStyles[i]));
    }
    return StyleSheet.flatten(styleTemp)
}



