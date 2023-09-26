import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'
import STable3 from '.'
import Sheet from './Sheet'

type PropsType = {
    sheet: Sheet,
    height?: number
}
export default class index extends Component<PropsType> {

    static defaultProps = {
        borderColor: "#6666",
        backgroundColor: "#ffffff",
        height: 30,
    }
    render() {
        const table = this.props.sheet.props.table;
        const sheet = this.props.sheet;
        return <SView col={"xs-12"} height={this.props.height} padding={4}>
            <SView col={"xs-12"} row height>
                <SView width={100} backgroundColor={table.props.colorBackground} border={1} style={{ borderColor: table.props.borderColor }}>
                    <Text>{sheet.state.select}</Text>
                </SView>
                <SView width={4} />
                <SView width={80} backgroundColor={table.props.colorBackground} border={1} style={{ borderColor: table.props.borderColor }}>
                    
                </SView>
                <SView width={4} />
                <SView flex backgroundColor={table.props.colorBackground} border={1} style={{ borderColor: table.props.borderColor }}>
                    
                </SView>
            </SView>
        </SView>
    }
}