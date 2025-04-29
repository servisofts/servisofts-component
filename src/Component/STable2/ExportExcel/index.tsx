import React, { Component } from 'react';
import { Platform } from 'react-native'
import { SPopupOpen, SText, STheme, SView, SIcon, HeaderProps } from '../../../index';
import xlsx, { CellObject } from 'xlsx-color';
import SaveFile from './SaveFile';
import SOrdenador from '../../SOrdenador';


type ExcelProps = {
    z: "0.00"
}

type ExportExcelProps = {
    header: HeaderProps[],
    getDataProcesada: any,
}
export default class ExportExcel extends Component<ExportExcelProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    excelToIndices(cell) {
        // Expresión regular para separar las letras (columna) de los números (fila)
        const match = cell.match(/^([A-Z]+)(\d+)$/);
        if (!match) throw new Error("Formato de celda no válido");

        const [, letters, row] = match;

        // Convertir letras de columna a índice numérico
        let column = 0;
        for (let i = 0; i < letters.length; i++) {
            column = column * 26 + (letters.charCodeAt(i) - 64); // 'A' es 65 en ASCII
        }

        return [column, parseInt(row, 10)];
    }
    toLetters(num) {
        var mod = num % 26,
            pow = num / 26 | 0,
            out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
        return pow ? this.toLetters(pow) + out : out;
    }
    applyPropsRange(ws: xlsx.WorkSheet, range, props: CellObject) {
        console.log("applyPropsRange", range)
        const rangearr = range.split(":");
        const [colStart, rowStart] = this.excelToIndices(rangearr[0])
        const [colEnd, rowEnd] = this.excelToIndices(rangearr[1])
        for (let col = colStart; col <= colEnd; col++) {
            const colLetter = this.toLetters(col)
            for (let row = rowStart; row <= rowEnd; row++) {
                const colstr = colLetter + row;
                const col: CellObject = ws[colstr];
                if (col) {
                    ws[colstr] = {
                        ...ws[colstr],
                        ...props
                    }
                }
            }
        }


    }
    buildHeaderProps() {
        var header = this.props.header;
        var headerArray = [];
        header.map((item, index) => {
            headerArray.push({
                wpx: item.width,
            });
        })
        return headerArray;
    }

    buildHeader() {
        var header = this.props.header;
        var headerArray = [];
        header.map((item, index) => {
            headerArray.push(item.label ?? item.key);
        })
        return headerArray;
    }
    buildData() {
        var header = this.props.header;
        var data = this.props.getDataProcesada();
        var dataArr = [];

        var orderArr = []
        // orderArr.push({ key: "Peso", order: "desc", peso: 4 });
        this.props.header.map((header, i) => {
            if (header.order) {
                orderArr.push({ key: header.key, order: header.order, peso: header.orderPriority });
            }
        })
        new SOrdenador(orderArr).ordernarObject(data).map((key) => {
            var item = data[key];
            var arrT = [];
            header.map((head) => {
                var dataFinal = "";
                if (item.finded) {
                    dataFinal = item.finded[head.key]
                } else {
                    dataFinal = item[head.key] || "";
                }
                if (head.renderExcel) {
                    dataFinal = head.renderExcel(dataFinal);
                }
                if (typeof dataFinal == "object") {
                    dataFinal = JSON.stringify(dataFinal)
                }
                arrT.push(dataFinal);

            })
            dataArr.push(arrT);
        })

        return dataArr;
    }
    buildExcel = async () => {
        // var header2 = this.buildHeader();
        var header = this.buildHeader();
        var data = this.buildData();


        const nombre_de_la_hoja = "Hoja 1"

        var spreadsheet = xlsx.utils.book_new();
        const worksheet = xlsx.utils.aoa_to_sheet([
            // header2,
            header,
            ...data
        ]);

        // Cambiamos el formato
        // Object.keys(worksheet).forEach((cellKey) => {
        //     if (cellKey.startsWith('B') && !cellKey.startsWith('B1')) { // Saltar la cabecera
        //         worksheet[cellKey].z = '0.00'; // Formato numérico con 2 decimales
        //     }
        // });
        xlsx.utils.book_append_sheet(
            spreadsheet,
            worksheet,
            nombre_de_la_hoja
        );



        const ws = spreadsheet.Sheets[nombre_de_la_hoja];
        ws["!cols"] = this.buildHeaderProps();


        const range = ws['!ref'].split(":");
        const cellstart = this.excelToIndices(range[0])
        const cellend = this.excelToIndices(range[1])

        console.log("range", range)
        console.log("cellstart", cellstart)
        console.log("cellend", cellend)


        // Esto es para aplicar el stilo a la cabecera 
        this.applyPropsRange(ws, `A1:${this.toLetters(cellend[0])}1`, {
            t: "s",
            s: {
                fill: {
                    patternType: "solid",
                    fgColor: { rgb: "000000" }
                },
                font: {
                    color: {
                        rgb: "FFFFFF"
                    },
                    bold: true
                },
            }
        });

        const startTable = 2;

        // Esto es para aplicar los formatos a las celdas

        this.props.header.map((item, index) => {
            if (item.excelProps) {
                const leter = this.toLetters(index + 1);
                this.applyPropsRange(ws, `${leter}${startTable}:${leter}${cellend[1]}`, item.excelProps);
            }
        })

        // this.buildHeaderStyle(ws, 1);
        // this.buildHeaderStyle(ws, 2);


        SaveFile.saveExel(spreadsheet, "Reporte");

    }

    render() {
        return (
            <SView
                style={{
                    width: 20,
                    height: 20,
                    // backgroundColor: "#f0f",
                    // padding: 2,
                }}
                onPress={() => {
                    this.buildExcel()
                }}>
                <SIcon name={'Excel'}
                />
            </SView>
        );
    }
}
