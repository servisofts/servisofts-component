import xlsx from 'xlsx-color';
import { toLetters } from '.';
import { SExcelHeaderPropsType, SExcelPropsType } from '../types';
import { WorkSheet } from '../xlsx-type';

const findDataRecursive = ({ header, obj }) => {
    if (!header.key) return "";
    var arr = header.key.split(".");
    let data = obj;
    arr.map((a) => {
        data = data[a];
    })
    return data;
}
export default {

    create: (worksheet: WorkSheet, props: SExcelPropsType) => {
        // Insertamos los tamanhos a las columnas
        // Formateamos la data
        var arr_data = props.data;
        if (!Array.isArray(arr_data)) {
            arr_data = Object.values(props.data);
        }

        var data_format = arr_data.map((o, ir) => {
            if (props.renderData) {
                o = props.renderData(o);
            }
            return props.header.map((h, ic) => {
                var value = findDataRecursive({ header: h, obj: o })
                var myStyle = { fill: { patternType: "solid", fgColor: { rgb: ((ir % 2) != 0) ? "eeeeee" : "ffffff" } } }

                return { v: value, t: h.type, z: h.z, s: { ...myStyle, ...h.styleData } };
            })
        })
        xlsx.utils.sheet_add_aoa(worksheet, data_format, { origin: -1 })
        // arr_data.map((data, ir) => {
        //     return props.header.map((h, ic) => {
        //         const code = xlsx.utils.encode_cell({ c: ic, r: ir + 1 });
        //         worksheet[code].s = { numberFormat: 'dd-mm-yyyy hh' }
        //     })
        // })


        return data_format;
    }

}
