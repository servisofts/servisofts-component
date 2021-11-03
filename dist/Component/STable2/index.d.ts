import { Component } from 'react';
import { HeaderProps } from './Header';
declare type SType = {
    header: [HeaderProps];
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
    static defaultProps: {};
    constructor(props: any);
    componentDidMount(): void;
    buscar(data: any): any;
    _buscador: any;
    procesarData: () => void;
    _animHeader: {};
    getHeader: () => JSX.Element[];
    getData: () => JSX.Element | JSX.Element[];
    Footer: () => JSX.Element;
    render(): JSX.Element;
}
export {};
