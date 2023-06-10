import { TextInputProps, TextInput } from 'react-native';
import InputTypes from "./types/index"
type KeysOfMyObject = keyof typeof InputTypes;
// type a = KeysOfMyObject;
export type SInput2PropsType = {
    type: KeysOfMyObject
} & TextInputProps

