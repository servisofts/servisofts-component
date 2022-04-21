import React, { Component } from 'react';
import { TextInputProps } from 'react-native';
import { SViewProps } from '../../index';
import { TypeVariant } from './variants';
import { TypeType } from './types';
import { TypeStyles } from './styles';
import { SColType } from '../../Types';
export declare type SInputType = TypeType;
export declare type TypeInputProps = {
    customStyle?: TypeStyles;
    type?: TypeType;
    options?: Array<any>;
    isRequired?: Boolean;
    variant?: TypeVariant;
    col?: SColType;
    color?: any;
    defaultValue?: any;
    error?: boolean;
    placeholder?: any;
    icon?: any;
    iconR?: any;
    label?: String;
    props?: any;
    separation?: number;
    onChangeText?: (text: string) => any;
    onPress?: (val: any) => void;
    onStateChange?: (value: any) => void;
    latLng?: {
        latitude: number;
        longitude: number;
    };
} & TextInputProps & SViewProps;
export declare class SInput extends Component<TypeInputProps> {
    static TYPE(type: TypeType): TypeType;
    layout: any;
    style: any;
    type: any;
    state: any;
    customStyle: any;
    variant: any;
    _ref: any;
    inpref: any;
    static defaultProps: {
        props: {};
        style: {};
        onStateChange: () => void;
    };
    constructor(props: any);
    componentDidMount(): void;
    getComponent(): JSX.Element;
    getProps(): Readonly<TypeInputProps> & Readonly<{
        children?: React.ReactNode;
    }>;
    getStyle(): any;
    getOption(option: any): any;
    getData(): any;
    verify(noStateChange?: boolean): boolean;
    notifyBlur(): void;
    setValue(value: any): void;
    getType(): TypeType;
    getValue(): any;
    getCustomStyle(): any;
    isRender(type: any): JSX.Element;
    onChangeText: (_text: any) => void;
    getLabel(): JSX.Element;
    getIcon_r(): JSX.Element;
    getIcon(): JSX.Element;
    render(): JSX.Element;
}
