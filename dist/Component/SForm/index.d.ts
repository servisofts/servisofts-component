import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { TypeInputProps } from '../SInput/index';
import { SViewProps } from '../SView/index';
import { typeProps as ButtomType } from '../SButtom/index';
interface InputsTp {
    [index: string]: TypeInputProps;
}
export declare type SFromProps = {
    style?: ViewStyle;
    props?: SViewProps;
    inputProps?: TypeInputProps;
    inputs: InputsTp;
    loading?: boolean;
    onSubmit?: Function;
    onSubmitName?: String;
    onSubmitProps?: ButtomType;
    error?: String;
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
    uploadFiles(url: any, key: any): void;
    uploadFiles2(url: any): Promise<unknown>;
    uploadFile(file: any, url: any): void;
    submitFiles(data: any, key: any, url: any): void;
    submit(): {};
    getButtom(): JSX.Element;
    getInputs(): JSX.Element | JSX.Element[];
    render_error(): JSX.Element;
    render(): JSX.Element;
}
export {};
