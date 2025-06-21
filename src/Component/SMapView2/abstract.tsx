import React, { Component } from 'react'
import SMarker from "./SMarker"
import SMarkerDragable from './SMarkerDragable'
import SPolyline from './SPolyline'
import SCircle from './SCircle'
import SPolygon from "./SPolygon"
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

type LatLng = { lat: number, lng: number }
type headmap = {
    positions?: LatLng[],
    options?: {
        radius?: number,
        opacity?: number,
    }
}


export type SMapViewType = {
    initialRegion: RegionType,
    customMapStyle?: [any],
    showsUserLocation?: boolean,
    children?: any,
    headmap?: headmap,
    onRegionChangeComplete?: (region: RegionType) => void,
    onPress?: (event: { coordinate: LatLngType, position: PositionType }) => void,
}

export default abstract class SMapViewAbstract extends Component<SMapViewType> {
    static SMarker = SMarker;
    static SMarkerDragable = SMarkerDragable;
    static SPolyline = SPolyline;
    static SCircle = SCircle;
    static Cluster = ClusteredMapView;
    static SPolygon = SPolygon;
    static bootstrapURLKeys = {
        key: "AIzaSyDYLp8tqYQvGbQLdL0BbsAGYaXWr8dxTUg"
    }
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
    abstract getUserLocation(): Promise<LatLngType>;
    abstract animateToRegion(region: RegionType, time: number);
    abstract fitToCoordinates(points: LatLngType[], options: { edgePadding?: EdgePadding; animated?: boolean });

    setRegion(region: RegionType) {
        this.state.region = region;
        this.state.time = new Date().getTime();
        this.setState({ ...this.state });
    }
}