import { Component } from 'react';
declare type ColorBarTypeProps = {
    defaultValue?: any;
    onChange: any;
};
export default class ColorBar extends Component<ColorBarTypeProps> {
    state: any;
    layout: any;
    constructor(props: any);
    getProximity(): number;
    componentDidMount(): void;
    handlePress: (e: any) => void;
    render(): JSX.Element;
    decimalToHex(decimal: any): string;
    hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
}
export {};
