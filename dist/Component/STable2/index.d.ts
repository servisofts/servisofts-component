import { Component } from 'react';
import { HeaderProps } from './Header';
import { STable2cellStyle } from './Row';
export declare type STable2Type = {
    header: Array<HeaderProps>;
    headerColor?: string;
    data: [Object] | Object;
    debug?: Boolean;
    filter?: (data: String, id?: any) => boolean;
    limit?: number;
    rowHeight?: number;
    cellStyle?: STable2cellStyle;
};
export default class STable2 extends Component<STable2Type> {
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
    _HFNI: any;
    procesarData: () => void;
    _animHeader: {};
    getHeader: () => JSX.Element[];
    getData: () => JSX.Element | JSX.Element[];
    Footer: () => JSX.Element;
    render(): JSX.Element;
}
