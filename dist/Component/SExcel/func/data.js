var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import xlsx from 'xlsx-color';
var findDataRecursive = function (_a) {
    var header = _a.header, obj = _a.obj;
    if (!header.key)
        return "";
    var arr = header.key.split(".");
    var data = obj;
    arr.map(function (a) {
        data = data[a];
    });
    return data;
};
export default {
    create: function (worksheet, props) {
        // Insertamos los tamanhos a las columnas
        // Formateamos la data
        var arr_data = props.data;
        if (!Array.isArray(arr_data)) {
            arr_data = Object.values(props.data);
        }
        var data_format = arr_data.map(function (o, ir) {
            if (props.renderData) {
                o = props.renderData(o);
            }
            return props.header.map(function (h, ic) {
                var value = findDataRecursive({ header: h, obj: o });
                var myStyle = { fill: { patternType: "solid", fgColor: { rgb: ((ir % 2) != 0) ? "eeeeee" : "ffffff" } } };
                return { v: value, t: h.type, z: h.z, s: __assign(__assign({}, myStyle), h.styleData) };
            });
        });
        xlsx.utils.sheet_add_aoa(worksheet, data_format, { origin: -1 });
        // arr_data.map((data, ir) => {
        //     return props.header.map((h, ic) => {
        //         const code = xlsx.utils.encode_cell({ c: ic, r: ir + 1 });
        //         worksheet[code].s = { numberFormat: 'dd-mm-yyyy hh' }
        //     })
        // })
        return data_format;
    }
};
