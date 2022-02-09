import { Component } from 'react';
declare type PropsType = {
    initialRegion: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
    onRegionChangeComplete?: (region: any) => void;
    onPress?: (event: any) => void;
    preventCenter?: boolean;
};
export default class SMapView extends Component<PropsType> {
    mapa: any;
    state: any;
    constructor(props: any);
    getposition: () => JSX.Element;
    componentDidMount(): void;
    animateToRegion(region: any, time: any): void;
    fitToCoordinates(arr: any, props: any): void;
    render(): JSX.Element;
}
export {};
