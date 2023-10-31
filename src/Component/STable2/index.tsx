import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { SText, SHr, SLoad, SOrdenador, SScrollView2, STheme, SThread, SView, SMath } from '../../index';
import SGradient from '../SGradient';
import SIcon from '../SIcon';
import { SInput } from '../SInput';
import SPagination from '../SPagination';
import ExportExcel from './ExportExcel';
import Header, { HeaderProps } from './Header';
import Row, { STable2cellStyle } from './Row';



export type STable2Type = {
    header: Array<HeaderProps>,
    headerColor?: string,
    data: [Object] | Object,
    debug?: Boolean,
    filter?: (data: String, id?: any) => boolean,
    limit?: number,
    rowHeight?: number,
    cellStyle?: STable2cellStyle,
}

export default class STable2 extends Component<STable2Type> {
    state;
    dataProcesada;
    _animSize;
    size;
    scroll;
    sizeW;
    static defaultProps = {
    }

    constructor(props) {
        super(props);
        this.state = {
            limit: this.props.limit || 20,
            space: 2,
            height: 40,
            page: 1,
            isLoad: false,
            data: {},
            buscador: "",
            HFilter: {},
            HFNI: {},
            totales: {},
        };
        this.props.header.map((item, index) => {
            if (item.filter_h) {
                this.state.HFilter[item.key] = item.filter_h
            }
            if (item.filter_notin) {
                this.state.HFNI[item.key] = item.filter_notin
            }
        })
    }
    componentDidMount() {

    }


    buscar(data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var val = this.state.buscador.trim() || "";
        if (!val) {
            return data;
        }
        var lista_keys = Object.keys(data);
        var arrPalabras = val.split(" ");
        var arr2 = [];
        var objFinal = {};
        var stric = 0;
        lista_keys.map((key, i) => {
            var obj = data[key];
            var str = JSON.stringify(obj);
            var isValid = false;
            var peso = 0;
            val = val.toLowerCase();
            str = str.toLowerCase();
            var indexOf = str.indexOf(val);
            if (indexOf > -1) {
                peso += 100 / indexOf;
                isValid = true;
            }
            var expreg3 = new RegExp(":.?" + val + ".?(,|})", "i");
            if (expreg3.test(str)) {
                peso = peso + 50;
                isValid = true;
            }
            for (let i = 0; i < arrPalabras.length; i++) {
                const txtTest = arrPalabras[i];
                var expreg = new RegExp(":.*?" + txtTest + ".*?(,|})", "i");
                var expreg2 = new RegExp("dato.:.*?" + txtTest + ".*?(,|}|\")?", "i");
                if (expreg.test(str) || expreg2.test(str)) {
                    isValid = true;
                    peso += 1;
                }
            }
            if (peso < arrPalabras.length) {
                isValid = false;
            }
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
    filtro_de_cabeceras(data) {
        return true;
    }

    _buscador;
    _HFilter;
    _HFNI;
    procesarData = () => {
        var dtStr = JSON.stringify(this.props.data);
        if (this.state.lastData == dtStr && this.state.buscador == this._buscador && this.state.HFilter == this._HFilter && this.state.HFNI == this._HFNI) return;
        this._HFNI = this.state.HFNI;
        this._buscador = this.state.buscador;
        this._HFilter = this.state.HFilter;
        this.state.lastData = dtStr;
        this.state.data = {};
        this.state.totales = {};
        // this.setState({ isLoad: false });
        Object.keys(this.props.data).map((key, index) => {
            if (this.props.filter) {
                if (!this.props.filter(this.props.data[key], index)) {
                    return;
                }
            }
            this.state.data[key] = {};
            var isValid = true;
            this.props.header.map((item) => {
                if (!isValid) return;
                this.state.data[key][item.key] = Row.getDatoRecursive(this.props.data[key], item.key, index);
                if (item.render) {
                    this.state.data[key][item.key] = item.render(this.state.data[key][item.key]);
                }

                var data = this.state.data[key][item.key];
                if (typeof data == "object") {
                    data = JSON.stringify(data);
                }
                if (this.state.HFilter[item.key]) {
                    var filtro = this.state.HFilter[item.key];
                    filtro.split(" ").map((f) => {
                        if (f.length < 1) return;
                        var expreg = new RegExp(f, "i");
                        if (!expreg.test(data)) {
                            isValid = false;
                            delete this.state.data[key];
                        }
                    })
                }
                if (this.state.HFNI[item.key]) {
                    var filtro = this.state.HFNI[item.key];
                    filtro.split(" ").map((f) => {
                        if (f.length < 1) return;
                        var expreg = new RegExp(f, "i");
                        if (expreg.test(data)) {
                            isValid = false;
                            delete this.state.data[key];
                        }
                    })
                }
            })
            this.props.header.filter(a => !!a.sumar).map((item) => {
                if (!isValid) return;
                if (!this.state.totales[item.key]) {
                    this.state.totales[item.key] = 0;
                }
                let val = this.state.data[key][item.key];
                this.state.totales[item.key] += SMath.parseFloat(val);
            })
        })

        console.log(this.state.totales)
        this.state.data = this.buscar(this.state.data);
        new SThread(100, "as", false).start(() => {
            this.state.isLoad = true;
            this.setState({ ...this.state });
        });
    }

    _animHeader = {};
    getHeader = () => {
        return this.props.header.map((item, index) => {

            this._animHeader[item.key] = new Animated.Value(item.width ?? 40);
            this._animSize = Animated.add(this._animSize, this._animHeader[item.key]);
            this._animSize = Animated.add(this._animSize, new Animated.Value(this.state.space));
            return <Header headerColor={this.props.headerColor} {...item}
                label={item.label ?? item.key}
                total={this.state.totales[item.key]}
                key_header={item.key} animWidth={this._animHeader[item.key]} space={this.state.space}
                filter_h={this.state.HFilter[item.key]}
                filter_notin={this.state.HFNI[item.key]}
                changeHFNI={(filter) => {
                    this.state.HFNI[item.key] = filter;
                    this.setState({ HFNI: { ...this.state.HFNI } });
                }}
                changeHF={(filter) => {
                    this.state.HFilter[item.key] = filter;
                    this.setState({ HFilter: { ...this.state.HFilter } });
                }} />
        })
    }

    getData = () => {
        if (!this.state.isLoad) {
            return <SLoad />
        }
        var orderArr = []
        // orderArr.push({ key: "Peso", order: "desc", peso: 4 });
        this.props.header.map((header, i) => {
            if (header.order) {
                orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority || 2, type: header.orderType });
            }
        })
        return new SOrdenador(orderArr).ordernarObject(this.state.data).slice(((this.state.page - 1) * this.state.limit), (this.state.page * this.state.limit)).map((itemData, i) => {
            var data = this.state.data[itemData];
            return <Row
                key={"row_" + i}
                index={((this.state.page - 1) * this.state.limit) + i}
                height={this.props?.rowHeight ?? 40}
                space={this.state.space}
                data={data}
                cellStyle={this.props.cellStyle}
                header={this.props.header}
                animHeader={this._animHeader}
                animSize={this._animSize}
            />
        })
    }
    Footer = () => {
        // if (!this.state.isLoad) {
        //     return <SLoad />
        // }
        var cantidad = this.props.data ? Object.keys(this.state.data).length : 0;
        return <SView col={"xs-12"} height={22} center backgroundColor={STheme.color.primary} style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        }} row>
            <SView col={"xs-4"}>
                <SText fontSize={11}># {cantidad}</SText>
            </SView>
            <SView col={"xs-4"}>
                <SPagination data={this.state.data} limit={this.state.limit} page={this.state.page} onChange={(page) => {
                    this.setState({ page: page })
                }} />
            </SView>
            <SView col={"xs-4"} center style={{
                alignItems: "flex-end",
                paddingRight: 8,
            }}>
                <ExportExcel header={this.props.header} getDataProcesada={() => {
                    return this.state.data;
                }} />
            </SView>
        </SView>
    }
    render() {
        this._animSize = new Animated.Value(0);
        this._animSize.addListener(({ value }) => {
            this.size = value;
        });
        // if (this.sizeW) {
        //     this._animSize.setValue(this.sizeW);
        // }
        var anims = this._animSize;
        this.procesarData();
        return (
            <View style={{
                width: "100%",
                height: "100%",
            }}>
                <SView col={"xs-12"} height={30} center>
                    <SInput placeholder={"Buscar"} col={"xs-11.9"} height={24} style={{
                        backgroundColor: STheme.color.primary + "BB",
                        borderRadius: 4,
                        paddingLeft: 8,
                        height: 24,
                    }}
                        icon={<SIcon name={"Search"} width={16} fill={STheme.color.secondary} />}
                        onChangeText={(txt) => {
                            new SThread(400, "tbl_buscar", true).start(() => {
                                this.setState({ buscador: txt });
                            })
                        }} />
                </SView>
                <SView col={"xs-12"} flex center
                    onLayout={(e) => {
                        this.sizeW = e.nativeEvent.layout.width;
                        // anims.setValue(this.sizeW);

                    }}
                >
                    <SScrollView2
                        ref={(ref) => this.scroll = ref}
                        contentContainerStyle={{
                            width: null
                        }}
                        header={{
                            style: { height: 30 },
                            content: <SView col={"xs-12"} row height>
                                {this.getHeader()}
                            </SView>
                        }}
                    >
                        <SView animated
                            style={{
                                width: this._animSize,
                            }}
                        >
                            {this.getData()}
                            {/* <SView height={200} /> */}
                        </SView>
                    </SScrollView2>
                </SView>
                {this.Footer()}
            </View>
        );
    }
}
