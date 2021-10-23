import { Component } from 'react';
import { NativeScrollEvent, ScrollViewProps } from 'react-native';
declare type typeHeader = {
    label: String;
    key: String;
    width: Number;
};
export declare type onSrollEndEvt = {
    horizontal?: NativeScrollEvent;
    vertical?: NativeScrollEvent;
};
declare type SType = ScrollViewProps & {
    header?: [typeHeader];
    data?: [Object];
    style?: any;
    disableHorizontal?: Boolean;
    contentContainerStyle?: any;
    reverse?: Boolean;
    onScrollEnd?: (evt: onSrollEndEvt) => any;
    onScroll?: (evt: onSrollEndEvt) => {};
    footer?: Component;
};
export default class SSCrollView extends Component<SType> {
    scroll_h: any;
    scroll_v: any;
    layout: any;
    scrollv: any;
    scrollh: any;
    state: any;
    animValueV: any;
    constructor(props: any);
    componentDidMount(): void;
    getScrollCalc: (data: any) => {
        width: any;
        height: any;
        maxScroll: {
            x: number;
            y: number;
        };
        scrollPos: {
            x: any;
            y: any;
        };
    };
    scrollInfo: () => onSrollEndEvt;
    getLayout(): any;
    componentWillUnmount(): void;
    setEnabled(en: any): void;
    scrollIncrement({ x, y }: {
        x: any;
        y: any;
    }): void;
    scrollTo({ x, y }: {
        x: any;
        y: any;
    }, duration: any): void;
    moveScrollVertical({ x, y }: {
        x: any;
        y: any;
    }): void;
    moveScrollHorizontal({ x, y }: {
        x: any;
        y: any;
    }): void;
    scrollToEnd(): void;
    scrollToPosition({ x, y }: {
        x: any;
        y: any;
    }): void;
    onScrollAnimationEnd(): void;
    getScroll(): JSX.Element;
    render(): JSX.Element;
}
export {};
