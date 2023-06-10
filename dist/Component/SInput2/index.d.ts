import { Component } from 'react';
import { SInput2PropsType } from './type';
export default class SInput2 extends Component<SInput2PropsType> {
    state: {
        layout: {
            x: any;
            y: any;
            width: any;
            height: any;
            left: any;
            top: any;
        };
        value: any;
    };
    props: SInput2PropsType;
    constructor(props: SInput2PropsType);
    getValue(): any;
    handleChange(val: any): void;
    render(): JSX.Element;
}
