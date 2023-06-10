import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { SInput } from ".";
export declare type TypeType = "default" | "select" | "fecha" | "date" | "password" | "email" | "phone" | "number" | "money" | "telefono" | "image";
declare type returnType = {
    props?: TextInputProps;
    onPress?: Function;
    verify?: Function;
    filter?: Function;
    onChangeText?: Function;
    render?: Function;
    icon?: any;
    style?: {
        View?: ViewStyle;
        InputText?: TextStyle;
        LabelStyle?: TextStyle;
    };
};
export declare const Type: (type: TypeType, Parent: SInput) => returnType;
export {};
