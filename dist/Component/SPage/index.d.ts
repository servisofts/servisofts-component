import { Component } from 'react';
export declare type SPageProps = {
    onBack?: Function;
    title?: String | Component;
    hidden?: boolean;
    preventBack?: boolean;
    disableScroll?: boolean;
    center?: boolean;
    onRefresh?: Function;
};
export default class SPage extends Component<SPageProps> {
    static backgroundComponent: JSX.Element;
    static combinePages(name: string, pages: any): {};
    static setBackground(background: any): void;
    state: any;
    constructor(props: any);
    getNavBar(): JSX.Element;
    getRefresh(): JSX.Element;
    getChildren(): {};
    getScroll(): JSX.Element;
    render(): JSX.Element;
}
