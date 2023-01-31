import React, { Component } from 'react';
import SMarker from "./SMarker";
import SPolyline from './SPolyline';
import SCircle from './SCircle';
declare type PositionType = {
    x: number;
    y: number;
};
declare type LatLngType = {
    latitude: number;
    longitude: number;
};
declare type RegionType = {
    latitudeDelta: number;
    longitudeDelta: number;
} & LatLngType;
declare type EdgePadding = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export declare type SMapViewType = {
    initialRegion: RegionType;
    customMapStyle?: [any];
    onRegionChangeComplete?: (region: LatLngType) => void;
    onPress?: (event: {
        coordinate: LatLngType;
        position: PositionType;
    }) => void;
};
export default abstract class SMapViewAbstract extends Component<SMapViewType> {
    static SMarker: typeof SMarker;
    static SPolyline: typeof SPolyline;
    static SCircle: typeof SCircle;
    mapa: any;
    state: {
        region: {
            latitude: number;
            longitude: number;
            latitudeDelta: number;
            longitudeDelta: number;
        };
    };
    constructor(props: any);
    abstract render(): React.ReactNode;
    abstract center(): any;
    abstract animateToRegion(region: RegionType, time: number): any;
    abstract fitToCoordinates(points: LatLngType[], options: {
        edgePadding?: EdgePadding;
        animated?: boolean;
    }): any;
    setRegion(region: RegionType): void;
}
export {};
