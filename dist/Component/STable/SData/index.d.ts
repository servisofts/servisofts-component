import { Component } from 'react';
export declare type SDataType = {
    defaultHeight: number;
    actionTypes: Array<String>;
    onAction: Function;
    onSelectRow: Function;
    data: Object;
    header: Array<any>;
    animates: any;
};
export default class SData extends Component<SDataType> {
    animHeight: any;
    state: any;
    static defaultProps: {
        defaultHeight: number;
    };
    constructor(props: any);
    reloadAnimate: () => void;
    getData: (obj: any, key: any) => any;
    getColorHover({ x, y, position }: {
        x: any;
        y: any;
        position: any;
    }): string;
    getRow(obj: any, key: any, position: any): JSX.Element[];
    render(): JSX.Element | JSX.Element[];
}
