import { Component } from 'react';
import { SColType } from '../../index';
declare type SRangeSliderType = {
    range: [number, number];
    onChange?: (evt: any) => {};
    defaultValue?: number;
    value?: number;
    color?: string;
    backgroundColor?: string;
    col?: SColType;
    width?: number;
};
export default class SRangeSlider extends Component<SRangeSliderType> {
    state: any;
    pos: any;
    pan: any;
    initSize: any;
    constructor(props: any);
    formatValue(val: any): number;
    getValue(fixed?: number): string;
    createPan(): void;
    Marcador(): JSX.Element;
    render(): JSX.Element;
}
export {};
