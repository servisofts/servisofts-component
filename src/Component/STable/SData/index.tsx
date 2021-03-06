import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { SView, SText, SThread, STheme, SPopupOpen, SPopupClose } from '../../../index'
import { SInput } from '../../SInput';
import SOrdenador, { TypeOrdenar } from '../../SOrdenador';
import SPopup from '../../SPopup';
// import { SPopupClose, SPopupOpen } from '../../SPopup';
import SelectAlert from '../SelectAlert';

export type SDataType = {
    defaultHeight: number,
    actionTypes: Array<String>,
    onAction: Function,
    onSelectRow: Function,
    data: Object,
    header: Array<any>,
    animates: any,
    buscador: any,
    onEdit: Function,
    limit?: number,
    page?: number,
    onLoadEnd: (data: any) => void,
}
export default class SData extends Component<SDataType> {
    animHeight
    state
    _inputs
    dataProcesada;
    static defaultProps = {
        defaultHeight: 30,
        ordenador: [],
        limit: 25,
        page: 1,
    }
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            renderData: {},
            colorSelect: STheme.color.primary,
            select: {
                x: -1,
                y: -1
            },
        };
        this._inputs = {};
        this.animHeight = new Animated.Value(this.props.defaultHeight);
        // this.initialiceData();
    }
    getDataProcesada() {
        return this.dataProcesada;
    }
    // initialiceData() {
    //     var headerRender = this.props.header.map((header, i) => {
    //         if (header.render) {
    //             return header;
    //         }
    //         return null;
    //     })
    //     if (this.props.data) {
    //         headerRender.map((header) => {
    //             if (!header) return;
    //             Object.keys(this.state.data).map((key) => {
    //                 var obj = this.state.data[key];
    //                 var valor = this.getData(obj, header.key);
    //                 var data = null;
    //                 if (!this.state.renderData[key]) this.state.renderData[key] = {};
    //                 if (!this.state.renderData[key][header.key]) this.state.renderData[key][header.key] = {};
    //                 if (this.state.renderData[key][header.key].data != valor) {
    //                     data = header.render(valor);
    //                     this.state.renderData[key][header.key] = {
    //                         comp: data,
    //                         data: valor
    //                     };
    //                 } else {
    //                     data = this.state.renderData[key][header.key].comp;
    //                 }



    //                 if (typeof data != "object") {
    //                     this.state.data[key][header.key] = data;
    //                 }
    //             })
    //         });

    //     }

    // }
    buscar(data) {
        if (typeof data != "object") {
            return Object.keys(data);
        }
        var val = this.props.buscador.value.trim() || "";
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
        lista_keys.map((key) => {
            var obj = data[key];
            var str = JSON.stringify(obj);
            var isValid = false;
            var peso = 0;
            val = val.toLowerCase();
            if (str.indexOf(val) > -1) {
                peso = 100;
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
    reloadAnimate = () => {
        console.log("Recargando animate")
        // this.setState({ headerLoad: false })
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
                try { data = JSON.parse(data) } catch (e) {
                    data = {};
                }
            }

            data = data[dir];
        })
        if(!data) data = "";
        return data;
    }
    getColorHover({ x, y, position }) {
        // if ((this.state.select.x == x && this.state.select.y == y)) {
        //     return this.state.colorSelect + "66";
        // }
        // if ((this.state.select.x == x || this.state.select.y == y)) {
        //     return this.state.colorSelect + "22";
        // }
        if (position % 2 != 0) {
            return STheme.color.secondary + "11"
        }
        return "transparent";
    }
    recursiveDataReplace(data, key, newValue) {
        var dataFinal = data;
        var arr = key.split("/");
        for (let i = 0; i < arr.length - 1; i++) {
            if (dataFinal) {
                dataFinal = dataFinal[arr[i]];
                // if (dataFinal) {
                // data = dataFinal;
                // }
            }
        }
        dataFinal[arr[arr.length - 1]] = newValue;
        return data;
    }
    getDataEditable(_data, header, position, key) {
        var data = _data;
        if (!data) {
            data = "";
        }
        if (this.state.data[key]) {
            if (!this.state.data[key].finded) {
                // if (typeof this.state.data[key] == "object") {
                this.state.data[key].finded = {}
                // }
            }
            if (typeof data != "object") {
                if (this.state.data[key].finded) {
                    // if (this.state.data[key].finded[header.key]) {
                    this.state.data[key].finded[header.key] = data;
                    // }
                }
            }
        }
        if (header.editable) {
            // if (typeof data != "string") {
            //     return "Editable no string"
            // }
            return <SInput
                ref={ref => this._inputs[header.key + position] = ref}
                defaultValue={data}
                selectTextOnFocus
                type={header.type}
                options={header.options}
                onBlur={() => {
                    var input: SInput = this._inputs[header.key + position];
                    if (!input) {
                        return;
                    }
                    if (input.getValue() != data) {
                        SPopup.confirm({
                            title: `Esta seguro que desea editar el campo "${header.label}"?`,
                            message: `El valor actual es "${data}" \nse remplazara por "${input.getValue()}"`,
                            onClose: () => {
                                input.setValue(data);
                            },
                            onPress: () => {
                                if (this.props.onEdit) {
                                    var dataTemp = { ...this.state.data[key] };
                                    if (dataTemp.finded) delete dataTemp.finded;
                                    var arr = header.key.split("/");
                                    if (arr.length > 1) {
                                        this.recursiveDataReplace(dataTemp, header.key, input.getValue());
                                    } else {
                                        dataTemp[arr[0]] = input.getValue();
                                    }

                                    this.props.onEdit(dataTemp, { key: header.key, value: input.getValue() });
                                }
                            }
                        })
                    }
                }
                }
                style={{

                }} />;
        }
        return (<SText col={"xs-11"}>
            {data}
        </SText>);
    }
    getRow(obj, key, position) {
        return this.props.header.map((header, i) => {
            if (header.hidden) return <View />
            var Anims = this.props.animates;
            // if (!Anims) {
            //     return <View />
            // }
            // if (!Anims.widthHeaderAnim) {
            //     return <View />
            // }
            var DATA = this.getData(obj, header.key);
            if (header.key == "index") {
                DATA = position;
            }
            // if (header.key == "key") {
            //     DATA = key;
            // }
            if (header.render) {
                if (!this.state.renderData[key]) this.state.renderData[key] = {};
                if (!this.state.renderData[key][header.key]) this.state.renderData[key][header.key] = {};
                if (this.state.renderData[key][header.key].data != DATA) {
                    DATA = header.render(DATA, obj)
                } else {
                    DATA = this.state.renderData[key][header.key].comp;
                }
            }
            DATA = this.getDataEditable(DATA, header, position, key);

            return (
                <SView animated center style={{
                    position: "absolute",
                    height: "100%",
                    borderWidth: 1,
                    borderColor: STheme.color.background + "22",
                    backgroundColor: this.getColorHover({ x: header.key, y: key, position }),
                    ...(!Anims ? {} : {
                        ...(!Anims.widthHeaderAnim ? {} : {
                            left: (Anims.positionHeader[header.key] ? Anims.positionHeader[header.key].x : 0),
                            width: (Anims.widthHeaderAnim[header.key] ? Anims.widthHeaderAnim[header.key].x : header.width),
                            zIndex: (Anims.animSelect[header.key] ? Anims.animSelect[header.key] : 1),
                        })

                    })

                }} >
                    <SView center style={{
                        width: "100%",
                        height: "100%",
                        overflow: 'hidden',
                    }}
                    >
                        {DATA}
                    </SView>
                </SView >
            );
        })

    }
    render() {
        // if (!this.props.animates) {
        //     return <View />
        // }
        var i = (this.props.page - 1) * this.props.limit;
        var orderArr = []
        orderArr.push({ key: "Peso", order: "desc", peso: 4 });
        this.props.header.map((header, i) => {
            if (header.order) {
                orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority });
            }
        })

        this.dataProcesada = this.buscar(this.state.data);
        this.props.onLoadEnd(this.dataProcesada);
        return new SOrdenador(orderArr).ordernarObject(this.dataProcesada).slice(((this.props.page - 1) * this.props.limit), (this.props.page * this.props.limit)).map((key) => {
            var obj = this.state.data[key];
            i++;
            return (
                <SView
                    animated
                    row
                    style={{
                        width: "100%",
                        height: this.animHeight,
                    }}>

                    {this.getRow(obj, key, i)}
                </SView>
            );
        })

    }
}
