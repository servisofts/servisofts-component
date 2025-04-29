import React, { Component } from 'react'


export type PolygonType = {
    _type_map: string,
    coordinates: Array<{ latitude: number, longitude: number }>,
    strokeColor?: string,
    fillOpacity?: number,
    strokeWidth?: number,
    fillColor?: string,
    onPress?: (evt:any) => void,
}

export default abstract class SPolygonAbstract extends Component<PolygonType> {
    static defaultProps: PolygonType = {
        _type_map: "polyline",
        coordinates: [],
        strokeColor: "#000000",
        strokeWidth: 1,


    }

    state = {

    }
    constructor(props) {
        super(props);

    }


    abstract render(): React.ReactNode;
}