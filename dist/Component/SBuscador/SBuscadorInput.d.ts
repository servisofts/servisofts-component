import { Component } from 'react';
import { SBuscadorInputPropsType } from './type';
export default class SBuscadorInput extends Component<SBuscadorInputPropsType> {
    props: SBuscadorInputPropsType;
    constructor(props: any);
    _buscador: any;
    data: [];
    proccessData(): void;
    render(): JSX.Element;
}
