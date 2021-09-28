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
};
export default class SFooter extends Component<SType> {
    constructor(props: any);
    getPageItens: () => number;
    getPagination(): JSX.Element;
    render(): JSX.Element;
}
export {};
