import { FlatList, Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
type STablePropsType = {
    data: [any]

}
const ITEM_HEIGHT = 20;
const ITEM_WIDTH = 150;

const styles = StyleSheet.create({
    item: {
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        borderRightWidth: 1,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 12,
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT
    }
});

const cols = new Array(50).fill(1)
const rows = new Array(40000).fill(1)
const nc = cols.length
const nr = rows.length
const contentWidth = nc * ITEM_WIDTH;
const contentHeight = nr * ITEM_WIDTH;

const Item = React.memo(({ value }: any) => {
    return <View style={styles.item}>
        {!value ? null : <Text style={styles.text}>{value}</Text>}
    </View>
})

const Row = React.memo(({ obj }: { obj: any }) => {
    const values = Object.values(obj ?? {})
    return <View style={{ width: contentWidth, height: ITEM_HEIGHT, flexDirection: "row", }}>
        {cols.map((a, index) => <Item value={values[index]} />)}
    </View>
});

export default class STable3 extends Component<STablePropsType> {
    render() {
        return <ScrollView horizontal contentContainerStyle={{ width: contentWidth }}>
            <FlatList
                data={rows}
                getItemLayout={(data, index) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index })}
                windowSize={21}
                removeClippedSubviews
                keyExtractor={(o, i) => "r" + i}
                renderItem={row => <Row obj={this.props.data[row.index]} />}
            />
        </ScrollView >
    }
}