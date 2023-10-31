import React, { Component } from 'react';
import { SUuid, SView } from "../../../index"
import SMarkerAbstract from './abstract';

class Item extends Component {
    props;
    repaint() {
        console.log("repaint")
    }
    render() {
        return <div key={this.props.key}>{this.props.children}</div>
    }
}

export default class SMarker extends SMarkerAbstract {
    setCoordinate({ latitude, longitude }: { latitude: any; longitude: any; }) {
        this.setState({ latitude: latitude, longitude: longitude })
    }
    marker;

    renderMap(child, { map, maps, key }, _toRemove) {
        console.log("entro a renderMap")
        return <Item key={key}
            ref={(ref) => {
                this.marker = ref;
                console.log("entro al ref")
            }}
            lat={this.state.latitude ?? this.props.latitude}
            lng={this.state.longitude ?? this.props.longitude}>{child}</Item>;
    }
    render() {
        // var transform: any = [{ translateY: "-100%" }]
        console.log("entro a render ", this.marker)
        if (this.marker) {
            this.marker.repaint();
        }
        return <div
            key={SUuid()}
            // @ts-ignore
            style={{
                cursor: "pointer",
                textAlign: "center",
                width: this.props.width,
                height: this.props.height,
                transform: 'translate(-50%, -100%)'
            }} onClick={this.props?.onPress}  >
            {this.props.children ?? this._default()}
        </div>
    }
}
