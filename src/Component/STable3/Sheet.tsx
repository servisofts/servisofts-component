import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'
import Cell from './cell'
import ToolBar from "./ToolBar"
import STable3 from './index2'
import SResizableView from '../SResizableView'
type PropsType = {
    table: STable3,
    data: any
}
export default class Sheet extends Component<PropsType> {
    state = {
        scrollSize: 15,
        col: new Array(10).fill(1),
        row: new Array(1000).fill(1),
        // row: new Array(this.props?.data?.length ?? 50).fill(1),
        select: "A1",
        "!cols": {
            // "A": { wpx: 200 },
            // "B": { wpx: 200 },
            // "E": { wpx: 200 },
        }
    }
   
    convertirNumeroALetra(numero) {
        let res = String.fromCharCode(64 + ((numero - 1) % 26) + 1);
        if (numero > 26) {
            res = String.fromCharCode(64 + Math.floor((numero - 1) / 26)) + res;
        }
        "".length
        return res;
    }
    headerLetter = ({ width, val }) => {

        if (this.state['!cols'][val]) {
            let constProps = this.state['!cols'][val]
            if (constProps.wpx) {
                width = constProps.wpx;
            }
        }
        return <SResizableView width={width} onContentSizeChange={(e) => {
            this.state['!cols'][val] = {
                wpx: e
            }
            this.setState({ ...this.state })
            // console.log(val, e);
        }}>
            <View style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderColor: this.props.table.props.borderColor
            }} >
                <SText color={this.props.table.props.colorText}>{val}</SText>
            </View>
        </SResizableView>
    }
    headerNumber = ({ height = null, val }) => {
        return <View style={{
            width: "100%",
            height: height,
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: this.props.table.props.borderColor
        }} >
            <SText color={this.props.table.props.colorText}>{val}</SText>
        </View>
    }
    renderData() {
        return <FlatList data={this.state.row}
            keyExtractor={(a, i) => i + ""}
            // scrollEnabled={false}
            // getItemLayout={(data, index) => ({ length: 50, offset: 10 * index, index })}
            initialNumToRender={20}
            maxToRenderPerBatch={20}
            windowSize={10}
            renderItem={(row) => {
                let arrDataRow = [];
                if (row.index == 0) {
                    // arrDataRow = Object.keys(this.props?.data[row.index])
                } else {
                    let indexR = row.index - 1;
                    if (this.props?.data[indexR]) {
                        if (typeof this.props?.data[indexR] == "object") {
                            arrDataRow = Object.values(this.props?.data[indexR])
                        } else {
                            arrDataRow = this.props?.data[indexR];
                        }
                    }
                }

                return <FlatList horizontal
                    data={this.state.col}
                    // scrollEnabled={false}
                    keyExtractor={(a, i) => row.index + i + ""}
                    renderItem={(col) => {
                        let letter = this.convertirNumeroALetra(col.index + 1)
                        let content = "";

                        if (arrDataRow[col.index]) {
                            content = arrDataRow[col.index];
                        }
                        let width = 100;
                        if (this.state['!cols'][letter]) {
                            let constProps = this.state['!cols'][letter]
                            if (constProps.wpx) {
                                width = constProps.wpx;
                            }
                        }
                        return <Cell
                            sheet={this}
                            code={letter + (row.index + 1)}
                            height={20}
                            width={width}
                            borderColor={this.props.table.props.borderColor}
                        >{content}</Cell>
                        // >{letter + (row.index + 1)}</Cell>
                    }} />
            }}
        />
    }
    scroll_header_h: ScrollView
    scroll_header_v: ScrollView
    render() {

        return <SView col={"xs-12"} flex backgroundColor={this.props.table.props.colorMenu}>
            <ToolBar sheet={this} />
            {/* <ToolBar borderColor={this.props.borderColor} backgroundColor={this.props.colorBackground} /> */}
            <SView col={"xs-12"} flex>
                <SView col={"xs-12"} height={25} row >
                    <View style={{
                        width: 30, height: "100%", borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderColor: this.props.table.props.borderColor
                    }}></View>
                    <ScrollView ref={ref => this.scroll_header_h = ref} horizontal style={{ flex: 1 }} showsHorizontalScrollIndicator={false}
                        // scrollEnabled={false}
                        scrollEventThrottle={16}
                    >
                        <FlatList data={this.state.col} horizontal
                            scrollEnabled={false}
                            renderItem={(col) => this.headerLetter({ val: this.convertirNumeroALetra(col.index + 1), width: 100 })}
                        />
                    </ScrollView>
                    <SView width={this.state.scrollSize} height />
                </SView>
                <SView col={"xs-12"} flex row>
                    <SView width={30} height >
                        <ScrollView ref={ref => this.scroll_header_v = ref} style={{ flex: 1 }} showsVerticalScrollIndicator={false} scrollEnabled={false}>
                            <FlatList data={this.state.row}
                                initialNumToRender={20}
                                maxToRenderPerBatch={20}
                                windowSize={10}
                                scrollEnabled={false}
                                renderItem={(row) => this.headerNumber({ val: row.index + 1, height: 20 })}
                            />
                        </ScrollView>
                    </SView>
                    <SView flex height row backgroundColor={this.props.table.props.colorBackground}>
                        <ScrollView style={{
                            height: "100%",
                        }} showsVerticalScrollIndicator={false} scrollEventThrottle={16}
                            bounces={false}
                            onScroll={e => this.scroll_header_v.scrollTo({ ...e.nativeEvent.contentOffset, animated: false })}>
                            <ScrollView style={{
                                width: "100%",
                            }} showsHorizontalScrollIndicator={false} horizontal scrollEventThrottle={16}
                                bounces={false}
                                onScroll={e => this.scroll_header_h.scrollTo({ ...e.nativeEvent.contentOffset, animated: false })}>
                                {this.renderData()}
                            </ScrollView>
                        </ScrollView>
                    </SView>
                    <SView width={this.state.scrollSize} height />
                </SView>
                <SView width={"100%"} height={this.state.scrollSize} />
            </SView>
        </SView>
    }
}