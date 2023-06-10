import { Component } from 'react';
declare type BlackToWitheTypeProps = {
    defaultValue?: any;
    color: any;
    onChange: any;
};
export default class BlackToWithe extends Component<BlackToWitheTypeProps> {
    state: any;
    layout: any;
    constructor(props: any);
    findMaxValue(arr: any): number;
    getProximity(): {
        px: number;
        py: number;
    };
    componentDidMount(): void;
    handlePress: (e: any) => void;
    lastColor: string;
    render(): JSX.Element;
    decimalToHex(decimal: any): string;
    hexToRgb(hex: any): {
        r: number;
        g: number;
        b: number;
    };
}
export {};
