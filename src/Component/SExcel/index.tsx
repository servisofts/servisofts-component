import React, { Component } from 'react';
import { SText, SView } from '../../index';
import { SExcelPropsType } from './types';
import Item from "./Item"
import xlsx from 'xlsx-color';
import SExcelFunc from "./func"
export default class SExcel extends Component<SExcelPropsType> {
    static create = SExcelFunc.create;
    static createAndSave = (props: SExcelPropsType) => {
        if (!props.data) {
            console.error("SExcel No hay data")
            return null;
        }
        var sheet = SExcelFunc.create(props);
        xlsx.writeFile(sheet, props.name + ".xlsx");
    }
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