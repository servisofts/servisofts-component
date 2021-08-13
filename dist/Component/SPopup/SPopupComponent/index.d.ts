import { Component } from 'react';
export declare type SPopupComponentProps = {
    style?: any;
    close?: () => void;
};
export default class SPopupComponent extends Component<SPopupComponentProps> {
    constructor(props: any);
    getButonClose(): JSX.Element;
    render(): JSX.Element;
}
