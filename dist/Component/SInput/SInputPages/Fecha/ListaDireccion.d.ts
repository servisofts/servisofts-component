import { Component } from 'react';
declare type typeProps = {
    direccion?: any;
};
declare class ListaDireccion extends Component<typeProps> {
    animSize: any;
    state: any;
    constructor(props: any);
    fadeIn(): void;
    fadeOut(): void;
    getClose(): JSX.Element;
    getInput(): JSX.Element;
    render(): JSX.Element;
}
export default ListaDireccion;
