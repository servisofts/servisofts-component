import { Component } from 'react';
import { TypeOrdenar } from '../SOrdenador';
declare type SListType = {
    data: any;
    render: (item: any) => JSX.Element;
    space?: number;
    order?: [TypeOrdenar];
};
declare class SList extends Component<SListType> {
    constructor(props: any);
    getData(): JSX.Element[];
    render(): JSX.Element;
}
export default SList;
