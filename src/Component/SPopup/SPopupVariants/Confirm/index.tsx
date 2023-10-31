import React, { Component } from 'react'
import SPopup from '../..'
import { SButtom } from '../../../SButtom'
import SHr from '../../../SHr'
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

    handleAccept() {
        if (this.props.onPress) {
            this.state.acept = true;
            this.props.onPress()
        }
        SPopup.close("confirm")
    }
    handleCancel() {
        if (this.props.onClose) {
            this.props.onClose()
        }
        SPopup.close("confirm")
    }
    render() {
        return (
            <SView col={"xs-11 sm-10 md-7 sm-5 xl-3"}
                center
                backgroundColor={STheme.color.background}
                withoutFeedback
                style={{
                    maxHeight: 360,
                    minHeight: 100,
                    // padding: 8,
                    // borderWidth:2,
                    // borderColor:STheme.color.text+"33",
                    borderRadius: 16,
                    overflow: 'hidden',
                }}>
                {SPage.backgroundComponent}
                <SView col={"xs-12"} center>
                    <SHr />
                    {/* <SView col={"xs-12"} height={90}>
                        <SIcon name={"AlertOutline"} fill={STheme.color.danger} />
                    </SView> */}
                    <SView col={"xs-11"} center>
                        <SText fontSize={18} center bold>{this.props.title}</SText>
                    </SView>
                    <SHr h={16}/>

                    <SView col={"xs-12"} row center>
                        <SView col={"xs-6"} center >
                            <SView onPress={this.handleCancel.bind(this)} style={{
                                padding: 10,
                                paddingLeft: 18,
                                paddingRight: 18,
                                borderRadius: 8,
                                borderWidth: 1,
                                borderColor: STheme.color.primary,
                                backgroundColor: STheme.color.secondary
                            }}>
                                <SText color={STheme.color.primary}>Cancelar</SText>
                            </SView>
                        </SView>
                        <SView col={"xs-6"} center >
                            <SView onPress={this.handleAccept.bind(this)} style={{
                                borderWidth: 1,
                                borderColor: STheme.color.secondary,
                                padding: 10,
                                paddingLeft: 18,
                                paddingRight: 18,
                                borderRadius: 8,
                                backgroundColor: STheme.color.primary
                            }}>
                                <SText color={STheme.color.secondary}>Confirmar</SText>
                            </SView>
                        </SView>
                    </SView>
                    <SHr h={16}/>
                    <SView col={"xs-10"} center>
                        <SText fontSize={12} center color={STheme.color.gray}>{this.props.message}</SText>
                    </SView>
                    <SHr />
                </SView>
            </SView>
        )
    }
}
