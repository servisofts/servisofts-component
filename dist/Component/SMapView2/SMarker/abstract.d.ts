import React, { Component } from 'react';
export declare type SMarkerType = {
    _type_map: string;
    latitude: number;
    longitude: number;
    width?: number;
    fill?: string;
};
export default abstract class SMarkerAbstract extends Component<SMarkerType> {
    static defaultProps: SMarkerType;
    state: {};
    constructor(props: any);
    _default(): JSX.Element;
    abstract render(): React.ReactNode;
}
