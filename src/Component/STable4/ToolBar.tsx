import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'

type PropsType = {
    // sheet: Sheet,
    height?: number
}
export default class ToolBar extends Component<PropsType> {

    static defaultProps = {
        borderColor: "#6666",
        backgroundColor: "#ffffff",
        height: 30,
    }
    render() {
        // const table = this.props.sheet.props.table;
        // const sheet = this.props.sheet;
        return <SView col={"xs-12"} height={this.props.height} padding={4}>
            <SView col={"xs-12"} row height>
                <SView width={100} border={1} height style={{ borderColor: "#666666" }}>
                    {/* <Text>{sheet.state.select}</Text> */}
                </SView>
                <SView width={4} />
                <SView width={80} border={1} height style={{ borderColor: "#666666" }}>

                </SView>
                <SView width={4} />
                <SView flex border={1} style={{ borderColor: "#666666" }}>

                </SView>
            </SView>
        </SView>
    }
}