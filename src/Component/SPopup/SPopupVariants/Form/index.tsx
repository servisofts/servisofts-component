import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../../../SView'
import STheme from '../../../STheme'
import SPage from '../../../SPage'
import SForm from '../../../SForm'
import SText from '../../../SText'
import SHr from '../../../SHr'

export default class Form extends Component {
    render() {
        return (
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}
                backgroundColor={STheme.color.background}
                withoutFeedback
                style={{
                    minHeight: 500,
                    borderRadius: 8,
                    overflow: 'hidden',
                }}>
                {SPage.backgroundComponent}
                <SView col={"xs-12"} center>
                    <SView col={"xs-11"} center>
                        <SHr h={16} />
                        <SText bold fontSize={18}>Title</SText>
                        <SForm inputs={{ key: { label: "key" } }} />
                    </SView>
                </SView>
            </SView>
        )
    }
}