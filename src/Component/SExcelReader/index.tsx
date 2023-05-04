import React, { Component } from 'react';
import { SExcelReaderPropsType } from './types';
import Item from "./Item"
import PopupImport from './PopupImport';
export default class SExcelReader extends Component<SExcelReaderPropsType> {
    props: SExcelReaderPropsType;
    constructor(props) {
        super(props);   
        this.state = {
        };

    }
    render() {
        return <Item {...this.props} />
        // return <PopupImport {...this.props} />
    }
}