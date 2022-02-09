import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { SInput } from ".";
export declare type TypeType = "default" | "select" | "fecha" | "date" | "date_my" | "password" | "email" | "phone" | "number" | "money" | "telefono" | "image" | "file" | "direccion" | "textArea";
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
