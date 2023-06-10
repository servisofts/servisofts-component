import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SGradient from '../SGradient';
import SHr from '../SHr';
import SText from '../SText';
import ColorBar from './ColorBar';
import BlackToWithe from './BlackToWithe';

const STEPS = ["#FF0000",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FF0000"]
export default class SColorPicker extends Component {
    state; layout; layoutBody;
    constructor(props: any) {
        super(props);
        this.state = {
            color: "#ff0000",
            color_bar: "#ff0000",
            porcent_bar: 0.5

        }
    }
    decimalToHex(decimal) {
        // Convierte el número decimal a hexadecimal
        const hex = parseInt(decimal).toString(16);

        // Agrega un 0 al principio si el resultado tiene una longitud de 1
        const paddedHex = hex.length === 1 ? "0" + hex : hex;

        // Retorna el valor hexadecimal
        return paddedHex;
    }
    hexToRgb(hex) {
        // Elimina el carácter '#' si está presente
        hex = hex.replace("#", "");

        // Verifica si el valor hexadecimal es válido
        if (!/^[0-9A-F]{6}$/i.test(hex)) {
            throw new Error("El valor hexadecimal proporcionado no es válido.");
        }
        // Convierte el valor hexadecimal a valores RGB
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // Retorna el valor RGB en formato de objeto
        return { r, g, b };
    }


    renderBody() {
        let size = 300;
        const grados = 45;
        return (
            <SView col={"xs-12"} center row height={100}>
                <SView col={"xs-3"} height backgroundColor={this.state.color} center>
                    <SText bold>{this.state.color}</SText>
                </SView>
                <SView backgroundColor='#fff' col={"xs-9"} height style={{
                    overflow: "hidden"
                }}>
                    <SView flex col={"xs-12"}
                    >
                        <SGradient colors={["#000000", this.state.color_bar, "#ffffff"]} deg={grados} />
                        <SView style={{
                            position: "absolute",
                            borderRadius: 100,
                            width: 20,
                            height: 20,
                            borderWidth: 2,
                            borderColor: "#ffffff",
                            left: (this.state?.pos_body?.x ?? 0) - 10,
                            top: (this.state?.pos_body?.y ?? 0) - 10,
                        }}>

                        </SView>
                        <SView col={"xs-12"} height
                            activeOpacity={1}

                            onLayout={(e) => {
                                this.layoutBody = e.nativeEvent.layout
                            }}
                            style={{
                                position: "absolute"
                            }} onPress={(e: any) => {
                                let w = this.layoutBody.width;
                                let h = this.layoutBody.height;
                                let ox = e.nativeEvent.offsetX;
                                let oy = e.nativeEvent.offsetY;
                                let of = ((ox / w) - (oy / h));
                                let v1 = this.hexToRgb(this.state.color_bar);
                                let color = this.state.color_bar;
                                if (of > 0) {
                                    // se hace blanco
                                    let r = v1.r + ((255 - v1.r) * Math.abs(of))
                                    let g = v1.g + ((255 - v1.g) * Math.abs(of))
                                    let b = v1.b + ((255 - v1.b) * Math.abs(of))
                                    color = "#" + this.decimalToHex(r) + this.decimalToHex(g) + this.decimalToHex(b);
                                } else {
                                    let r = v1.r - (v1.r * Math.abs(of))
                                    let g = v1.g - (v1.g * Math.abs(of))
                                    let b = v1.b - (v1.b * Math.abs(of))
                                    color = "#" + this.decimalToHex(r) + this.decimalToHex(g) + this.decimalToHex(b);
                                    // se hace negro
                                }
                                // console.log(w, h)
                                // console.log(ox, oy)
                                // console.log(ox / w, oy / h)
                                // console.log(of)
                                this.setState({ pos_body: { x: ox, y: oy }, color: color })

                            }}>

                        </SView>
                    </SView>
                </SView>
            </SView >
        )
    }

    render() {
        return <SView col={"xs-12"} padding={4} card {...this.props}>
            {this.renderBody()}
            <SHr />
            <ColorBar onChange={(e) => {
                this.setState({ color_bar: e })
            }} />
        </SView>
    }
}