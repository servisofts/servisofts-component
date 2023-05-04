
type typeProps = {
}

import numeroLetra from "./numeroLetra";
export default class SMath {
    static formatMoney(money, fixed = 2, cd = ",") {
        // money = parseFloat(money)
        if (cd == ",") {
            if (fixed == 0) {
                return parseFloat(money).toFixed(fixed).replace(/\./g, ',').replace(/\d(?=(\d{3})+$)/g, '$&.');
            }
            return parseFloat(money).toFixed(fixed).replace(/\./g, ',').replace(/\d(?=(\d{3})+,)/g, '$&.');
        } else if (cd == ".") {
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
    }
    static numberToLetter(numero, moneda = { p: "BOLIVIANOS", s: "BOLIVIANO" }) {
        return new numeroLetra().NumeroALetras(numero, moneda);
    }
    static parseFloat(txt) {
        if (!txt) return 0;
        txt = txt + ""
        let regex = /(\D)(\d+)$/g
        let resp = regex.exec(txt)
        if (resp != null) {
            let decimales = resp[2];
            let numero = txt.replace(resp[0], "");
            numero = numero.replace(/[,\.]/g, '')
            txt = numero + "." + decimales;
        }
        return parseFloat(txt)
    }
}
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