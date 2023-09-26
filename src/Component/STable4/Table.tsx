import { FlatList, Text, View, StyleSheet, ScrollView, PanResponder } from 'react-native'
import React, { Component } from 'react'
import STable4 from './index'
import SView from '../SView'
import STheme from '../STheme'
import Cell from './Cell'
type STablePropsType = {
    data: any[],
    parent: STable4

}

export default class STable3 extends Component<STablePropsType> {
    scrollVertical: FlatList;
    lastMove = new Date().getTime();
    lastEvent = "";
    constructor(props) {
        super(props);
    }
    getItemLayout(data, index) {
        return { length: this.props.parent.props.rowHeight, offset: this.props.parent.props.rowHeight * index, index }
    }
    keyExtractor(item, index) {
        return "r" + index;
    }

    handleScrollHorizontal = (e) => {
        if (!this.props.parent.headers) return;
        this.props.parent.headers.scrollTo({ ...e.nativeEvent.contentOffset })
    }
    handleScrollVertical = (e) => {
        if (this.lastEvent == "scrollTo") {
            this.lastEvent = ""
            return;
        }
        this.lastEvent = "handleScrollVertical"
        if (this.props.parent.rowNumbers) {
            this.props.parent.rowNumbers.scrollTo(e.nativeEvent.contentOffset.y)
        }
        // if (this.props.parent.scroll) {
        //     this.props.parent.scroll.scrollTo({ ...e.nativeEvent.contentOffset })
        // }
    }
    scrollTo(e) {
        if (this.lastEvent == "handleScrollVertical") {
            this.lastEvent = ""
            return;
        }
        this.lastEvent = "scrollTo"
        this.scrollVertical.scrollToOffset({ offset: e.y, animated: false })
    }


    render() {
        const Row = React.memo(({ obj, row }: { obj: any, row: { index: any, item: any } },) => {
            const values = Object.values(obj ?? {})
            return <View style={{ width: this.props.parent.contentWidth, height: this.props.parent.props.rowHeight, flexDirection: "row", }}>
                {this.props.parent.state.cols.map((a, i) => <Cell value={values[i]} row={row} col={{ index: i, item: a }} />)}
            </View>
        }, (prevProps, nextProps) => JSON.stringify(prevProps.obj) === JSON.stringify(nextProps.obj));

        return (
            <ScrollView horizontal contentContainerStyle={{ width: this.props.parent.contentWidth, }}
                onScroll={this.handleScrollHorizontal}
                scrollEventThrottle={this.props.parent.scrollEventThrottle}
            >
                <FlatList
                    ref={ref => this.scrollVertical = ref}
                    contentContainerStyle={{ width: this.props.parent.contentWidth, }}
                    onScroll={this.handleScrollVertical}
                    data={this.props.parent.state.rows}
                    getItemLayout={this.getItemLayout.bind(this)}
                    scrollEventThrottle={this.props.parent.scrollEventThrottle}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    windowSize={31}
                    maxToRenderPerBatch={10}
                    removeClippedSubviews
                    keyExtractor={this.keyExtractor}
                    renderItem={row => <Row obj={this.props.data[row.index] ?? {}} row={row} />}
                />
            </ScrollView >
        )
    }
}