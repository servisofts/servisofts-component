import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'


const styles = StyleSheet.create({
    item: {
        // height: ITEM_HEIGHT,
        // width: ITEM_WIDTH,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        justifyContent: "center",
        overflow: "hidden",
        borderColor: "#66666666"
    },
    text: {
        fontSize: 11,
        color: "#ffffff",
        borderWidth: 0,
    },
});
class Cell extends Component<{ value: any, row: { index: any, item: any }, col: { index: any, item: any } }> {
    state = {
        select: false
    }
    render() {
        return <View style={[
            styles.item,
            {
                width: this.props.col.item,
                height: this.props.row.item,
            }
        ]}>
            {/* <TextInput style={styles.text} defaultValue={this.props.value} /> */}
            <Text style={styles.text}>{this.props.value}</Text>
        </View>
    }
}
export default React.memo(Cell, (prevProps, nextProps) => prevProps.value === nextProps.value);