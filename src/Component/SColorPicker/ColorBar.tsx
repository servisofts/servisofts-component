import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView';
import SHr from '../SHr';
import SGradient from '../SGradient';

const STEPS = ["#FF0000",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FF0000"]

type ColorBarTypeProps = {
    defaultValue?: any,

    onChange: any,
}
export default class ColorBar extends Component<ColorBarTypeProps> {
    state; layout;
    constructor(props: any) {
        super(props);
        this.state = {
            porcent_bar: this.getProximity()
        }

    }

    getProximity() {
        if (!this.props.defaultValue) return 0;
        let rgb = this.hexToRgb(this.props.defaultValue);
        let val = 99999;
        let val_select = 0;
        for (let index = 0; index < STEPS.length; index++) {
            const step = STEPS[index];
            let s_rgb = this.hexToRgb(step);
            let r = Math.abs(rgb.r - s_rgb.r)
            let g = Math.abs(rgb.g - s_rgb.g)
            let b = Math.abs(rgb.b - s_rgb.b)
            let sum = r + g + b;
            if (sum < val) {
                val = sum;
                val_select = index;
            }
        }
        // let s_rgb = this.hexToRgb(step);
        // if (Math.abs(rgb.r - s_rgb.r) + Math.abs(rgb.b - s_rgb.b) + Math.abs(rgb.b - s_rgb.b) < val) {
        // val = sum;
        // val_select = index;
        // }
        let pos = ((val_select) / (STEPS.length - 1));
        return pos;
    }
    componentDidMount(): void {
        // this.setState({
        //     porcent_bar: this.getProximity()
        // })

    }
    handlePress = (e) => {
        // let w = this.state?.layout?.width ?? 0;
        if (!this.state.layout) return;
        let c = (STEPS.length - 1) * 255;
        let w = this.state.layout.width;
        let ox = e.nativeEvent.offsetX - 0.001;
        let porcent = ox / w;
        let fp = c * porcent
        let ps = 1;
        let resto = 0;

        if (fp > 0) {
            ps = Math.ceil(fp / 255);
            resto = Math.ceil(fp % 255);
        }
        let v1 = this.hexToRgb(STEPS[ps - 1]);
        let v2 = this.hexToRgb(STEPS[ps]);

        let vfinal = "#";
        if (v1.r - v2.r != 0) {
            if (v1.r > v2.r) {
                vfinal += this.decimalToHex((v1.r - resto))
            } else {
                vfinal += this.decimalToHex((v1.r + resto))
            }
        } else {
            vfinal += this.decimalToHex(v1.r)
        }
        if (v1.g - v2.g != 0) {
            if (v1.g > v2.g) {
                vfinal += this.decimalToHex((v1.g - resto))
            } else {
                vfinal += this.decimalToHex((v1.g + resto))
            }
        } else {
            vfinal += this.decimalToHex(v1.g)
        }
        if (v1.b - v2.b != 0) {
            if (v1.b > v2.b) {
                vfinal += this.decimalToHex((v1.b - resto))
            } else {
                vfinal += this.decimalToHex((v1.b + resto))
            }
        } else {
            vfinal += this.decimalToHex(v1.b)
        }
        // console.log(vfinal)
        this.setState({ color_bar: vfinal, porcent_bar: e.nativeEvent.offsetX / w })
        if (this.props.onChange) this.props.onChange(vfinal)

    }
    render() {
        return (
            <SView col={"xs-12"} style={{
                justifyContent: "center"
            }}>
                <SHr />
                <SView height={10} backgroundColor='#fff' col={"xs-12"} borderRadius={20} style={{
                    overflow: "hidden"
                }}>
                    <SGradient colors={STEPS} deg={90} />
                </SView>
                <SHr />
                <SView style={{
                    position: "absolute",
                    borderRadius: 100,
                    width: 25,
                    height: 25,
                    borderWidth: 2,
                    borderColor: "#ffffff",
                    backgroundColor: this.state.color_bar,
                    left: (this.state?.layout?.width * (this.state.porcent_bar) ?? 0) - 10,
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
                <SView
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    }}
                    onLayout={(e) => {
                        if (e.nativeEvent.layout.width <= 0 || e.nativeEvent.layout.height <= 0) return;
                        this.state.layout = e.nativeEvent.layout;
                        this.handlePress({ nativeEvent: { offsetX: (this.state?.layout?.width * (this.state.porcent_bar) ?? 0) } })
                        // this.setState({ ...this.state })
                    }}
                    activeOpacity={1}
                    onPress={this.handlePress.bind(this)}
                >

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