import React, { Component } from 'react';
import { Platform } from 'react-native'
import { SPopupOpen, SText, STheme, SView, SIcon } from '../../../index';
import xlsx from 'xlsx-color';
import SaveFile from './SaveFile';
import SOrdenador from '../../SOrdenador';


type ExportExcelProps = {
    header: any,
    getDataProcesada: any,
}
export default class ExportExcel extends Component<ExportExcelProps> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    toLetters(num) {
        var mod = num % 26,
            pow = num / 26 | 0,
            out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
        return pow ? this.toLetters(pow) + out : out;
    }
    buildHeaderStyle(ws) {
        var fill = {
            patternType: "solid",
            fgColor: { rgb: "000000" }
        };

        var font = {
            color: {
                rgb: "FFFFFF"
            },
            bold: true
        };
        // var border = {
        //     bottom: {
        //         style: "thin",
        //         color: {
        //             theme: 5,
        //             tint: "1",
        //             rgb: "000000"
        //         }
        //     }
        // };
        var header = this.props.header;
        header.map((item, index) => {
            var letter = this.toLetters(index + 1);
            if (!ws[letter + '1']) return;
            ws[letter + '1'].s = {
                fill: fill,
                font: font,
            };
        })
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
        var header = this.buildHeader();
        var data = this.buildData();

        // return;

        var xf = "./prueba.xlsx";
        var spreadsheet = xlsx.utils.book_new();
        var sheets = {
            "Hoja 1": [
                header,
                ...data
            ]
        };

        for (var sheet of Object.keys(sheets)) {
            const worksheet = xlsx.utils.aoa_to_sheet(sheets[sheet]);
            xlsx.utils.book_append_sheet(
                spreadsheet,
                worksheet,
                sheet
            );
        }

        spreadsheet.Sheets["Hoja 1"]["!cols"] = this.buildHeaderProps();
        this.buildHeaderStyle(spreadsheet.Sheets["Hoja 1"]);


        SaveFile.saveExel(spreadsheet, "Reporte");

    }

    render() {
        return (
            <SView
                style={{
                    width: 30,
                    height: 26,
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
