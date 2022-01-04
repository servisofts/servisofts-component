var SOrdenador = /** @class */ (function () {
    function SOrdenador(arrProps) {
        this.arrProps = arrProps;
    }
    SOrdenador.prototype.ordenar = function (data) {
        var keys = this.ordernarObject(data);
        var newData = {};
        for (var i = 0; i < keys.length; i++) {
            newData[keys[i]] = data[keys[i]];
        }
        return newData;
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
            }
        }
        return data;
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
        var instance = this;
        arr.sort(function (a, b) {
            // 0 iguales , 1 mayor ,  -1 menor
            var peso = 0;
            for (var i = 0; i < _this.arrProps.length; i++) {
                var prop = _this.arrProps[i];
                var prioridad = prop.peso || _this.arrProps.length - i;
                var ordInt = (prop.order == "asc" ? 1 : -1);
                var valA = _this.recursiveData(instance.data[a], prop.key) || 1;
                var valB = _this.recursiveData(instance.data[b], prop.key) || 1;
                // if(!valA) valA = 0;
                // if(!valB) valB = 0;
                // if (/^[0-9]+([\,\.][0-9]+)?/gm.test(valA)) {
                //     valA = parseFloat(valA);
                // }
                // if (/^[0-9]+([\,\.][0-9]+)?/gm.test(valB)) {
                //     valB = parseFloat(valB);
                // }
                if (typeof valA == "string")
                    valA = valA.toLowerCase();
                if (typeof valB == "string")
                    valB = valB.toLowerCase();
                peso += (valA < valB) ? (-1 * prioridad * ordInt) : (valA > valB) ? (1 * prioridad * ordInt) : 0;
            }
            return (peso < 0) ? (-1) : (peso > 0) ? (1) : 0;
            // 
        });
        return arr;
    };
    return SOrdenador;
}());
export default SOrdenador;
