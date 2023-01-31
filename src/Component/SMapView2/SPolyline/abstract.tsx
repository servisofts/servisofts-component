import React, { Component } from 'react'


export type SPolylineType = {
    _type_map: string,
    coordinates: Array<{ latitude: number, longitude: number }>,
    strokeColor?: string,
    strokeWidth?: number,
    fillColor?: string,
}

export default abstract class SPolylineAbstract extends Component<SPolylineType> {
    static defaultProps: SPolylineType = {
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