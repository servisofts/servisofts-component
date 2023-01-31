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
    }): any;
    animateToRegion(region: {
        latitudeDelta: number;
        longitudeDelta: number;
    } & {
        latitude: number;
        longitude: number;
    }, time: number): void;
    getDistanciaMetros(lat1: any, lon1: any, lat2: any, lon2: any): number;
    analiceRecurcibe: (evt: any, inp: any, arr?: any[]) => any[];
    center(): void;
    render(): JSX.Element;
}
