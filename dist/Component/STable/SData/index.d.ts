import { Component } from 'react';
export declare type SDataType = {
    defaultHeight: number;
    actionTypes: Array<String>;
    onAction: Function;
    onSelectRow: Function;
    data: Object;
    header: Array<any>;
    animates: any;
    buscador: any;
    onEdit: Function;
    limit?: number;
    page?: number;
    onLoadEnd: (data: any) => void;
};
export default class SData extends Component<SDataType> {
    animHeight: any;
    state: any;
    _inputs: any;
    dataProcesada: any;
    static defaultProps: {
        defaultHeight: number;
        ordenador: any[];
        limit: number;
        page: number;
    };
    constructor(props: any);
    getDataProcesada(): any;
    buscar(data: any): any;
    reloadAnimate: () => void;
    getData: (obj: any, key: any) => any;
    getColorHover({ x, y, position }: {
        x: any;
        y: any;
        position: any;
    }): string;
    recursiveDataReplace(data: any, key: any, newValue: any): any;
    getDataEditable(_data: any, header: any, position: any, key: any): JSX.Element;
    getRow(obj: any, key: any, position: any): JSX.Element[];
    render(): JSX.Element[];
}
