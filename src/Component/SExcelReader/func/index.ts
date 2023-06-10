import * as xlsx from 'xlsx';
import { SExcelReaderPropsType } from '../types';

export default {
    create: (props: SExcelReaderPropsType) => {
        const reader = new FileReader();
        reader.onload = function (e: any) {
            try {

                const data = new Uint8Array(e.target.result);
                const workbook = xlsx.read(data, { type: 'array', cellDates: true });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                let data_json;
                if (props.type == "toJson") {
                    data_json = transform2(sheet);
                } else {
                    data_json = transform3(sheet);
                }
                // openWindow(sheet);
                if (props.onSubmit) props.onSubmit(data_json, props.callback);
            } catch (e) {
                if (props.onError) props.onError(e, props.callback);
                if (props.callback)props.callback()
                console.error(e);
            }

        };
        reader.readAsArrayBuffer(props.file);

    }

}

const openWindow = (sheet) => {
    xlsx.utils.sheet_to_html(sheet)
    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
    win.document.body.innerHTML = xlsx.utils.sheet_to_html(sheet)
}
const transform3 = (sheet) => {
    const range = xlsx.utils.decode_range(sheet['!ref']);
    const tableRange = {
        s: { r: range.s.r, c: range.s.c },
        e: { r: range.e.r, c: range.e.c }
    };
    const result = [];

    for (let i = 1; i <= tableRange.e.r; i++) {
        // Create an object to hold the row data
        const row = {};
        // Loop through each cell in the row
        for (let j = 0; j <= tableRange.e.c; j++) {
            // Use the header key as the property name and the cell value as the property value
            var cellAddress = xlsx.utils.encode_cell({ c: j, r: i });
            const cell = sheet[cellAddress];
            if (!cell || !cell.v) continue;
            const hh = sheet[xlsx.utils.encode_cell({ c: j, r: 0 })];
            if (!hh) continue;
            if (hh.v) {
                if (cell?.t == "d") {
                    row[hh.v] = (new Date(cell?.v).toISOString() + "") ?? "";
                } else if (cell?.t == "n") {
                    row[hh.v] = (parseFloat(cell?.v)) ?? 0;
                } else {
                    row[hh.v] = (cell?.v + "") ?? "";
                }
            }
            // xlsx.utils.format_cell()
        }
        if (Object.values(row).length <= 0) continue;
        // Add the row object to the result array
        result.push(row);
    }
    return result;
}

const formatDate = (cell) => {
    const xlsxDateValue = cell.v;
    return new Date((xlsxDateValue - (25567 + 1)) * 86400 * 1000);
    const objeto = xlsx.SSF.parse_date_code(cell.v, cell.z);
    const dateObj = new Date(1899, 11, 30); // 30 de diciembre de 1899
    dateObj.setDate(dateObj.getDate() + objeto.D); // Añade los días
    dateObj.setMilliseconds(objeto.T); // Añade los milisegundos
    dateObj.setFullYear(objeto.y, objeto.m, objeto.d); // Ajusta el año, mes y día
    dateObj.setHours(objeto.H, objeto.M, objeto.S); // Ajusta la hora, minuto y segundo
    return dateObj;
}
const transform2 = (sheet) => {
    return xlsx.utils.sheet_to_json(sheet, {
        header: 1,
        dateNF: 'yyyy-mm-dd',
    });
}
const transform = (sheet) => {
    const rows: any[] = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });
    const result = [];
    // Loop through each row
    for (let i = 1; i < rows.length; i++) {
        // Create an object to hold the row data
        const row = {};
        // Loop through each cell in the row
        for (let j = 0; j < rows[0].length; j++) {
            // Use the header key as the property name and the cell value as the property value
            row[rows[0][j]] = rows[i][j];
        }
        // Add the row object to the result array
        result.push(row);
    }
    return result;
}