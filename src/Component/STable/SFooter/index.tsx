import React, { Component } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import { SText, STheme, SView } from '../../../index';
import SIcon from '../../SIcon';
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
}

export default class SFooter extends Component<SType> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getPageItens = () => {
        const { limit, data } = this.props;
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
        for (let index = 1; index <= cantPages; index++) {
            ITEMS.push(
                <SView style={{
                    width: 22,
                    height: 22,
                    borderRadius: 40,
                    backgroundColor: (index == this.props.page ? STheme.color.secondary + "66" : "transparent")
                }} center onPress={()=>{
                    this.props.setPage(index);
                }}>
                    <SText fontSize={12} center flex>{index}</SText>
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
        return (
            <View style={{
                width: "100%",
                height: 24,
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
                        }}>Total: {Object.keys(this.props.data).length}</SText>
                    </SView>


                    <SView row col={"xs-4"} height center>
                        {this.getPagination()}
                    </SView>
                    <SView row center col={"xs-4"} style={{
                        justifyContent: "flex-end",
                    }}>
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
