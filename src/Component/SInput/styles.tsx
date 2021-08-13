import { Platform, StyleSheet } from "react-native"
import { STheme } from "../../index"

//------ESTILOS------
// En los estilos NO SE DEVE colocar
//Tamanhos y fomas


type Typesp = "default" | "primary" | "secondary" | "calistenia"


export type TypeStyles = Typesp | [Typesp]

const getType = (type: TypeStyles) => {
    switch (type) {
        case "calistenia":
            return StyleSheet.create({
                "View": {
                    backgroundColor: STheme.color.primary + "22",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "44",
                    borderRadius: 4,
                    marginTop: 32,
                    paddingStart: 8,
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -22,
                    left: 8,
                    fontSize: 14,
                    color: STheme.color.primary,
                    // backgroundColor:STheme.color.primary+"22",
                    // borderRadius:4,
                    // padding:4,

                },
                "InputText": {
                    fontSize: 14,
                    color: STheme.color.primary,
                    ...(Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background }),
                },
                "placeholder": {
                    color: STheme.color.background
                },
                "error": {
                    borderColor: STheme.color.danger,
                    // color: STheme.color.primary + "66"
                },
            })
        case "secondary":
            return StyleSheet.create({
                "View": {
                    backgroundColor: STheme.color.secondary,
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    borderRadius: 4,
                },
                "LabelStyle": {

                },
                "InputText": {
                    padding: 4,
                    color: STheme.color.primary,
                    ...(Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background }),
                },
                "placeholder": {
                    color: STheme.color.background
                },
                "error": {
                    borderColor: STheme.color.danger,
                    // color: STheme.color.primary + "66"
                },
            })
        case "primary":
            return StyleSheet.create({
                "View": {
                    borderWidth: 1,
                    borderColor: STheme.color.primary,
                    backgroundColor: STheme.color.primary + "11",
                    borderRadius: 2,
                    marginTop: 32,
                    paddingStart: 8,
                },
                "LabelStyle": {
                    position: "absolute",
                    top: -22,
                    left: 8,
                    fontSize: 14,
                    color: STheme.color.secondary,

                    // backgroundColor:STheme.color.primary+"22",
                    // borderRadius:4,
                    // padding:4,

                },
                "InputText": {
                    fontSize: 14,
                    color: STheme.color.secondary,
                    ...(Platform.OS != "web" ? {} : { placeholderTextColor: STheme.color.background }),
                },
                "placeholder": {
                    color: STheme.color.background
                },
                "error": {
                    borderColor: STheme.color.danger
                    // color: STheme.color.primary + "66"
                },
            })
        default:
            return StyleSheet.create({
                "View": {

                },
                "LabelStyle": {

                },
                "InputText": {

                },
                "placeholder": {
                },
                "error": {
                    borderColor: STheme.color.danger,
                },
            })
    }
}

export const CustomStyles = (type: TypeStyles) => {
    var arrStyles: any = type;
    if (typeof type == "string") {
        arrStyles = type.split(" ");
    }
    var styleTemp = []
    for (let i = 0; i < arrStyles.length; i++) {
        styleTemp.push(getType(arrStyles[i]));
    }
    return StyleSheet.flatten(styleTemp)
}

