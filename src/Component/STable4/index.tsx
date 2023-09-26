import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Table from './Table'
import SView from '../SView'
import Headers from './Headers'
import RowNumbers from './RowNumbers'
import Scroll from './Scroll'
import ToolBar from './ToolBar'
import ExcelExport from './ExcelExport'
type STablePropsType = {
    data: any[],
    rowHeight?: any,
    colWidth?: any


}

export default class STable3 extends Component<STablePropsType> {

    static defaultProps: STablePropsType = {
        data: [],
        colWidth: 150,
        rowHeight: 20,
    }
    headers: Headers;
    rowNumbers: RowNumbers;
    table: Table;
    scroll: Scroll;

    state = {
        rows: new Array(15000).fill(this.props.rowHeight),
        cols: new Array(20).fill(this.props.colWidth),
    }

    contentWidth = 0;
    contentHeight = 0;
    scrollEventThrottle = 1000 / 40
    render() {
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.state.cols.map(v => this.contentWidth += v);
        this.state.rows.map(v => this.contentHeight += v);
        return <SView col={"xs-12"} flex>
            <ToolBar />
            <SView col={"xs-12"} row height={25} >
                <SView width={40} height style={{
                    borderBottomWidth: 1,
                    borderRightWidth: 1,
                    borderColor: "#666666"
                }} >
                    <ExcelExport parent={this} />
                </SView>
                <Headers ref={ref => this.headers = ref} parent={this} />
                <SView width={15} height />
            </SView>
            <SView col={"xs-12"} row flex>
                <RowNumbers ref={ref => this.rowNumbers = ref} parent={this} />
                <SView flex height>
                    <Table ref={ref => this.table = ref} parent={this} data={this.props.data} />
                </SView>
                <Scroll ref={ref => this.scroll = ref} parent={this} />
            </SView>
        </SView>
    }
}