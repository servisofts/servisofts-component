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
    data: Header_props;
    animationSize: Animated.Value;
    animationPosition: Animated.Value;
};
export default class Header extends Component<Props> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
