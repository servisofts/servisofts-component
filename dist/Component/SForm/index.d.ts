import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { TypeInputProps } from '../SInput/index';
import { SViewProps } from '../SView/index';
import { onSubmitProps } from '../SButtom/index';
interface InputsTp {
    [index: string]: TypeInputProps;
}
export declare type SFromProps = {
    style: ViewStyle;
    props: SViewProps;
    inputProps: TypeInputProps;
    inputs: InputsTp;
    onSubmit: Function;
    onSubmitName: String;
    onSubmitProps: onSubmitProps;
};
export default class SForm extends Component<SFromProps> {
    static defaultProps: {
        props: {};
        onSubmitName: string;
    };
    _ref: any;
    constructor(props: any);
    getButtom(): JSX.Element;
    getInputs(): JSX.Element | JSX.Element[];
    render(): JSX.Element;
}
export {};
