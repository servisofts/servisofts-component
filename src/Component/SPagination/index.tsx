import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SText from '../SText';
import STheme from '../STheme';
import SView from '../SView';

type typeProps = {
    data?: any,
    limit?: number,
    page?: number,
    onChange?: (page: number) => void,
}

class SPagination extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getPageItens = () => {
        const { limit } = this.props;
        const data = this.props.data;
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
                <SView
                    key={"itm_sp_1"}
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                    }} center onPress={() => {
                        this.props.onChange(this.props.page - 1);
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
                <SView
                    key={"itm_sp_2_" + index}
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: 40,
                        backgroundColor: (val == this.props.page ? STheme.color.secondary + "66" : "transparent")
                    }} center onPress={() => {
                        if (vals[index] == "...") return null;
                        this.props.onChange(vals[index]);
                    }}>
                    <SText fontSize={12} center flex>{val}</SText>
                </SView>
            );
        }
        if (this.props.page < cantPages) {
            ITEMS.push(
                <SView
                    key={"itm_sp_3"}
                    style={{
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                    }} center onPress={() => {
                        this.props.onChange(this.props.page + 1);
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
        return (<SView col={"xs-12"} height center row>
            {this.getPagination()}
        </SView>
        );
    }
}
export default SPagination;