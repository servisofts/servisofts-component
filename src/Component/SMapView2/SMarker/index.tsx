import React, { Component } from 'react';
import { SView } from "../../../index"
import SMarkerAbstract from './abstract';
export default class SMarker extends SMarkerAbstract {

    renderMap(child, { map, maps }, _toRemove) {
        var Itm: any = (props) => <div>{props.children}</div>
        return <Itm key={this.props.latitude + "-" + this.props.longitude} lat={this.props.latitude} lng={this.props.longitude}>{child}</Itm>;
    }
    render() {
        var transform: any = [{ translateY: "-100%" }]
        return <div style={{
            cursor: "pointer",
            textAlign: "center",
        }}>
            <SView col={"xs-12"} style={{
                alignItems: 'center',
                transform: transform
            }}>
                {this.props.children ?? this._default()}
            </SView>
        </div>
    }
}
