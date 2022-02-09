import { Component } from 'react';
import { HeaderProps } from './Header';
declare type SType = {
    header: Array<HeaderProps>;
    data: [Object] | Object;
    debug?: Boolean;
    filter?: (data: String, id?: any) => boolean;
    limit?: number;
};
export default class STable2 extends Component<SType> {
    state: any;
    dataProcesada: any;
    _animSize: any;
    size: any;
    scroll: any;
    sizeW: any;
    static defaultProps: {};
    constructor(props: any);
    componentDidMount(): void;
    buscar(data: any): any;
    filtro_de_cabeceras(data: any): boolean;
    _buscador: any;
    _HFilter: any;
    procesarData: () => void;
    _animHeader: {};
    getHeader: () => JSX.Element[];
    getData: () => JSX.Element | JSX.Element[];
    Footer: () => JSX.Element;
    render(): JSX.Element;
}
export {};
