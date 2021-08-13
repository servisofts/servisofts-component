import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { SInput } from ".";
export declare type TypeType = "default" | "fecha" | "password" | "email" | "phone" | "number" | "money" | "telefono";
declare type returnType = {
    props?: TextInputProps;
    onPress?: Function;
    verify?: Function;
    filter?: Function;
    onChangeText?: Function;
    icon?: any;
    style?: {
        View?: ViewStyle;
        InputText?: TextStyle;
        LabelStyle?: TextStyle;
    };
};
export declare const Type: (type: TypeType, Parent: SInput) => returnType;
export {};
