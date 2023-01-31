import React, { Component } from 'react';
export declare type SPolylineType = {
    _type_map: string;
    coordinates: Array<{
        latitude: number;
        longitude: number;
    }>;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
};
export default abstract class SPolylineAbstract extends Component<SPolylineType> {
    static defaultProps: SPolylineType;
    state: {};
    constructor(props: any);
    abstract render(): React.ReactNode;
}
