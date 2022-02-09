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
    label: string,
    key: string,
    width?: number,
    index?: number,
    hidden?: Boolean,
    editable?: Boolean,
    order?: "asc" | "desc",
    orderPriority?: number,
    type?: SInputType,
    icon?: any,
    options?: Array<any>,
    render?: (data: String, id?: any) => {}
}
type typeAction = "edit" | "delete";
type SType = {
    header: Array<typeHeader>,
    headerProps?: SHeaderProps,
    data: [Object] | Object,
    dataProps?: SDataType,
    onAdd?: Function,
    filter?: (obj: Object, index: Number) => {},
    onSelectRow?: (obj: Object, index: typeHeader) => {},
    actionTypes?: [typeAction],
    onAction?: (type: typeAction, obj: Object) => {},
    onEdit?: (obj: Object) => {},
    onDelete?: (obj: Object) => {},
    style?: {},
    limit?: number,
}

export default class STable extends Component<SType> {
    state;
    contentSize
    headerPosition;
    scroll;
    refFooter;
    refData;
    static defaultProps = {
        limit: 20,
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
            page: 1,
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
    getData = (obj, key) => {
        var path = key.split("/");
        var data = obj;
        path.map((dir) => {
            dir = dir.replace(/-.*/, "")
            if (dir == "") {
                return;
            }
            if (!data) data = {};
            if (typeof data == "string") {
                try { data = JSON.parse(data) } catch (e) { }
            }

            data = data[dir];
        })
        return data;
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
            var isValid = true;
            this.state.header.map((objH) => {
                if (objH.filtro) {
                    var valueFinal = this.getData(obj, objH.key);
                    if (!valueFinal) {
                        isValid = false;
                        return;
                    }
                    if (typeof valueFinal != "string") {
                        isValid = false;
                        return;
                    }
                    if (valueFinal.toString().toLowerCase().indexOf(objH.filtro.toLowerCase()) == -1) {
                        isValid = false;
                    }
                }
            })
            if (!isValid) return;
            i++;
            obj.key = key;
            data.push(obj);
        })
        return data;
    }
    getAdd() {
        if (!this.props.onAdd) return null;
        return <SView style={{ 
            position: "absolute",
            bottom: 45,
            right: 8,
            width:50,
            height:50,
        }} onPress={()=>{
            this.props.onAdd();
        }}>
            <SIcon name={"Add"} />
        </SView>
    }
    render() {
        if (this.state.reload) {
            this.state.reload = false;
            this.contentSize = new Animated.ValueXY({ x: this.props.headerProps.minWidth ? this.props.headerProps.minWidth : 8, y: 0 })
            this.headerPosition = new Animated.ValueXY({ x: 0, y: 0 })
            // new SThread(300, "reloadTable", true).start(() => {
            //     this.setState({ ...this.state })
            // });
            // return <SLoad />
        }
        var dataFiltrada = this.filterData();
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
                                height: 30,
                            },
                            content: (
                                <SHeader
                                    style={{
                                        backgroundColor: STheme.color.barColor,
                                        borderRadius: 4,
                                        overflow: "hidden",
                                    }}
                                    minWidth={20}
                                    initialPosition={8}
                                    separation={2}
                                    {...this.props.headerProps}
                                    header={this.state.header}
                                    changeHeader={(header) => {
                                        this.setState({ header: header });
                                    }}
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
                                page={this.state.page}
                                actionTypes={this.props.actionTypes}
                                onAction={this.props.onAction}
                                onSelectRow={this.props.onSelectRow}
                                ref={(ref) => { this.refData = ref }}
                                buscador={this.state.buscador}
                                data={dataFiltrada}
                                header={this.state.header}
                                limit={this.props.limit}
                                animates={this.state.animates}
                                onEdit={this.props.onEdit}
                                onLoadEnd={() => {
                                    if (this.refFooter) {
                                        this.refFooter.onChangeData();
                                    }
                                }}
                            />
                            <View style={{
                                width: "100%",
                                height: 20,
                            }}>

                            </View>
                        </SView>
                    </SScrollView2>
                </SView>
                <SFooter data={dataFiltrada}
                    limit={this.props.limit}
                    ref={(ref) => { this.refFooter = ref }}
                    page={this.state.page}
                    buscador={this.state.buscador}
                    setPage={(page) => {
                        this.setState({ page: page });
                    }}
                    getDataProcesada={() => {
                        if (!this.refData) return null;
                        return this.refData.getDataProcesada();
                    }}
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
                {this.getAdd()}
            </View>
        );
    }
}
