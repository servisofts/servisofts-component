import SDate from "../SDate";
var SOrdenador = /** @class */ (function () {
    function SOrdenador(arrProps) {
        this.arrProps = arrProps;
    }
    SOrdenador.prototype.ordenarArray = function (arr) {
        return arr.sort(this.sort.bind(this));
    };
    SOrdenador.prototype.ordenar = function (data) {
        var keys = this.ordernarObject(data);
        var newData = {};
        for (var i = 0; i < keys.length; i++) {
            newData[keys[i]] = data[keys[i]];
        }
        return newData;
    };
    SOrdenador.prototype.ordernarObject = function (data) {
        var _this = this;
        this.data = data;
        if (!this.data) {
            return [];
        }
        var arr = Object.keys(this.data);
        if (arr.length <= 0) {
            return [];
        }
        // var ordInt = (order == "asc" ? 1 : -1);
        arr.sort(function (a, b) { return _this.sort(_this.data[a], _this.data[b]); });
        return arr;
    };
    SOrdenador.prototype.ordernarObjetoToLista = function (data) {
        var _this = this;
        this.data = data;
        if (!this.data) {
            return [];
        }
        var arr = Object.keys(this.data);
        if (arr.length <= 0) {
            return [];
        }
        // var ordInt = (order == "asc" ? 1 : -1);
        arr.sort(function (a, b) { return _this.sort(_this.data[a], _this.data[b]); });
        return arr.map(function (key) {
            return _this.data[key];
        });
    };
    SOrdenador.prototype.sort = function (a, b) {
        // 0 iguales , 1 mayor ,  -1 menor
        var peso = 0;
        for (var i = 0; i < this.arrProps.length; i++) {
            var prop = this.arrProps[i];
            var prioridad = prop.peso || this.arrProps.length - i;
            var ordInt = (prop.order == "asc" ? 1 : -1);
            var valA = this.recursiveData(a, prop.key) || 0;
            var valB = this.recursiveData(b, prop.key) || 0;
            if (typeof valA == "string")
                valA = valA.toLowerCase();
            if (typeof valB == "string")
                valB = valB.toLowerCase();
            if (prop.type == "number") {
                valA = parseFloat(valA !== null && valA !== void 0 ? valA : 0);
                valB = parseFloat(valB !== null && valB !== void 0 ? valB : 0);
            }
            if (prop.type == "date") {
                valA = new SDate(valA).getTime();
                valB = new SDate(valB).getTime();
            }
            // const expres = /^[0-9]+$/
            // if ((valA + "").match(expres)) {
            //     valA = parseFloat(valA)
            //     console.log("entro", valA)
            // }
            // if ((valB + "").match(expres)) valB = parseFloat(valB)
            peso += (valA <= valB) ? (-1 * prioridad * ordInt) : ((valA > valB) ? (1 * prioridad * ordInt) : 0);
        }
        return (peso < 0) ? (-1) : (peso > 0) ? (1) : 0;
    };
    SOrdenador.prototype.recursiveData = function (data, key) {
        var dataFinal;
        var arr = key.split("/");
        for (var i = 0; i < arr.length; i++) {
            if (data) {
                dataFinal = data[arr[i]];
                if (dataFinal) {
                    data = dataFinal;
                }
                if (dataFinal == "0") {
                    data = dataFinal;
                }
            }
        }
        return data;
    };
    return SOrdenador;
}());
export default SOrdenador;
