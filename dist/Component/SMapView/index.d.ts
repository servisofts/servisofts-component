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
};
declare class SMapView extends Component<PropsType> {
    mapa: any;
    state: any;
    constructor(props: any);
    getZoom: (region: any) => number;
    getposition: () => void;
    componentDidMount(): void;
    setMarker(): void;
    render(): JSX.Element;
}
export default SMapView;
