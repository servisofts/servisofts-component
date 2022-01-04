import { Component } from 'react';
export declare type SPageProps = {
    onBack?: Function;
    title?: String | Component;
    hidden?: boolean;
    preventBack?: boolean;
    disableScroll?: boolean;
    center?: boolean;
};
export default class SPage extends Component<SPageProps> {
    static backgroundComponent: JSX.Element;
    static setBackground(background: any): void;
    constructor(props: any);
    getNavBar(): JSX.Element;
    getScroll(): JSX.Element;
    render(): JSX.Element;
}
