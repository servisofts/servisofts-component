
type typeProps = {
}

import numeroLetra from "./numeroLetra";

export default class SMath {
    static formatMoney(money) {
        return parseFloat(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    static numberToLetter(numero, moneda = { p: "BOLIVIANOS", s: "BOLIVIANO" }) {
        return new numeroLetra().NumeroALetras(numero, moneda);
    }
}