import { Component } from 'react';
import { ViewStyle, TextInputProps } from 'react-native';
import { TypeVariant } from './variants';
import { TypeType } from './types';
import { TypeStyles } from './styles';
import { SColType } from '../../Types';
export declare type SInputType = TypeType;
export declare type TypeInputProps = {
    style?: ViewStyle;
    customStyle?: TypeStyles;
    type?: TypeType;
    options?: Array<any>;
    isRequired?: Boolean;
    variant?: TypeVariant;
    defaultValue?: any;
    placeholder?: any;
    icon?: Component;
    label?: String;
};
interface IProps extends TextInputProps {
    style?: ViewStyle;
    props?: TypeInputProps;
    col?: SColType;
    onPress?: (val: any) => void;
    onStateChange?: (value: any) => void;
}
export declare class SInput extends Component<IProps> {
    static TYPE(type: TypeType): TypeType;
    layout: any;
    style: any;
    type: any;
    state: any;
    customStyle: any;
    variant: any;
    _ref: any;
    static defaultProps: {
        props: {};
        style: {};
        onStateChange: () => void;
    };
    constructor(props: any);
    getComponent(): JSX.Element;
    getOption(option: any): any;
    buildStyle(): void;
    verify(noStateChange?: boolean): boolean;
    setValue(val: any): void;
    notifyBlur(): void;
    getValue(): any;
    setData(val: any): void;
    getData(): any;
    focus(): void;
    getIcon(): JSX.Element;
    getStyle: () => any;
    getLabel(): JSX.Element;
    isRender(type: any): JSX.Element;
    render(): JSX.Element;
}
export {};
