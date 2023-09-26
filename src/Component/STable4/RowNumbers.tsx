import { ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'
import SResizableView from '../SResizableView'
import { STable4 } from '../..'

export default class RowNumbers extends Component<{ parent: STable4 }> {
    state = {}
    scroll: FlatList;
    scrollTo(y) {
        this.scroll.scrollToOffset({ offset: y, animated: false })
    }

    headerLetter = ({ width, val }) => {
        return
    }
    getItemLayout(data, index) {
        return { length: this.props.parent.props.rowHeight, offset: this.props.parent.props.rowHeight * index, index }
    }
    keyExtractor(item, index) {
        return "nr" + index;
    }

    render() {
        const ItemRow = React.memo(({ val }: any) => {
            return <View style={{
                width: "100%",
                height: this.props.parent.props.rowHeight,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderColor: "#666",
            }} >
                <Text style={{
                    fontSize: 11,
                    color: "#ffffff"
                }} >{val}</Text>
            </View>
        }, (prevProps, nextProps) => prevProps.val != nextProps.val);

        return (
            <SView width={40} height backgroundColor='#66666666'>
                <FlatList data={this.props.parent.state.rows}
                    ref={ref => this.scroll = ref}
                    scrollEnabled={false}
                    scrollEventThrottle={this.props.parent.scrollEventThrottle}
                    keyExtractor={this.keyExtractor}
                    getItemLayout={this.getItemLayout.bind(this)}
                    renderItem={(col) => <ItemRow val={col.index + 1} />}
                />
                <SView height={10} />
            </SView>
        )
    }
}