/// <reference types="react" />
import SMapViewAbstract from './abstract';
export default class SMapView extends SMapViewAbstract {
    fitToCoordinates(points: {
        latitude: number;
        longitude: number;
    }[], options: {
        edgePadding?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
        animated?: boolean;
    }): void;
    maps: any;
    animateToRegion(region: {
        latitudeDelta: number;
        longitudeDelta: number;
    } & {
        latitude: number;
        longitude: number;
    }, time: number): void;
    getZoom: (region: any) => number;
    _toRemove: any[];
    _getChildrens(): any;
    center(): void;
    render(): JSX.Element;
}
