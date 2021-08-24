import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Dimensions, Animated } from 'react-native';
import SScrollView from '../SScrollView';
import SHeader, { SHeaderProps } from './SHeader';
import SData, { SDataType } from './SData'
import SFooter from './SFooter';
import SHeadBar from './SHeadBar';
import { SView, SScrollView2, STheme } from '../../index';
import { SInputType } from '../SInput';
import SThread from '../SThread';
import SLoad from '../SLoad';
import SOrdenador, { TypeOrdenar } from '../SOrdenador';
import SIcon from '../SIcon';
import SPopup from '../SPopup';

type typeHeader = {
    label: String,
    key: String,
    width?: Number,
    index?: Number,
    hidden?: Boolean,
    editable?: Boolean,
    order?: "asc" | "desc",
    orderPriority?: Number,
    type?: SInputType,
    options?: Array<any>,
    render?: (data: String) => {}
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
    onEdit?: (obj: Object) => {},
    onDelete?: (obj: Object) => {},
    style: {

    },

}

export default class STable extends Component<SType> {
    state;
    contentSize
    headerPosition;
    scroll;
    refData;
    static defaultProps = {
        headerProps: {
            minWidth: 500,
            initialPosition: 8,
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
        this.initDelete(lista);

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
    initDelete(lista) {
        if (!this.props.onDelete) {
            return null;
        }
        lista.push({
            key: "key", label: "Eliminar", width: 100, render: (key) => {
                return <SView style={{
                    width: "100%",
                    height: "100%",
                }} center onPress={() => {

                    SPopup.confirm({
                        title: `Eliminar`,
                        message: `Esta seguro de eliminar?`,
                        onClose: () => {
                            // input.setValue(data);
                        },
                        onPress: () => {
                            // this.props.data[key];
                            this.props.onDelete(key);
                        }
                    })
                }}>
                    <SIcon name={"Delete"} width={25} height={25} />
                </SView>
            }
        })
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
        return data;
    }
    render() {
        if (this.state.reload) {
            this.state.reload = false;
            this.contentSize = new Animated.ValueXY({ x: this.props.headerProps.minWidth ? this.props.headerProps.minWidth : 8, y: 0 })
            this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 })
            new SThread(300, "reloadTable", true).start(() => {
                this.setState({ ...this.state })
            });
            return <SLoad />
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
                        this.state.buscador = {
                            ...this.state.buscador,
                            value: text
                        }
                        this.setState({
                            buscador: {
                                ...this.state.buscador,
                            },
                        });
                    }} />
                <SView style={{
                    width: "100%",
                    flex: 1,
                }}>
                    <SScrollView2
                        ref={(ref) => { this.scroll = ref; }}
                        contentContainerStyle={{
                            minWidth: "100%",
                        }}
                        header={{
                            style: {

                                height: 25,
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
                                buscador={this.state.buscador}
                                data={this.filterData()}
                                header={this.state.header}
                                animates={this.state.animates}
                                onEdit={this.props.onEdit}
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
                    reload={() => {
                        this.setState({ reload: true, });
                    }}
                    style={{
                        backgroundColor: STheme.color.primary
                    }}
                />

            </View>
        );
    }
}
