import React, { Component } from 'react'
import SMarker from "./SMarker"
import SPolyline from './SPolyline'
import SCircle from './SCircle'
import ClusteredMapView from './Cluster'
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
    showsUserLocation?: boolean,
    onRegionChangeComplete?: (region: RegionType) => void,
    onPress?: (event: { coordinate: LatLngType, position: PositionType }) => void,
}

export default abstract class SMapViewAbstract extends Component<SMapViewType> {
    static SMarker = SMarker;
    static SPolyline = SPolyline;
    static SCircle = SCircle;
    static Cluster = ClusteredMapView;
    mapa;
    state = {
        time: 0,
        region: {
            latitude: -17,
            longitude: -63,
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
        this.state.time = new Date().getTime();
        this.setState({ ...this.state });
    }
}