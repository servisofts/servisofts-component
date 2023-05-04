import React, { Component } from 'react';
import { SPopup, SText, SView } from '../../index';
import { SExcelPropsType } from './types';
import xlsx from 'xlsx-color';
import excel from './func';

export default class SExcel extends Component<SExcelPropsType> {
    props: SExcelPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onPress() {
        if (!this.props.data) {
            console.error("SExcel No hay data")
            return null;
        }
        var sheet = excel.create(this.props);
        if (!this.props.onPress) return;
        this.props.onPress(sheet)
    }
    render() {
        return <SView onPress={this.onPress.bind(this)}>
            {this.props.children ? this.props.children : <SText>{'Export'}</SText>}
        </SView>
    }
}