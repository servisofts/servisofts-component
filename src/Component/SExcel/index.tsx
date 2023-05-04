import React, { Component } from 'react';
import { SText, SView } from '../../index';
import { SExcelPropsType } from './types';
import Item from "./Item"
import xlsx from 'xlsx-color';

export default class SExcel extends Component<SExcelPropsType> {
    props: SExcelPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    saveFile({ sheet }) {
        xlsx.writeFile(sheet, this.props.name + ".xlsx");
    }
    render() {
        return <Item {...this.props} onPress={(sheet) => {
            this.saveFile({ sheet })
        }} />
    }
}