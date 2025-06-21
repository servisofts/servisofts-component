import React, { Component } from 'react';
// import { SUuid, SView } from "../../../index"
import ReactDOM from 'react-dom';
import SMarkerAbstract from './abstract';


export default class SMarker extends SMarkerAbstract {
    constructor(props) {
        super(props);
    }
    setCoordinate({ latitude, longitude }: { latitude: any; longitude: any; }) {
        // @ts-ignore
        const overlay = this.props.overlay;

        if (overlay) {
            overlay.setPosition({
                lat: latitude,
                lng: longitude,
            })
        }
    }
    marker;

    renderMap(child, { map, maps, key }, _toRemove) {
        if (!maps) return;
        class CustomOverlay extends maps.OverlayView {
            private div: HTMLDivElement;

            constructor(private position) {
                super();
                this.div = document.createElement('div');
                this.div.style.position = 'fixed';
                // this.div.style.zIndex = "99999"
                // this.div.style.transform = 'translate(-100%, -50%);';

                // this.div.style.backgroundColor = "#f0f";

            }

            onAdd() {


                const newElm = React.cloneElement(child, {
                    overlay: this,
                    ref: (ref) => {
                        if (child.ref) {
                            child.ref(ref);

                        }
                    },
                })



                ReactDOM.render(newElm, this.div);


                // this.div.innerHTML = `<div onClick='alert("hola")' style="z-index:99999; position:fixed;">CLICK</div>`



                const panes = this.getPanes();
                // panes.overlayLayer.onClick = () => {
                //     alert("Asdasd")
                // }
                panes.overlayMouseTarget.appendChild(this.div);
            }

            draw() {
                const overlayProjection = this.getProjection();
                const point = overlayProjection.fromLatLngToDivPixel(this.position);

                if (point) {
                    this.div.style.left = `${point.x}px`;
                    this.div.style.top = `${point.y}px`;
                }

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
        // overlay.addListener('click', child.props.onPress);

        overlay.setMap(map);
        _toRemove.push(overlay);

        return null
    }
    render() {

        return <div
            // key={SUuid()}
            style={{
                // position: "fixed",
                cursor: "pointer",
                textAlign: "center",
                width: this.props.width,
                height: this.props.height,
                // background: "#00f",
                // zIndex: 9999999,
                transform: 'translate(-50%, -100%)'
            }}
            onClick={this.props.onPress}
        >
            {this.props.children ?? this._default()}
        </div>
    }
}
