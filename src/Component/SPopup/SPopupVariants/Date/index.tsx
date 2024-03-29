import React, { Component } from 'react'
import SPopup from '../..'
import { SButtom } from '../../../SButtom'
import SIcon from '../../../SIcon'
import SPage from '../../../SPage'
import SText from '../../../SText'
import STheme from '../../../STheme'
import SView from '../../../SView'
import { SInput } from '../../../SInput'
import SDate from '../../../SDate'

export type PropsType = {
    icon?: any,
    title: string,
    message?: string,
    onPress?: (obj) => void
    onClose?: () => void
}
export default class Date extends Component<PropsType> {
    static defaultProps = {
        title: '',
        message: '',
        onPress: (resp) => { },
        onClose: () => { }
    }
    state
    fecha_ini
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
                    height: 360,
                    borderRadius: 8,
                    overflow: 'hidden',
                }}>
                {SPage.backgroundComponent}
                <SView col={"xs-12"} center height>
                    {/* <SView col={"xs-12"} height={90}> */}
                    {/* <SIcon name={"AlertOutline"} fill={STheme.color.danger} /> */}
                    {/* </SView> */}
                    <SView col={"xs-11"} center height={40}>
                        <SText fontSize={16} center bold> {this.props.title} </SText>
                    </SView>
                    <SView col={"xs-11"} center row >
                        <SView col={"xs-12 md-5.5"} center >
                            <SInput ref={(ref) => this.fecha_ini = ref} type={'date'} label={"Fecha"} defaultValue={new SDate().toString("yyyy-MM-dd")} />
                        </SView>
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
                                SPopup.close("Date")
                            }}>Cancelar</SButtom>
                        </SView>
                        <SView col={"xs-6"} center >
                            <SButtom props={{ type: "outline" }} onPress={() => {
                                if (this.props.onPress) {
                                    this.state.acept = true;
                                    var fecha = this.fecha_ini.getValue()
                                    this.props.onPress({
                                        fecha: fecha,
                                    })
                                }
                                SPopup.close("Date")

                            }}>Confirmar</SButtom>
                        </SView>
                    </SView>
                </SView>
            </SView>
        )
    }
}
