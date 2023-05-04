import { Component } from 'react';
import { SExcelReaderPropsType } from './types';
export default class PopupImport extends Component<SExcelReaderPropsType> {
    static open(props: SExcelReaderPropsType, callback: any): void;
    static close(): void;
    props: SExcelReaderPropsType;
    state: any;
    constructor(props: any);
    onChangeValue(files: any): void;
    onPress(): void;
    render(): JSX.Element;
}
