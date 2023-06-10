import { Component } from 'react';
import { ViewStyle } from 'react-native';
declare type typeProps = {
    style: ViewStyle;
    defaultValue: any;
    onChange: (value: any) => any;
    onClose?: () => any;
};
export default class SIColorAlert extends Component<typeProps> {
    sdate: any;
    scroll: any;
    refItens: any;
    state: any;
    static defaultProps: {
        props: {};
        style: {};
    };
    constructor(props: any);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
