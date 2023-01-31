import React, { Component } from 'react';
export declare type SCircleType = {
    _type_map: string;
    center: any;
    radius: number;
    onPress?: (event: any) => void;
    strokeWidth?: number;
    strokeOpacity?: number;
    strokeColor?: string;
    fillColor?: string;
    fillOpacity?: number;
    zIndex?: number;
    lineCap?: any;
    lineJoin?: any;
    miterLimit?: number;
    lineDashPhase?: number;
    lineDashPattern?: number[];
};
export default abstract class SCircleAbstract extends Component<SCircleType> {
    static defaultProps: SCircleType;
    state: {};
    constructor(props: any);
    abstract render(): React.ReactNode;
}
