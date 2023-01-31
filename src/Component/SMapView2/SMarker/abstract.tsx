import React, { Component } from 'react'
import SIcon from '../../SIcon'
import SView from '../../SView'


export type SMarkerType = {
    _type_map: string,
    latitude: number,
    longitude: number,
    width?: number,
    fill?: string,
}

export default abstract class SMarkerAbstract extends Component<SMarkerType> {
    static defaultProps: SMarkerType = {
        latitude: 0,
        longitude: 0,
        _type_map: "marker",
        width: 25,
        fill: "#ff0000"
    }

    state = {
    }
    constructor(props) {
        super(props);

    }

    _default() {
        return <SView width={this.props.width} height={this.props.width}>
            <SIcon name={"Marker"} width={this.props.width} height={this.props.width} fill={this.props.fill} />
        </SView>
    }

    abstract render(): React.ReactNode;
}