import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'
import Sheet from './Sheet'

type PropsType = {
    data?: any,
    width: number,
    height: number,
    borderColor?: any,
    code: string,
    sheet: Sheet,
}
export default class cell extends Component<PropsType> {
    shouldComponentUpdate(nextProps, nextState) {
        // Sólo vuelva a renderizar si la prop 'count' ha cambiado
        return this.props.children !== nextProps.children || this.props.width !== nextProps.width;
    }
    render() {
        // onPress={()=>{
        //     this.props.sheet.setState({select:this.props.code})
        // }}
        return <View style={{
            width: this.props.width,
            height: this.props.height,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: this.props.borderColor,
            padding: 4,
            justifyContent: "center"
        }} >
            <Text style={{ fontSize: 11 }}>{this.props.children}</Text>
        </View>
    }
}