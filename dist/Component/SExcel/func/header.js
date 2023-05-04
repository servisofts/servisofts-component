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
export default {
    create: function (worksheet, props) {
        var _a, _b, _c, _d;
        // Insertamos los tamanhos a las columnas
        worksheet["!cols"] = [];
        worksheet["!rows"] = [];
        worksheet["!rows"].push(__assign({ "hpx": (_b = (_a = props === null || props === void 0 ? void 0 : props.styleHeader) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : 18 }, ((_d = (_c = props === null || props === void 0 ? void 0 : props.styleHeader) === null || _c === void 0 ? void 0 : _c.row) !== null && _d !== void 0 ? _d : {})));
        props.header.map(function (a, i) {
            var _a, _b, _c, _d, _e, _f;
            var style = __assign(__assign({}, ((_a = props.styleHeader) !== null && _a !== void 0 ? _a : {})), ((_b = a.style) !== null && _b !== void 0 ? _b : {}));
            worksheet["!cols"].push(__assign({ "wpx": (_c = style === null || style === void 0 ? void 0 : style.width) !== null && _c !== void 0 ? _c : 50, "hpx": (_d = style === null || style === void 0 ? void 0 : style.height) !== null && _d !== void 0 ? _d : 50 }, ((_e = style === null || style === void 0 ? void 0 : style.col) !== null && _e !== void 0 ? _e : {})));
            // const letter = toLetters(i + 1);
            var code = xlsx.utils.encode_cell({ r: 0, c: i });
            var sty = {
                alignment: { horizontal: "center", vertical: "center", wrapText: true },
                font: { sz: 14, bold: true },
                fill: {
                    patternType: "solid",
                    fgColor: { rgb: "EEEEEE" }
                }
            };
            worksheet[code].s = __assign(__assign({}, (_f = worksheet[code]) === null || _f === void 0 ? void 0 : _f.s), sty);
        });
        return worksheet;
    }
};
