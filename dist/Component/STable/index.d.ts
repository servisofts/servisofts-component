import { Component } from 'react';
import { SHeaderProps } from './SHeader';
import { SDataType } from './SData';
import { SInputType } from '../SInput';
declare type typeHeader = {
    label: string;
    key: string;
    width?: number;
    index?: number;
    hidden?: Boolean;
    editable?: Boolean;
    order?: "asc" | "desc";
    orderPriority?: number;
    type?: SInputType;
    icon?: any;
    options?: Array<any>;
    render?: (data: String, id?: any) => {};
};
declare type typeAction = "edit" | "delete";
declare type SType = {
    header: Array<typeHeader>;
    headerProps?: SHeaderProps;
    data: [Object] | Object;
    dataProps?: SDataType;
    onAdd?: Function;
    filter?: (obj: Object, index: Number) => {};
    onSelectRow?: (obj: Object, index: typeHeader) => {};
    actionTypes?: [typeAction];
    onAction?: (type: typeAction, obj: Object) => {};
    onEdit?: (obj: Object) => {};
    onDelete?: (obj: Object) => {};
    style?: {};
    limit?: number;
};
export default class STable extends Component<SType> {
    state: any;
    contentSize: any;
    headerPosition: any;
    scroll: any;
    refFooter: any;
    refData: any;
    static defaultProps: {
        limit: number;
        headerProps: {
            minWidth: number;
            initialPosition: number;
        };
        dataProps: {};
    };
    constructor(props: any);
    initDelete(lista: any): any;
    getData: (obj: any, key: any) => any;
    filterData(): any[];
    getAdd(): JSX.Element;
    render(): JSX.Element;
}
export {};
