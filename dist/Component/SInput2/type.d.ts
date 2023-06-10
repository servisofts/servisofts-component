import { TextInputProps } from 'react-native';
import InputTypes from "./types/index";
declare type KeysOfMyObject = keyof typeof InputTypes;
export declare type SInput2PropsType = {
    type: KeysOfMyObject;
} & TextInputProps;
export {};
