import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../../../SView'
import STheme from '../../../STheme'
import SPage from '../../../SPage'
import SForm from '../../../SForm'
import SText from '../../../SText'
import SHr from '../../../SHr'

export type PopupContainerPropsType = {

}
export default class Container extends Component<PopupContainerPropsType> {
    render() {
        return (
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}
                backgroundColor={STheme.color.background}
                withoutFeedback
                style={{
                    borderRadius: 8,
                    overflow: 'hidden',
                }}>
                {SPage.backgroundComponent}
                <SView col={"xs-12"} center>
                    {this.props.children}
                </SView>
            </SView>
        )
    }
}