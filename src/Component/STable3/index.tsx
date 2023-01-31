import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { SText, SHr, SLoad, SOrdenador, SScrollView2, STheme, SThread, SView } from '../../index';
import SGradient from '../SGradient';
import { SInput } from '../SInput';
import SPagination from '../SPagination';
import ExportExcel from './ExportExcel';


export type Header_props = {
    label: String,
    key: string,
    width?: number,
    index?: number,
    hidden?: Boolean,
    editable?: Boolean,
    order?: "asc" | "desc",
    orderPriority?: number,
    // type?: SInputType,
    component?: any,
    options?: Array<any>,
    render?: (data: String, id?: any) => {},

}
type SType = {
    header: [Header_props],
    data: [Object] | Object,
    debug?: Boolean,
    filter?: (data: String, id?: any) => boolean,
    limit?: number,
}
export default class STable2 extends Component<SType> {
    state;
    dataProcesada;
    _anim = {
        size: new Animated.Value(0),
        headerSize: {},
        headerPosition: {}
    };
    static defaultProps = {
    }
    constructor(props) {
        super(props);
        this.state = {
            limit: this.props.limit || 20,
            space: 1,
            height: 40,
            page: 1,
            isLoad: false,
            data: {},
            buscador: ""
        };
        console.log("CONSTRUCTOR table")
        var data = this.props.data;
    }
    componentDidMount() {
        console.log("COMPONENT table")
        this.buildData();
    }
    getDatoRecursive(obj, key) {
        var path = key.split("/");
        var data = obj;
        path.map((dir) => {
            dir = dir.replace(/-.*/, "")
            if (dir == "") {
                return;
            }
            if (!data) data = {};
            if (typeof data == "string") {
                try { data = JSON.parse(data) } catch (e) {
                    data = {};
                }
            }

            data = data[dir];
        })
        if (!data) data = "";
        return data;
    }
    buildData = async () => {
        Object.keys(this.props.data).map((key, index) => {
            var obj = this.props.data[key];
            if (this.props.filter) {
                if (!this.props.filter(obj, index)) {
                    return null;
                }
            }
            this.state.data[key] = {};
            this.props.header.map((item, indexh) => {
                var datoRec = this.getDatoRecursive(obj, item.key);
                if (item.render) {
                    var dateRender: any = item.render(datoRec);
                    if (dateRender) {
                        if (typeof dateRender == "object") {
                            if (dateRender.type) {
                                return;
                            }
                        }
                        this.state.data[key][item.key] = dateRender;
                    }
                } else {
                    this.state.data[key][item.key] = datoRec;
                }
            })
        })
        new SThread(100, "as", false).start(() => {
            this.setState({
                isLoad: true,
            });
        });

    }

    buscar(data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var val = this.state.buscador.trim() || "";
        if (!val) {

            return data;
        }
        // if (val.length < 3) {
        //     return data;
        // }

        var lista_keys = Object.keys(data);
        // var arrPalabras = val.replaceAll(" ", "|");
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
            // var indexIn = str.length - val.length;
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
                // stric += txtTest.length;
                // if (txtTest.length < 3) {
                //     continue;
                // }
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
    header = () => {
        if (!this.state.isLoad) {
            return <SLoad />
        }
        var size = 0;
        var anm: any = this._anim.size;
        return <SView height row animated style={{
            width: anm
        }}>
            <SView style={{ position: "absolute" }} col={"xs-12"} height>
                <SGradient colors={[
                    STheme.color.secondary + "00",
                    STheme.color.background + "99",
                    STheme.color.primary + "ff",

                ]} />
            </SView>
            {this.props.header.map((item, indexH) => {
                size += item.width + (this.state.space * 2);
                this._anim.size.setValue(size);
                return <SView key={indexH} width={item.width + (this.state.space * 2)} height style={{
                    padding: this.state.space,
                }} center >
                    <SView backgroundColor={STheme.color.primary + "ff"} col={"xs-12"} height center>
                        <SText bold fontSize={12}>{item.label}</SText>

                    </SView>
                </SView>
            })}
        </SView>
    }
    data = () => {
        if (!this.state.isLoad) {
            return <SLoad />
        }
        var orderArr = []
        orderArr.push({ key: "Peso", order: "desc", peso: 4 });
        this.props.header.map((header, i) => {
            if (header.order) {
                orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority || 2 });
            }
        })
        this.dataProcesada = this.buscar(this.state.data);
        // console.log(orderArr);

        return new SOrdenador(orderArr).ordernarObject(this.dataProcesada).slice(((this.state.page - 1) * this.state.limit), (this.state.page * this.state.limit)).map((key, index) => {
            var obj = this.state.data[key];

            return <View style={{
                flexDirection: "row",
            }}>
                {this.props.header.map((item, indexH) => {
                    var itm = obj[item.key];
                    if (item.key == "index") {
                        itm = ((this.state.page - 1) * this.state.limit) + index + 1;
                    }
                    // if (item.render) {
                    //     itm = item.render(itm);
                    // } else {

                    if (item.component) {
                        if (!itm) {
                            itm = "";
                        } else {
                            itm = item.component(itm)
                        }

                    } else {
                        if (typeof itm == "object") {
                            itm = JSON.stringify(itm);
                        }
                        itm = <SText >{itm}</SText>
                    }

                    // }
                    return (
                        <SView key={indexH + "" + index} width={item.width + (this.state.space * 2)} height={this.state.height} style={{
                            padding: this.state.space,
                        }}>
                            <SView backgroundColor={index % 2 == 0 ? STheme.color.primary + "11" : STheme.color.secondary + "11"} col={"xs-12"} height style={{
                                justifyContent: 'center',
                                overflow: 'hidden',
                            }} {...item}>
                                {this.props.debug ? <SText>{JSON.stringify(obj[item.key])}</SText> : itm}
                            </SView>
                        </SView>)
                })}
            </View>

        })
    }
    Footer = () => {
        if (!this.state.isLoad) {
            return <SLoad />
        }
        var cantidad = this.dataProcesada ? Object.keys(this.dataProcesada).length : 0;
        return <SView col={"xs-12"} height={30} center backgroundColor={"#000"} style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        }} row>
            <SView col={"xs-4"}>
                <SText># {cantidad}</SText>
            </SView>
            <SView col={"xs-4"}>
                <SPagination data={this.dataProcesada} limit={this.state.limit} page={this.state.page} onChange={(page) => {
                    this.setState({ page: page })
                }} />
            </SView>
            <SView col={"xs-4"} center>
                <ExportExcel header={this.props.header} getDataProcesada={() => {
                    return this.dataProcesada;
                }} />
            </SView>
        </SView>
    }
    render() {
        console.log("Render table")
        return (
            <View style={{
                width: "100%",
                height: "100%",
            }}>
                <SView col={"xs-12"} height={30} center>
                    <SInput placeholder="Buscar" height onChangeText={(val) => {
                        new SThread(300, "buscadorTabla", true).start(() => {
                            this.setState({
                                buscador: val
                            })
                        })

                    }} />
                </SView>
                <SView col={"xs-12"} flex center>
                    <SScrollView2 header={{
                        style: {
                            height: 30 + (this.state.space * 2),
                        },
                        content: this.header(),
                    }} >
                        {this.data()}
                    </SScrollView2>
                </SView>
                {this.Footer()}

            </View>
        );
    }
}
