import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Dimensions, Animated } from 'react-native';
import SScrollView from '../SScrollView';
import SHeader, { SHeaderProps } from './SHeader';
import SData, { SDataType } from './SData'
import SFooter from './SFooter';
import SHeadBar from './SHeadBar';
import { SView, SScrollView2, STheme } from '../../index';

type typeHeader = {
    label: String,
    key: String,
    width: Number,
    index: Number,
    hidden: Boolean,
    render: (data: String) => {}
}
type typeAction = "edit" | "delete";
type SType = {
    header: [typeHeader],
    headerProps: SHeaderProps,
    data: [Object],
    dataProps: SDataType,
    onAdd: Function,
    filter: (obj: Object, index: Number) => {},
    onSelectRow: (obj: Object, index: typeHeader) => {},
    actionTypes: [typeAction],
    onAction: (type: typeAction, obj: Object) => {},
    style: {

    }
}

export default class STable extends Component<SType> {
    state;
    contentSize
    headerPosition;
    scroll;
    refData;
    static defaultProps = {
        headerProps: {
            minWidth: 200,
            initialPosition: 50,
        },
        dataProps: {

        }
    }
    constructor(props) {
        super(props);
        var lista = this.props.header.sort(function (a, b) {
            if (a.index > b.index) {
                return 1;
            }
            if (a.index < b.index) {
                return -1;
            }
            return 0;
        });
        this.state = {
            header: lista,
            buscador: {
                value: "",
            },
            animates: {
            },
        };
        this.contentSize = new Animated.ValueXY({ x: this.props.headerProps.minWidth ? this.props.headerProps.minWidth : 20, y: 0 })
        this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 })
    }
    buscar(data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var lista_keys = Object.keys(data);
        var val = this.state.buscador.value.trim() || "";
        // var arrPalabras = val.replaceAll(" ", "|");
        var arrPalabras = val.split(" ");
        var arr2 = [];
        var objFinal = {};
        lista_keys.map((key) => {
            var obj = data[key];
            var str = JSON.stringify(obj);
            var isValid = false;
            var peso = 0;
            for (let i = 0; i < arrPalabras.length; i++) {
                const txtTest = arrPalabras[i];
                var expreg = new RegExp(":.*?" + txtTest + ".*?(,|})", "i");
                var expreg2 = new RegExp("dato.:.*?" + txtTest + ".*?(,|})", "i");
                if (expreg.test(str) || expreg2.test(str)) {
                    isValid = true;
                    peso++;
                }
            }
            // if (!this.state.verEliminados) {
            //     if (obj.estado == 0) {
            //         isValid = false;
            //     }
            // }
            if (isValid) {
                arr2.push(key);
                if (!objFinal[key]) {
                    objFinal[key] = data[key];
                }
                objFinal[key]["Peso"] = peso;
            }
        })

        return objFinal;
    }
    filterData() {
        var data = [];
        var i = 0;
        Object.keys(this.props.data).map((key) => {
            var obj = this.props.data[key];
            if (this.props.filter) {
                if (!this.props.filter(obj, i)) {
                    return;
                }
            }
            i++;
            data.push(obj);
        })
        return this.buscar(data);
    }
    render() {
        if (this.state.reload) {
            this.state.reload = false;
            this.contentSize = new Animated.ValueXY({ x: this.props.headerProps.minWidth ? this.props.headerProps.minWidth : 8, y: 0 })
            this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 })
            this.setState({ ...this.state })
            return <View />
        }
        return (
            <View style={{
                width: "100%",
                height: "100%",
            }}>
                <SHeadBar   {...this.props.headerProps} reload={() => {
                    this.setState({ reload: true, });
                }}
                    onAdd={this.props.onAdd}
                    buscar={(text) => {
                        this.setState({
                            buscador: {
                                ...this.state.buscador,
                                value: text
                            },
                        });
                    }} />
                <SView style={{
                    width: "100%",
                    flex: 1,
                }}>
                    <SScrollView2
                        ref={(ref) => { this.scroll = ref; }}
                        header={{
                            style: {
                                height: 30,
                            },
                            content: (
                                <SHeader
                                    style={{
                                        backgroundColor: STheme.color.barColor,
                                    }}
                                    minWidth={20}
                                    initialPosition={8}
                                    separation={2}
                                    {...this.props.headerProps}
                                    header={this.state.header}
                                    contentSize={this.contentSize}
                                    getScroll={() => { return this.scroll }}
                                    loadAnimated={(animates, reset) => {
                                        this.state.animates = animates;
                                        if (!animates["widthHeaderAnim"] || reset) {
                                            this.setState({ animates: this.state.animates })
                                        }
                                    }}
                                />)
                        }
                        }
                    >
                        <SView
                            animated
                            style={{
                                width: this.contentSize.x,
                                height: "100%",
                                flex: 1,
                                // backgroundColor: "#f0f"
                            }}>
                            <SData
                                {...this.props.dataProps}
                                actionTypes={this.props.actionTypes}
                                onAction={this.props.onAction}
                                onSelectRow={this.props.onSelectRow}
                                ref={(ref) => { this.refData = ref }}
                                data={this.filterData()}
                                header={this.state.header}
                                animates={this.state.animates}
                            />
                            <View style={{
                                width: "100%",
                                height: 20,
                            }}>

                            </View>
                        </SView>
                    </SScrollView2>
                </SView>
                <SFooter data={this.filterData()}
                    header={this.state.header}
                    setHeader={(header) => {
                        this.state.header = header;
                        // this.setState({ header: [...header]})
                    }}
                    style={{
                        backgroundColor: STheme.color.primary
                    }}
                />

            </View>
        );
    }
}
