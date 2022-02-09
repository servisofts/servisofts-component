import { Component } from 'react';
import { HeaderProps } from '../Header';
declare type typeProps = {
    header: Array<HeaderProps>;
    data: Object;
    animHeader: any;
    animSize: any;
    space?: number;
    height: number;
    index: number;
};
declare class Row extends Component<typeProps> {
    constructor(props: any);
    static getDatoRecursive(obj: any, key: any, index: any): any;
    getItems: () => JSX.Element[];
    render(): JSX.Element;
}
export default Row;
