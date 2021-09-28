import { Component } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import SAPanResponder from '../../SAnimated/SAPanResponder';
export declare type SHeaderProps = {
    initialPosition: number;
    minWidth: number;
    style: ViewStyle;
    styleText: TextStyle;
    separation: number;
    header: Object;
    contentSize: any;
    getScroll: Function;
    loadAnimated: Function;
    onDelete: Function;
    changeHeader: Function;
};
export default class SHeader extends Component<SHeaderProps> {
    state: any;
    move: any;
    startPosition: any;
    lastMoved: any;
    startWidth: any;
    startContentSize: any;
    lastdx: any;
    static defaultProps: {
        minWidth: number;
        initialPosition: number;
        separation: number;
    };
    constructor(props: any);
    setScrollEnabled(val: any): void;
    scrollTo({ x, y }: {
        x: any;
        y: any;
    }): void;
    createPanMove(key: any): SAPanResponder;
    createPan(key: any): SAPanResponder;
    getOrder(header: any, i: any): JSX.Element;
    getHeaders(): any;
    render(): JSX.Element;
}
