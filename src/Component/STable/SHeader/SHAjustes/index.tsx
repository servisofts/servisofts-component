import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SText, STheme, SView } from '../../../../index';
import { SInput } from '../../../SInput';
import SThread from '../../../SThread';
type SHeaderProps = {
    data: any,
    changeOrder: Function,
    changeFiltro: Function,
}
export default class SHAjustes extends Component<SHeaderProps> {
    data;
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOrder() {
        return <SView col={"xs-12"} row center>
            <SText>Order: </SText>
            <SInput
                type="select"
                options={["no", "asc", "desc"]}
                customStyle={"calistenia"}
                style={{
                    flex: 1,
                    height: 30,
                    // backgroundColor: STheme.color.primary + "44",
                    borderRadius: 4,
                }}
                defaultValue={this.data.order ? this.data.order : "no"}
                onChangeText={(val) => {
                    new SThread(300, "buscadorTablaProps", true).start(() => {
                        if (this.props.changeOrder)
                            this.props.changeOrder(val);
                    })

                }}
            />
        </SView>
    }
    getFiltros() {
        return <SView flex row >
            <SInput
                customStyle={"calistenia"}
                style={{
                    flex: 1,
                    height: 30,
                    // backgroundColor: STheme.color.primary + "44",
                    borderRadius: 4,
                }}
                defaultValue={this.data.filtro}
                onChangeText={(val) => {
                    new SThread(300, "buscadorTablaProps", true).start(() => {
                        if (this.props.changeFiltro)
                            this.props.changeFiltro(val);
                    })

                }}
            />
        </SView>
    }
    render() {
        this.data = this.props.data;
        return (
            <SView
                withoutFeedback
                style={{
                    width: 300,
                    height: 300,
                    backgroundColor: STheme.color.background,
                    borderRadius: 8,
                    padding: 4,
                }}>
                <SView col={"xs-12"} center height={30}>
                    <SText > {this.data.label} </SText>
                </SView>
                {this.getOrder()}
                {/* <SView col={"xs-12"} height={30}>
                    <SText>Editable: {data.editable ? "Si" : "No"} </SText>
                </SView> */}
                <SView col={"xs-12"} style={{
                    marginTop: 8,
                }} row center>
                    <SText>Filtro : </SText>
                    {this.getFiltros()}
                </SView>



            </SView>
        );
    }
}
