import React, { Component } from 'react';
import { SPopup, SText, SView } from '../../index';
import { SExcelReaderPropsType } from './types';
import xlsx from 'xlsx-color';
import PopupImport from './PopupImport';

export default class SExcel extends Component<SExcelReaderPropsType> {
    props: SExcelReaderPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    onPress() {
        PopupImport.open(this.props, () => {
            PopupImport.close();
        });
    }
    render() {
        return <SView onPress={this.onPress.bind(this)}>
            {this.props.children ? this.props.children : <SText>{'Import'}</SText>}
        </SView>
    }
}