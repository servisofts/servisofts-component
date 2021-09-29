import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SIcon, SPopupOpen, SText, STheme, SView } from '../../../index';
// import BotonesPaginas from "../../BotonesPaginas";
type SelectAlertProps = {
    onAction: (data: any) => void,
    actionTypes: any,
    data: any
}
export default class SelectAlert extends Component<SelectAlertProps> {
    state
    constructor(props) {
        super(props);
        this.state = {
            actions: {
                edit: { label: "Editar", icon: "editar", onPress: () => { this.props.onAction("edit") } },
                delete: { label: "Eliminar", icon: "eliminar", onPress: () => { this.props.onAction("delete") } },
            }
        };
    }
    getActions = () => {
        if (!this.props.actionTypes) {
            return [];
        }
        if (this.props.actionTypes.length <= 0) {
            return [];
        }
        return this.props.actionTypes.map((obj) => {
            return this.state.actions[obj];
        })
    }
    render() {
        return (<SView
            center
            style={{
                width: 500,
                maxWidth: "100%",
                maxHeight: "100%",
                height: 400,
                backgroundColor: STheme.color.background,
                borderRadius: 8,
            }}>
            <SText>Acciones</SText>
            <SView
                row
                center
                col={"xs-11"}
            >
                {/* <BotonesPaginas
                    col={"xs-5 md-6"}
                    data={this.getActions()} /> */}
            </SView>
        </SView>
        );
    }
}
