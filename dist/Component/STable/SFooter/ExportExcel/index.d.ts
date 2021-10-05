import { Component } from 'react';
declare type ExportExcelProps = {
    header: any;
    setHeader: any;
    data?: any;
    getDataProcesada: any;
};
export default class ExportExcel extends Component<ExportExcelProps> {
    constructor(props: any);
    toLetters(num: any): any;
    buildHeaderStyle(ws: any): void;
    buildHeaderProps(): any[];
    buildHeader(): any[];
    buildData(): any[];
    buildExcel: () => Promise<void>;
    render(): JSX.Element;
}
export {};
