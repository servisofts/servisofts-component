import { Component } from 'react';
import { Animated } from 'react-native';
import { Header_props } from './header';
declare type SType = {
    header: [Header_props];
    data: [Object] | Object;
};
export default class STable2 extends Component<SType> {
    state: any;
    _anim: {
        size: Animated.Value;
        headerSize: {};
        headerPosition: {};
    };
    static defaultProps: {};
    constructor(props: any);
    componentDidMount(): void;
    header: () => JSX.Element | JSX.Element[];
    data: () => JSX.Element[];
    buildAnimations: () => void;
    render(): JSX.Element;
}
export {};
