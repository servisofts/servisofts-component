import { Component } from 'react';
export default class SMapView extends Component {
    mapa: any;
    state: any;
    constructor(props: any);
    getposition: () => JSX.Element;
    componentDidMount(): void;
    animateToRegion(region: any, time: any): void;
    fitToCoordinates(arr: any, props: any): void;
    render(): JSX.Element;
}
