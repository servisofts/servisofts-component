import { Component } from 'react';
export default class SColorPicker extends Component {
    state: any;
    layout: any;
    layoutBody: any;
    constructor(props: any);
    decimalToHex(decimal: any): string;
    hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
    renderBody(): JSX.Element;
    render(): JSX.Element;
}
