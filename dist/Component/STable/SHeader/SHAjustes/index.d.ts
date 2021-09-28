import { Component } from 'react';
declare type SHeaderProps = {
    data: any;
    changeOrder: Function;
    changeFiltro: Function;
};
export default class SHAjustes extends Component<SHeaderProps> {
    data: any;
    constructor(props: any);
    getOrder(): JSX.Element;
    getFiltros(): JSX.Element;
    render(): JSX.Element;
}
export {};
