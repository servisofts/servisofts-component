import xlsx from 'xlsx-color';
import { toLetters } from '.';
import { SExcelHeaderPropsType, SExcelPropsType, SExcelStyleHeaderPropsType, CellStyle } from '../types';
export default {
    create: (worksheet, props: SExcelPropsType) => {
        // Insertamos los tamanhos a las columnas
        worksheet["!cols"] = [];
        worksheet["!rows"] = [];
        worksheet["!rows"].push({ "hpx": props?.styleHeader?.height ?? 18, ...(props?.styleHeader?.row ?? {}) });

        props.header.map((a, i) => {
            var style: SExcelStyleHeaderPropsType = {
                ...(props.styleHeader ?? {}),
                ...(a.style ?? {})
            }
            worksheet["!cols"].push({
                "wpx": style?.width ?? 50,
                "hpx": style?.height ?? 50,
                ...(style?.col ?? {})
            });
            // const letter = toLetters(i + 1);
            var code = xlsx.utils.encode_cell({ r: 0, c: i })
            var sty: CellStyle = {
                alignment: { horizontal: "center", vertical: "center", wrapText: true },
                font: { sz: 14, bold: true },
                fill: {
                    patternType: "solid",
                    fgColor: { rgb: "EEEEEE" },
                },
                // font: {
                //     color: {
                //         rgb: "FFFFFF"
                //     },
                //     bold: true
                // },
            }

            worksheet[code].s = { ...worksheet[code]?.s, ...sty }
        });

        return worksheet;
    }

}