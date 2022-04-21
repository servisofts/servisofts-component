import { Component } from 'react';
declare type PropsType = {
    coordinates: Array<{
        latitude: number;
        longitude: number;
    }>;
    strokeColor?: string;
    strokeWidth?: number;
    fillColor?: string;
};
export default class SPolyline extends Component<PropsType> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
