import { Component } from 'react';
import { SHeaderProps } from './SHeader';
import { SDataType } from './SData';
declare type typeHeader = {
    label: String;
    key: String;
    width: Number;
    index: Number;
    hidden: Boolean;
    render: (data: String) => {};
};
declare type typeAction = "edit" | "delete";
declare type SType = {
    header: [typeHeader];
    headerProps: SHeaderProps;
    data: [Object];
    dataProps: SDataType;
    onAdd: Function;
    filter: (obj: Object, index: Number) => {};
    onSelectRow: (obj: Object, index: typeHeader) => {};
    actionTypes: [typeAction];
    onAction: (type: typeAction, obj: Object) => {};
    style: {};
};
export default class STable extends Component<SType> {
    state: any;
    contentSize: any;
    headerPosition: any;
    scroll: any;
    refData: any;
    static defaultProps: {
        headerProps: {
            minWidth: number;
            initialPosition: number;
        };
        dataProps: {};
    };
    constructor(props: any);
    buscar(data: any): {};
    filterData(): {};
    render(): JSX.Element;
}
export {};
