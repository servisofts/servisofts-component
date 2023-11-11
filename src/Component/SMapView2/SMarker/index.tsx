import React, { Component } from 'react';
// import { SUuid, SView } from "../../../index"
// import ReactDOM from 'react-dom';
import SMarkerAbstract from './abstract';


export default class SMarker extends SMarkerAbstract {
    constructor(props) {
        super(props);
    }
    setCoordinate({ latitude, longitude }: { latitude: any; longitude: any; }) {
        // console.log(this)
        // @ts-ignore
        const overlay = this.props.overlay;

        if (overlay) {
            overlay.setPosition({
                lat: latitude,
                lng: longitude,
            })
        }

        // if (this.marker) {
        //     this.marker.repaint();
        // }
        // this.setState({ latitude: latitude, longitude: longitude })
    }
    marker;

    renderMap(child, { map, maps, key }, _toRemove) {
        // return <Item key={key}
        //     lat={this.state.latitude ?? this.props.latitude}
        //     lng={this.state.longitude ?? this.props.longitude}>{child}</Item>;
        // let overlay = new maps.OverlayView({
        //     position: { lat: this.state.latitude ?? this.props.latitude, lng: this.state.longitude ?? this.props.longitude },
        //     map,
        //     content: child,
        // })
        if (!maps) return;
        class CustomOverlay extends maps.OverlayView {
            private div: HTMLDivElement;

            constructor(private position) {
                super();
                this.div = document.createElement('div');
                this.div.style.position = 'absolute';
                this.div.style.zIndex = "99999";
            }

            onAdd() {

                // const newElm = React.cloneElement(child, {
                //     overlay: this,
                //     ref: (ref) => {
                //         if (child.ref) {
                //             child.ref(ref);
                //         }
                //     }
                // })
                // ReactDOM.render(newElm, this.div);

                const panes = this.getPanes();

                panes.overlayLayer.appendChild(this.div);
            }

            draw() {
                const overlayProjection = this.getProjection();
                const point = overlayProjection.fromLatLngToDivPixel(this.position);

                if (point) {
                    this.div.style.left = `${point.x}px`;
                    this.div.style.top = `${point.y}px`;
                }

                // this.div.innerHTML = `<div style="transform: translate(-50%, -100%);">${child}</div>`;
            }

            onRemove() {
                if (this.div.parentNode) {
                    this.div.parentNode.removeChild(this.div);
                }
            }
            setPosition(position) {
                this.position = position;
                this.draw();
            }
        }
        const overlay = new CustomOverlay({
            lat: this.state.latitude ?? this.props.latitude,
            lng: this.state.longitude ?? this.props.longitude,
        });

        this.marker = overlay;
        overlay.setMap(map);
        _toRemove.push(overlay);
        // overlay.setPosition({
        //     lat: 0,
        //     lng: 0,
        // })
        return null
        // return <Item key={key}
        //     lat={this.state.latitude ?? this.props.latitude}
        //     lng={this.state.longitude ?? this.props.longitude}>{child}</Item>;
    }
    render() {
        // var transform: any = [{ translateY: "-100%" }]
        // console.log("entro a render ", this.marker)
        // if (this.marker) {
        //     this.marker.repaint();
        // }

        return <div
            // key={SUuid()}
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
