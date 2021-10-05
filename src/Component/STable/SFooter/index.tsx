import React, { Component } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { SText, STheme, SView } from '../../../index';
import SIcon from '../../SIcon';
import SLoad from '../../SLoad';
import SThread from '../../SThread';
import ExportExcel from './ExportExcel';
import Opciones from './Opciones';

type SType = {
    data: Object,
    header: [Object],
    style: ViewStyle,
    limit?: number,
    page?: any,
    setHeader: (data: Object) => void,
    reload: () => void,
    setPage: (page: any) => void,
    getDataProcesada: () => any,
    buscador?: any
}

export default class SFooter extends Component<SType> {
    state
    constructor(props) {
        super(props);
        this.state = {
            reload: true,
        };
    }
    onChangeData = (data) => {

        this.setState({ reload: true });
    }
    getPageItens = () => {
        const { limit } = this.props;
        const data = this.props.getDataProcesada();
        if (limit) {
            return Math.ceil(Object.keys(data).length / limit);
        }
        return 1;
    }
    getPagination() {
        var cantPages = this.getPageItens();
        var ITEMS = [];
        if (this.props.page > 1) {
            ITEMS.push(
                <SView style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                }} center onPress={() => {
                    this.props.setPage(this.props.page - 1);
                }}>
                    <SText>{`<`}</SText>
                </SView>
            );
        }
        var cant = cantPages > 7 ? 7 : cantPages;
        var vals = {};
        for (let index = 1; index <= cant; index++) {
            var val: any = index;

            if (cantPages > this.props.page + 3) {
                if (index == cant) {
                    val = cantPages + "";
                }
                if (index == 2 && this.props.page > 4) {
                    val = "...";
                }
                if (index == 6) {
                    val = "...";
                }
                if (index == 3 && this.props.page > 4) {
                    val = this.props.page - 1;
                }
                if (index == 4 && this.props.page > 4) {
                    val = this.props.page;
                }
                if (index == 5 && this.props.page > 4) {
                    val = this.props.page + 1;
                }
            } else {
                if (index == 2 && this.props.page > 4) {
                    val = "...";
                }
                if (index > 2 && this.props.page > 4) {
                    val = cantPages + (index - 7);
                }
                if (index == cant) {
                    val = cantPages + "";
                }
            }

            vals[index] = val;
            ITEMS.push(
                <SView style={{
                    width: 22,
                    height: 22,
                    borderRadius: 40,
                    backgroundColor: (val == this.props.page ? STheme.color.secondary + "66" : "transparent")
                }} center onPress={() => {
                    if (vals[index] == "...") return null;
                    this.props.setPage(vals[index]);
                }}>
                    <SText fontSize={12} center flex>{val}</SText>
                </SView>
            );
        }
        if (this.props.page < cantPages) {
            ITEMS.push(
                <SView style={{
                    width: 20,
                    height: 20,
                    borderRadius: 100,
                }} center onPress={() => {
                    this.props.setPage(this.props.page + 1);
                }}>
                    <SText>{`>`}</SText>
                </SView>
            );
        }

        return <SView col={"xs-12"} center height row>
            {ITEMS}
        </SView>
    }

    render() {
        if (!this.props.getDataProcesada) return <SLoad />
        var data = this.props.getDataProcesada();
        if (!data) return <SLoad />;
        var buscador = this.props.buscador;
        if (this.state.reload) {
            this.setState({ reload: false });
            return <SLoad />
        }
        return (
            <View style={{
                width: "100%",
                height: 30,
                backgroundColor: STheme.color.background,
                borderTopEndRadius: 8,
                borderTopStartRadius: 8,
                ...this.props.style
            }}>
                <SView row style={{
                    width: "100%", height: "100%",
                }}>
                    <SView col={"xs-4"} style={{
                        height: "100%",
                        paddingLeft: 8,
                        justifyContent: "center"
                        // alignItems: "center",
                    }}>
                        <SText style={{
                        }}>Total: {Object.keys(this.props.getDataProcesada()).length}</SText>
                    </SView>


                    <SView row col={"xs-4"} height center>
                        {this.getPagination()}
                    </SView>
                    <SView row center height col={"xs-4"} style={{
                        justifyContent: "flex-end",
                    }}>
                        <ExportExcel {...this.props} />

                        <SView style={{
                            width: 30,
                            height: 24,
                            padding: 3,
                        }} onPress={() => {
                            this.props.reload();
                        }}>
                            <SIcon name={"Reload"} fill={STheme.color.secondary} />
                        </SView>
                        <Opciones {...this.props} />
                    </SView>
                </SView>
            </View>
        );
    }
}
