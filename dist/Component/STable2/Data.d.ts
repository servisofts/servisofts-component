import { Component } from 'react';
import { Animated } from 'react-native';
export declare type Header_props = {
    label: String;
    key: string;
    width?: number;
    index?: number;
    hidden?: Boolean;
    editable?: Boolean;
    order?: "asc" | "desc";
    orderPriority?: number;
    options?: Array<any>;
    render?: (data: String, id?: any) => {};
};
declare type Props = {
    index: number;
    header: Header_props;
    data: object;
    animationSize: Animated.Value;
    animationPosition: Animated.Value;
};
export default class Data extends Component<Props> {
    constructor(props: any);
    getData: (obj: any, key: any) => any;
    getContent(): any;
    render(): JSX.Element;
}
export {};
