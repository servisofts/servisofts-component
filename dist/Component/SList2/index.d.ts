import { Component } from 'react';
import { TypeOrdenar } from '../SOrdenador';
declare type SListType = {
    data: any;
    horizontal?: boolean;
    inverse?: boolean;
    center?: boolean;
    render: (item: any, key?: any, index?: any) => JSX.Element;
    filter?: (item: any) => boolean;
    space?: number;
    initSpace?: number;
    limit?: number;
    order?: [TypeOrdenar];
    buscador?: boolean;
    flexEnd?: boolean;
};
declare class SList extends Component<SListType> {
    _buscador: any;
    state: any;
    _rend: any;
    constructor(props: any);
    getMoreItems(inverse: any): JSX.Element;
    getData(): any;
    getBuscardo(): JSX.Element;
    render(): JSX.Element;
}
export default SList;
