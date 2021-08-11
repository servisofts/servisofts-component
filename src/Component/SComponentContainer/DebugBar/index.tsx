import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SText from '../../SText/index';
import STheme from '../../STheme/index';
import SView from '../../SView/index';
export type typeSDebugBar = {
    debug: boolean
}
export default class DebugBar extends Component<typeSDebugBar> {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.debug) return <View />
        return (
            <SView
                style={{
                    width: "100%",
                    height: 20,
                    backgroundColor: STheme.color.barColor
                }}
                dir={"row"}
            >
                <SView col={"xs-4"}></SView>
                <SView col={"xs-4"}></SView>
                <SView
                    col={"xs-4"}
                    onPress={() => {
                        STheme.change();
                    }}>
                    <SText>Theme</SText>
                </SView>
            </SView>
        )
    }
}
