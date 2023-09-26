import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SPopup from '../SPopup'
import SIcon from '../SIcon'
import STable4 from './index'
import xlsx from "xlsx-color"
type PropsType = {
  parent: STable4

}
export default class ExcelExport extends Component<PropsType> {
  handleExport() {
    console.log("Exportando a excel")
    let workbook = xlsx.utils.book_new();
    const name = "ExcelTest"
    const worksheet = xlsx.utils.aoa_to_sheet([
      ["SERVISOFTS SRL"],
    ]);

    xlsx.utils.sheet_add_aoa(worksheet, [
      [{ v: 10, t: "n", s: { numFmt: '"BOB "#.###,00' } }],
      [{ v: 20, t: "n" }],
      [{ v: 15, t: "n" }],
      [{ t: "n", f: "SUM(B3:B5)" }],
    ], { origin: "B3" })

    xlsx.utils.book_append_sheet(
      workbook,
      worksheet,
      "Hoja1"
    );
    xlsx.writeFile(workbook, name + ".xlsx");
  }
  render() {
    return (
      <SView col={"xs-12"} flex onPress={this.handleExport.bind(this)}>
        <SIcon name='Excel' />
      </SView>
    )
  }
}