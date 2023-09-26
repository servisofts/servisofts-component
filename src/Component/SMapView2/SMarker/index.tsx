import React, { Component } from 'react';
import { SView } from "../../../index"
import SMarkerAbstract from './abstract';
export default class SMarker extends SMarkerAbstract {

    renderMap(child, { map, maps, key }, _toRemove) {
        var Itm: any = (props) => <div key={props.key}>{props.children}</div>
        return <Itm key={key} lat={this.props.latitude} lng={this.props.longitude}>{child}</Itm>;
    }
    render() {
        var transform: any = [{ translateY: "-100%" }]
        return <div style={{
            cursor: "pointer",
            textAlign: "center",
            width:this.props.width,
            height:this.props.height
        }} onClick={this.props?.onPress}  >
            {this.props.children ?? this._default()}
        </div>
    }
}
