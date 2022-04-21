import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { TypeInputProps } from '../SInput/index';
import { SViewProps } from '../SView/index';
import { onSubmitProps } from '../SButtom/index';
interface InputsTp {
    [index: string]: TypeInputProps;
}
export declare type SFromProps = {
    style?: ViewStyle;
    props?: SViewProps;
    inputProps?: TypeInputProps;
    inputs: InputsTp;
    onSubmit?: Function;
    onSubmitName?: String;
    onSubmitProps?: onSubmitProps;
} & SViewProps;
export default class SForm extends Component<SFromProps> {
    static defaultProps: {
        props: {};
    };
    _ref: any;
    state: any;
    constructor(props: any);
    verify(): boolean;
    clear(): this;
    setValues(obj: any): void;
    getValues(): {};
    focus(key: any): void;
    getFiles(): any;
    uploadFiles(url: any): void;
    submitFiles(data: any, key: any, url: any): void;
    submit(): {};
    getButtom(): JSX.Element;
    getInputs(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export {};
