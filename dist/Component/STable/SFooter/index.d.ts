import { Component } from 'react';
import { ViewStyle } from 'react-native';
declare type SType = {
    data: Object;
    header: [Object];
    style: ViewStyle;
    limit?: number;
    page?: any;
    setHeader: (data: Object) => void;
    reload: () => void;
    setPage: (page: any) => void;
    getDataProcesada: () => any;
    buscador?: any;
};
export default class SFooter extends Component<SType> {
    state: any;
    constructor(props: any);
    onChangeData: (data: any) => void;
    getPageItens: () => number;
    getPagination(): JSX.Element;
    render(): JSX.Element;
}
export {};
