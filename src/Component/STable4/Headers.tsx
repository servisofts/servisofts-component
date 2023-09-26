import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'
import SResizableView from '../SResizableView'
import { STable4 } from '../..'

export default class Headers extends Component<{ parent: STable4 }> {
    state = {}
    scroll;
    scrollTo(e) {
        this.scroll.scrollTo({ ...e, animated: false })
    }
    convertirNumeroALetra(numero) {
        let res = String.fromCharCode(64 + ((numero - 1) % 26) + 1);
        if (numero > 26) {
            res = String.fromCharCode(64 + Math.floor((numero - 1) / 26)) + res;
        }
        "".length
        return res;
    }
    headerLetter = ({ width, val, index }) => {
        return <SResizableView width={width} onContentSizeChange={(e) => {
            this.props.parent.state.cols[index] = e;
            this.props.parent.setState({ ...this.props.parent.state });
        }}>
            <View style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderColor: "#666"
            }} >
                <SText >{val}</SText>
            </View>
        </SResizableView>
    }
    render() {
        return (
            <SView flex height backgroundColor='#66666666' >
                <ScrollView ref={ref => this.scroll = ref} horizontal style={{ flex: 1 }} showsHorizontalScrollIndicator={false}
                    scrollEnabled={false}
                    scrollEventThrottle={this.props.parent.scrollEventThrottle}
                >
                    <FlatList data={this.props.parent.state.cols} horizontal
                        scrollEnabled={false}
                        renderItem={(col) => this.headerLetter({ val: this.convertirNumeroALetra(col.index + 1), width: col.item, index: col.index })}
                    />
                </ScrollView>
            </SView>
        )
    }
}