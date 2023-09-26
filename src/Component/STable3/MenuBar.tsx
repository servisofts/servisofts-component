import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SText from '../SText'
import STable3 from './index2'
import SList from '../SList'
import SExcel from '../SExcel'
import XLSX from 'xlsx-color';

type PropsType = {
    table: STable3,
    height?: number
}
export default class index extends Component<PropsType> {

    static defaultProps = {
        borderColor: "#6666",
        height: 30,
    }

    hanldleSave() {
        var aoa = [
            ["S", "h", "e", "e", "t", "J", "S"],
            [1, 2, , , 5, 6, 7],
            [2, 3, , , 6, 7, 8],
            [3, 4, , , 7, 8, 9],
            [4, 5, 6, 7, 8, 9, 0]
        ];
        var ws = XLSX.utils.aoa_to_sheet(aoa);
        /* create workbook and export */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "SheetJSExportAOA.xlsx");
    }
    render() {
        return <SView col={"xs-12"} height={this.props.height} >
            <SView col={"xs-12"} height={30} backgroundColor={this.props.table.props.colorMenu} padding={4}>
                <SList horizontal
                    data={[
                        {
                            label: "Guardar", onPress: () => {
                                console.log(this.props.table.state)
                                this.hanldleSave();
                            }
                        }
                    ]}
                    render={(obj) => <SView
                        onPress={obj.onPress.bind(this)}
                        width={100}
                        center
                        backgroundColor={this.props.table.props.colorBackground}
                        border={1}
                        borderRadius={4}
                        style={{ borderColor: this.props.table.props.borderColor }}>
                        <SText color={this.props.table.props.colorText}>{obj.label}</SText>
                    </SView>}
                />
            </SView>

        </SView>
    }
}