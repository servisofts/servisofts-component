import React, { Component } from 'react'
import SIcon from '../../SIcon'
import SView from '../../SView'


export type SMarkerDragableType = {
    key?: any,
    _type_map: string,
    latitude: number,
    longitude: number,
    width?: number,
    height?: number,
    fill?: string,
    children?: any,
    onDragEnd?: (e: { latitude: number, longitude: number }) => any,
    onPress?: () => any,
    icon?: {
        path?: "CIRCLE", // Forma de círculo
        scale?: number, // Tamaño del círculo
        fillColor?: string, // Color de relleno (rojo en este caso)
        fillOpacity?: number, // Opacidad del relleno (1 es completamente opaco)
        strokeWeight?: number, // Grosor del borde
        strokeColor?: string // Color del borde (blanco)
    }
}

export default abstract class SMarkerDragableAbstract extends Component<SMarkerDragableType> {
    static defaultProps: SMarkerDragableType = {
        latitude: 0,
        longitude: 0,
        _type_map: "marker",
        width: 25,
        fill: "#ff0000"
    }

    state = {
        latitude: null,
        longitude: null
    }
    abstract setCoordinate({ latitude, longitude })
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