import * as xlsx from 'xlsx';
export default {
    create: function (props) {
        var reader = new FileReader();
        reader.onload = function (e) {
            try {
                var data = new Uint8Array(e.target.result);
                var workbook = xlsx.read(data, { type: 'array', cellDates: true });
                var sheetName = workbook.SheetNames[0];
                var sheet = workbook.Sheets[sheetName];
                var data_json = void 0;
                if (props.type == "toJson") {
                    data_json = transform2(sheet);
                }
                else {
                    data_json = transform3(sheet);
                }
                // openWindow(sheet);
                if (props.onSubmit)
                    props.onSubmit(data_json, props.callback);
            }
            catch (e) {
                if (props.onError)
                    props.onError(e, props.callback);
                if (props.callback)
                    props.callback();
                console.error(e);
            }
        };
        reader.readAsArrayBuffer(props.file);
    }
};
var openWindow = function (sheet) {
    xlsx.utils.sheet_to_html(sheet);
    var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
    win.document.body.innerHTML = xlsx.utils.sheet_to_html(sheet);
};
var transform3 = function (sheet) {
    var _a, _b, _c;
    var range = xlsx.utils.decode_range(sheet['!ref']);
    var tableRange = {
        s: { r: range.s.r, c: range.s.c },
        e: { r: range.e.r, c: range.e.c }
    };
    var result = [];
    for (var i = 1; i <= tableRange.e.r; i++) {
        // Create an object to hold the row data
        var row = {};
        // Loop through each cell in the row
        for (var j = 0; j <= tableRange.e.c; j++) {
            // Use the header key as the property name and the cell value as the property value
            var cellAddress = xlsx.utils.encode_cell({ c: j, r: i });
            var cell = sheet[cellAddress];
            if (!cell || !cell.v)
                continue;
            var hh = sheet[xlsx.utils.encode_cell({ c: j, r: 0 })];
            if (!hh)
                continue;
            if (hh.v) {
                if ((cell === null || cell === void 0 ? void 0 : cell.t) == "d") {
                    row[hh.v] = (_a = (new Date(cell === null || cell === void 0 ? void 0 : cell.v).toISOString() + "")) !== null && _a !== void 0 ? _a : "";
                }
                else if ((cell === null || cell === void 0 ? void 0 : cell.t) == "n") {
                    row[hh.v] = (_b = (parseFloat(cell === null || cell === void 0 ? void 0 : cell.v))) !== null && _b !== void 0 ? _b : 0;
                }
                else {
                    row[hh.v] = (_c = ((cell === null || cell === void 0 ? void 0 : cell.v) + "")) !== null && _c !== void 0 ? _c : "";
                }
            }
            // xlsx.utils.format_cell()
        }
        if (Object.values(row).length <= 0)
            continue;
        // Add the row object to the result array
        result.push(row);
    }
    return result;
};
var formatDate = function (cell) {
    var xlsxDateValue = cell.v;
    return new Date((xlsxDateValue - (25567 + 1)) * 86400 * 1000);
    var objeto = xlsx.SSF.parse_date_code(cell.v, cell.z);
    var dateObj = new Date(1899, 11, 30); // 30 de diciembre de 1899
    dateObj.setDate(dateObj.getDate() + objeto.D); // Añade los días
    dateObj.setMilliseconds(objeto.T); // Añade los milisegundos
    dateObj.setFullYear(objeto.y, objeto.m, objeto.d); // Ajusta el año, mes y día
    dateObj.setHours(objeto.H, objeto.M, objeto.S); // Ajusta la hora, minuto y segundo
    return dateObj;
};
var transform2 = function (sheet) {
    return xlsx.utils.sheet_to_json(sheet, {
        header: 1,
        dateNF: 'yyyy-mm-dd'
    });
};
var transform = function (sheet) {
    var rows = xlsx.utils.sheet_to_json(sheet, { header: 1, raw: false });
    var result = [];
    // Loop through each row
    for (var i = 1; i < rows.length; i++) {
        // Create an object to hold the row data
        var row = {};
        // Loop through each cell in the row
        for (var j = 0; j < rows[0].length; j++) {
            // Use the header key as the property name and the cell value as the property value
            row[rows[0][j]] = rows[i][j];
        }
        // Add the row object to the result array
        result.push(row);
    }
    return result;
};
