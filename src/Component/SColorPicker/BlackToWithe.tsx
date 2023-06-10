import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView';
import SHr from '../SHr';
import SGradient from '../SGradient';
import SLoad from '../SLoad';


type BlackToWitheTypeProps = {
    defaultValue?: any,
    color: any,
    onChange: any,
}
export default class BlackToWithe extends Component<BlackToWitheTypeProps> {
    state; layout;
    constructor(props: any) {
        super(props);
        this.state = {
            // px: 0.500, py: 0.500 
            ...this.getProximity()
        }

    }
    findMaxValue(arr) {
        let maxValue = -Infinity; // Start with negative infinity as the initial maximum value

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }

        return maxValue;
    }
    getProximity() {
        if (!this.props.defaultValue || !this.props.color) return { px: 0.500, py: 0.500 };
        // let rgb = this.hexToRgb(this.props.defaultValue);
        let v1 = this.hexToRgb(this.props.color);
        let v2 = this.hexToRgb(this.props.defaultValue);
        let d_r = Math.abs(v1.r - v2.r);
        let d_g = Math.abs(v1.g - v2.g);
        let d_b = Math.abs(v1.b - v2.b);
        let s = this.findMaxValue([d_r, d_g, d_b]);
        if (v1.r + v1.g + v1.b > v2.r + v2.g + v2.b) {
            s *= -1;
        }
        // let val = 99999;
        return { px: 0.5 + (0.5 * (s / 255)), py: 0.5 - (0.5 * (s / 255)) };
    }
    componentDidMount(): void {

    }
    handlePress = (e) => {
        if (!this.state.layout || !this.props.color) return;
        console.log(this.state)
        let w = this.state.layout.width;
        let h = this.state.layout.height;
        let ox = e.nativeEvent.offsetX;
        let oy = e.nativeEvent.offsetY;
        let of = ((ox / w) - (oy / h));
        let v1 = this.hexToRgb(this.props.color);

        let color = this.props.color
        this.lastColor = this.props.color;

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

        this.setState({ pos_body: { x: ox, y: oy }, px: e.nativeEvent.offsetX / w, py: e.nativeEvent.offsetY / h, color: color })
        if (this.props.onChange) this.props.onChange(color)

    }
    lastColor = "";
    render() {
        // if (this.props.color) return <SLoad />
        if (this.props.color && !this.lastColor) {
            this.state = { ...this.state, ...this.getProximity() }
            this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.px) ?? 0), offsetY: ((this.state?.layout?.height ?? 0) * (this.state.py) ?? 0) } })
        } else {
            // this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.px) ?? 0), offsetY: ((this.state?.layout?.height ?? 0) * (this.state.py) ?? 0) } })
            if (this.props.color != this.lastColor && this.state.layout) {
                this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.px) ?? 0), offsetY: ((this.state?.layout?.height ?? 0) * (this.state.py) ?? 0) } })
            }
        }

        return (
            <SView height col={"xs-12"}>
                <SGradient colors={["#000000", this.props.color, "#ffffff"]} deg={45} />
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
                    <SView style={{
                        borderRadius: 100,
                        width: "100%",
                        height: "100%",
                        borderWidth: 1,
                        borderColor: "#000",
                    }}>

                    </SView>
                </SView>
                <SView col={"xs-12"} height
                    activeOpacity={1}

                    onLayout={(e) => {
                        if (e.nativeEvent.layout.height <= 0) return;
                        this.setState({ layout: e.nativeEvent.layout })
                        // this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.px) ?? 0), offsetY: (this.state?.layout?.height * (this.state.py) ?? 0) } })
                        // this.state.layot = e.nativeEvent.layout
                    }}
                    style={{
                        position: "absolute"
                    }} onPress={this.handlePress.bind(this)}>

                </SView>
            </SView>
        )
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
}