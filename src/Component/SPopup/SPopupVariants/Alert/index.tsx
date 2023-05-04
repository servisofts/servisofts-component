import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SIcon from '../../../SIcon'
import SPage from '../../../SPage'
import SText from '../../../SText'
import STheme from '../../../STheme'
import SView from '../../../SView'
export type PropsType = {
    title?: string,
}
export default class Alert extends Component<PropsType> {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <SView col={"xs-11 md-6 xl-4"}
                center
                backgroundColor={STheme.color.background}
                withoutFeedback
                style={{
                    height: 260,
                    borderRadius: 8,
                    overflow: 'hidden',
                }}>
                {SPage.backgroundComponent}
                <SView col={"xs-12"} center>
                    {/* <SView col={"xs-12"} height={90}>
                        <SIcon name={"AlertOutline"} fill={STheme.color.danger} />
                    </SView> */}
                    <SView col={"xs-10"} center height={40}>
                        <SText fontSize={12} center> {this.props.title} </SText>
                    </SView>
                </SView>
            </SView>
        )
    }
}
