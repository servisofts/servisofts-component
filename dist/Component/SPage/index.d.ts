import React, { Component } from 'react';
export declare type SPageProps = {
    onBack?: Function;
    title?: String | Component;
    hidden?: boolean;
    preventBack?: boolean;
    disableScroll?: boolean;
};
export default class SPage extends Component<SPageProps> {
    constructor(props: any);
    getNavBar(): JSX.Element;
    getScroll(): React.ReactNode;
    render(): JSX.Element;
}
