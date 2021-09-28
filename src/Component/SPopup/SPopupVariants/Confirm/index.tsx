import React, { Component } from 'react'
import SPopup from '../..'
import { SButtom } from '../../../SButtom'
import SIcon from '../../../SIcon'
import SPage from '../../../SPage'
import SText from '../../../SText'
import STheme from '../../../STheme'
import SView from '../../../SView'

export type PropsType = {
    icon?: any,
    title: string,
    message?: string,
    onPress?: () => void
    onClose?: () => void
}
export default class Confirm extends Component<PropsType> {
    static defaultProps = {
        title: '',
        message: '',
        onPress: () => { },
        onClose: () => { }
    }
    state
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillUnmount() {
        if (this.props.onClose && !this.state.acept) {
            this.props.onClose()
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
                    <SView col={"xs-12"} height={90}>
                        <SIcon name={"AlertOutline"} fill={STheme.color.danger} />
                    </SView>
                    <SView col={"xs-11"} center height={40}>
                        <SText fontSize={16} center bold> {this.props.title} </SText>
                    </SView>
                    <SView col={"xs-10"} center height={40}>
                        <SText fontSize={12} center> {this.props.message} </SText>
                    </SView>
                    <SView col={"xs-12"} row height={70} center>
                        <SView col={"xs-6"} center>
                            <SButtom props={{ type: "danger" }} onPress={() => {
                                if (this.props.onClose) {
                                    this.props.onClose()
                                }
                                SPopup.close("confirm")
                            }}>Cancelar</SButtom>
                        </SView>
                        <SView col={"xs-6"} center >
                            <SButtom props={{ type: "outline" }} onPress={() => {
                                if (this.props.onPress) {
                                    this.state.acept = true;
                                    this.props.onPress()
                                }
                                SPopup.close("confirm")

                            }}>Confirmar</SButtom>
                        </SView>
                    </SView>
                </SView>
            </SView>
        )
    }
}
