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
    component?: any;
    options?: Array<any>;
    render?: (data: String, id?: any) => {};
};
declare type SType = {
    header: [Header_props];
    data: [Object] | Object;
    debug?: Boolean;
    filter?: (data: String, id?: any) => boolean;
    limit?: number;
};
export default class STable2 extends Component<SType> {
    state: any;
    dataProcesada: any;
    _anim: {
        size: Animated.Value;
        headerSize: {};
        headerPosition: {};
    };
    static defaultProps: {};
    constructor(props: any);
    componentDidMount(): void;
    getDatoRecursive(obj: any, key: any): any;
    buildData: () => Promise<void>;
    buscar(data: any): any;
    header: () => JSX.Element;
    data: () => JSX.Element | JSX.Element[];
    Footer: () => JSX.Element;
    render(): JSX.Element;
}
export {};
