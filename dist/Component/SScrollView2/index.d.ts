import { Component } from 'react';
import { NativeScrollEvent, ScrollViewProps, ViewStyle } from 'react-native';
export declare type onSrollEndEvt = {
    horizontal: NativeScrollEvent;
    vertical: NativeScrollEvent;
};
declare type SType = ScrollViewProps & {
    disableHorizontal?: boolean;
    reverse?: boolean;
    onScrollEnd?: (evt: onSrollEndEvt) => {};
    onScroll?: (evt: onSrollEndEvt) => {};
    header?: {
        style: ViewStyle;
        content: any;
    };
    footer?: Component;
    onPageFinish?: () => {};
};
export default class SScrollView2 extends Component<SType> {
    state: any;
    static defaultProps: {
        disableHorizontal: boolean;
        header: {
            style: {};
            content: JSX.Element;
        };
        footer: any;
    };
    constructor(props: any);
    setRef(key: any, ref: any): void;
    getRef(key: any): any;
    setEnabled(en: any): void;
    render(): JSX.Element;
}
export {};
