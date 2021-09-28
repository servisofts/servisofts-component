import React, { Component } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import Indicator from '../Indicator';
declare type typeScroll = {
    horizontal?: boolean;
    disableHorizontal?: boolean;
    indicator?: Indicator;
    contentContainerStyle?: StyleProp<ViewStyle>;
    onScroll?: (e: any) => void;
    onPageFinish?: () => {};
};
declare class Scroll extends Component<typeScroll> {
    enabled: any;
    indicator: any;
    scrollRef: any;
    contentSize: any;
    scrolldata: any;
    layout: any;
    constructor(props: any);
    componentWillUnmount(): void;
    getProps(): Readonly<typeScroll> & Readonly<{
        children?: React.ReactNode;
    }>;
    getLayout(): any;
    getContentSize(): any;
    getState(): Readonly<{}>;
    setIndicator(ref: any): void;
    isHorizontal(): boolean;
    noscroll(): void;
    setEnabled(bool: any): void;
    moveScroll({ x, y }: {
        x: any;
        y: any;
    }): void;
    render(): JSX.Element;
}
export default Scroll;
