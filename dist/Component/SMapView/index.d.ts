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
    options?: {
        zoomControl?: boolean;
        mapTypeControl?: boolean;
        scaleControl?: boolean;
        streetViewControl?: boolean;
        rotateControl?: boolean;
        fullscreenControl?: boolean;
    };
};
declare class SMapView extends Component<PropsType> {
    mapa: any;
    state: any;
    constructor(props: any);
    getZoom: (region: any) => number;
    getposition: () => void;
    componentDidMount(): void;
    center(): void;
    setMarker(): void;
    animateToRegion(region: any, time: any): void;
    renderChildrens(): void;
    render(): JSX.Element;
}
export default SMapView;
