import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import Sheet from './Sheet'
import ToolBar from "./ToolBar";
import MenuBar from "./MenuBar"
type STablePropsType = {
    data?: any,
    colorBackground?: any,
    colorText?: any,
    borderColor?: any,
    colorMenu?: any,

}
export default class STable3 extends Component<STablePropsType> {
    static defaultProps: STablePropsType = {
        colorBackground: "#ffffff",
        colorText: "#000000",
        borderColor: "#D0D0D0",
        colorMenu: "#ECECEC"
    }
    state = {}

    shouldComponentUpdate(nextProps, nextState) {
        // Sólo vuelva a renderizar si la prop 'count' ha cambiado
        return this.props.data !== nextProps.data;
    }
    loadData() {

    }

    render() {
        return <SView col={"xs-12"} flex backgroundColor={this.props.colorBackground}>
            <Sheet table={this} data={this.props.data} />
        </SView>
    }
}