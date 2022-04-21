var SMath = /** @class */ (function () {
    function SMath() {
    }
    SMath.formatMoney = function (money) {
        return parseFloat(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };
    return SMath;
}());
export default SMath;
