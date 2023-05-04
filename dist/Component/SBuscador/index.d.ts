import { Component } from 'react';
import { SBuscadorPropsType } from './type';
export default class SBuscador extends Component<SBuscadorPropsType> {
    static buscarObj(data: any, buscador: any): any;
    static validate(data: any, buscador: any): any;
    static validate_old(data: any, buscador: any): any;
    static filter({ data, txt }: {
        data: any;
        txt: any;
    }): any;
    props: SBuscadorPropsType;
    constructor(props: any);
    render(): JSX.Element;
}
