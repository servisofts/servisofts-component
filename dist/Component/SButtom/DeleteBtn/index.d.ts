import { Component } from 'react';
declare type tprop = {
    title: String;
    time: Number;
    onPress: Function;
    onCancel: Function;
    style: any;
    styleText: any;
};
export default class DeleteBtn extends Component<tprop> {
    time: any;
    state: any;
    constructor(props: any);
    onAnimEliminado: any;
    onAnimCancel: any;
    onAnimated: any;
    animEliminado(): void;
    animCancel(): void;
    fadeIn(): void;
    render(): JSX.Element;
}
export {};
