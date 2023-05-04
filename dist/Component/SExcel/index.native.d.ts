import { Component } from 'react';
import { SExcelPropsType } from './types';
export default class SExcel extends Component<SExcelPropsType> {
    props: SExcelPropsType;
    constructor(props: any);
    saveFile({ sheet }: {
        sheet: any;
    }): void;
    render(): JSX.Element;
}
