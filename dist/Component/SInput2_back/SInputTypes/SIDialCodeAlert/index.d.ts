import { Component } from 'react';
import { ViewStyle } from 'react-native';
import SDate from '../../../SDate';
declare type typeConfig = {
    defaultValue?: SDate & any;
};
declare type typeProps = {
    style?: ViewStyle;
    props?: typeConfig;
    onChange?: (value: boolean) => any;
};
export default class SIDialCodeAlert extends Component<typeProps> {
    static getDialCode(dialcode: any): {
        es: string;
        en: string;
        flag: string;
        code: string;
        dialCode: string;
        mask: string;
    };
    static getOpenButtom(dialcode: any, style: any, onChange: any): JSX.Element;
    state: any;
    static defaultProps: {
        props: {};
        style: {};
    };
    constructor(props: any);
    getLista(): JSX.Element;
    render(): JSX.Element;
}
export {};
