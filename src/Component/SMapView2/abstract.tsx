import React, { Component } from 'react'
import SMarker from "./SMarker"
import SPolyline from './SPolyline'
import SCircle from './SCircle'
type PositionType = {
    x: number,
    y: number,
}
type LatLngType = {
    latitude: number,
    longitude: number,
}
type RegionType = {
    latitudeDelta: number, longitudeDelta: number
} & LatLngType

type EdgePadding = {
    top: number;
    right: number;
    bottom: number;
    left: number;
};

export type SMapViewType = {
    initialRegion: RegionType,
    customMapStyle?: [any],
    onRegionChangeComplete?: (region: LatLngType) => void,
    onPress?: (event: { coordinate: LatLngType, position: PositionType }) => void,
}

export default abstract class SMapViewAbstract extends Component<SMapViewType> {
    static SMarker = SMarker;
    static SPolyline = SPolyline;
    static SCircle = SCircle;
    mapa;
    state = {
        region: {
            latitude: 17,
            longitude: 17,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }
    }
    constructor(props) {
        super(props);
        if (this.props.initialRegion) {
            this.state.region = this.props.initialRegion;
        }
    }

    abstract render(): React.ReactNode;
    abstract center();
    abstract animateToRegion(region: RegionType, time: number);
    abstract fitToCoordinates(points: LatLngType[], options: { edgePadding?: EdgePadding; animated?: boolean });

    setRegion(region: RegionType) {
        this.state.region = region;
        this.setState({ ...this.state });
    }
}