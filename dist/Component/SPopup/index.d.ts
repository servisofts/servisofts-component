import { Component } from 'react';
declare type SPopupOpen = {
    key: string;
    content: any;
    style?: any;
};
export declare const SPopupOpen: ({ key, content, style }: SPopupOpen) => void;
export declare const SPopupClose: (key: any) => void;
export default class SPopup extends Component {
    state: any;
    constructor(props: any);
    componentDidMount(): void;
    open({ key, content, style }: {
        key: any;
        content: any;
        style: any;
    }): void;
    close(key: any): void;
    getPopups(): JSX.Element[];
    render(): JSX.Element;
}
export {};
