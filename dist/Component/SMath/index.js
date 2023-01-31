import numeroLetra from "./numeroLetra";
var SMath = /** @class */ (function () {
    function SMath() {
    }
    SMath.formatMoney = function (money) {
        return parseFloat(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };
    SMath.numberToLetter = function (numero, moneda) {
        if (moneda === void 0) { moneda = { p: "BOLIVIANOS", s: "BOLIVIANO" }; }
        return new numeroLetra().NumeroALetras(numero, moneda);
    };
    return SMath;
}());
export default SMath;
