import { Component } from 'react';
import { Animated } from 'react-native';
export declare type HeaderProps = {
    label: String;
    key: string;
    width?: number;
    index?: number;
    space?: number;
    hidden?: Boolean;
    editable?: Boolean;
    order?: "asc" | "desc";
    orderPriority?: number;
    component?: any;
    options?: Array<any>;
    render?: (data: any, id?: any) => {};
    animWidth?: Animated.Value;
    changeHF: any;
    key_header: any;
    filter_h?: any;
};
declare class Header extends Component<HeaderProps> {
    pan: any;
    size: any;
    constructor(props: any);
    initSize: any;
    createPan(): void;
    getAjustes(): JSX.Element;
    render(): JSX.Element;
}
export default Header;
