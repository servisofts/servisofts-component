import numeroLetra from "./numeroLetra";
var SMath = /** @class */ (function () {
    function SMath() {
    }
    SMath.formatMoney = function (money, fixed, cd) {
        if (fixed === void 0) { fixed = 2; }
        if (cd === void 0) { cd = ","; }
        // money = parseFloat(money)
        if (cd == ",") {
            if (fixed == 0) {
                return parseFloat(money).toFixed(fixed).replace(/\./g, ',').replace(/\d(?=(\d{3})+$)/g, '$&.');
            }
            return parseFloat(money).toFixed(fixed).replace(/\./g, ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
        }
        else if (cd == ".") {
            if (fixed == 0) {
                return parseFloat(money).toFixed(fixed).replace(/\d(?=(\d{3})+$)/g, '$&,');
            }
            return parseFloat(money).toFixed(fixed).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        return parseFloat(money).toFixed(fixed);
        // if (props?.currency) {
        //     return money.toLocaleString("es-ES", { style: "currency", currency: props?.currency })
        // }
        // return money.toLocaleString("es-ES", { style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2 })
        // const myRegExp = new RegExp("\d(?=(\d{3})+\.)", "g");
        // return parseFloat(money).toFixed(2).replace(/\./g, dec).replace(myRegExp, '$&' + sep)
    };
    SMath.numberToLetter = function (numero, moneda) {
        if (moneda === void 0) { moneda = { p: "BOLIVIANOS", s: "BOLIVIANO" }; }
        return new numeroLetra().NumeroALetras(numero, moneda);
    };
    SMath.parseFloat = function (txt) {
        if (!txt)
            return 0;
        txt = txt + "";
        var regex = /(\D)(\d+)$/g;
        var resp = regex.exec(txt);
        if (resp != null) {
            var decimales = resp[2];
            var numero = txt.replace(resp[0], "");
            numero = numero.replace(/[,\.]/g, '');
            txt = numero + "." + decimales;
        }
        return parseFloat(txt);
    };
    return SMath;
}());
export default SMath;
/*

type typeProps = {
}

import numeroLetra from "./numeroLetra";

export default class SMath {
    static formatMoney(money, { separator }) {
        if(!separator)
        var string_number = parseFloat(money).toFixed(2);
        string_number = string_number.replace(/\./g, separator)
        const myRegExp = new RegExp("\d(?=(\d{3})+\.)", "g");

        return parseFloat(money).toFixed(2).replace(myRegExp, ".")
    }
    static numberToLetter(numero, moneda = { p: "BOLIVIANOS", s: "BOLIVIANO" }) {
        return new numeroLetra().NumeroALetras(numero, moneda);
    }
}
*/ 
