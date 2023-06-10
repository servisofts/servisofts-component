import { Component } from 'react';
import { ViewStyle } from 'react-native';
import SDate from '../../../SDate';
declare type typeConfig = {
    defaultValue?: SDate;
    minYear?: number;
    maxYear?: number;
};
declare type typeProps = {
    style: ViewStyle;
    props: typeConfig;
    onChange: (value: SDate) => any;
    onClose?: () => any;
    options?: Array<string> | Array<{
        key: string;
        content: any;
    }>;
};
export default class SISelect extends Component<typeProps> {
    value: any;
    scroll: any;
    refItens: any;
    state: any;
    static defaultProps: {
        props: {};
        style: {};
    };
    constructor(props: any);
    componentWillUnmount(): void;
    inital(): void;
    onScrollEnd: (key: any, evt: any) => void;
    selectIten(key: any, y: any): boolean;
    getListaKey: (key: any) => JSX.Element[];
    getLista: (key: any) => JSX.Element;
    getInfo(): JSX.Element;
    render(): JSX.Element;
}
export {};
