export type TypeOrdenar = {
    key: String,
    order: "asc" | "desc",
    peso: Number
}
export default class SOrdenador {
    arrProps;
    data;
    constructor(arrProps: TypeOrdenar[]) {
        this.arrProps = arrProps;
    }
    ordenarArray(arr) {
        return arr.sort(this.sort.bind(this));
    }
    ordenar(data) {
        var keys = this.ordernarObject(data);
        var newData = {};
        for (let i = 0; i < keys.length; i++) {
            newData[keys[i]] = data[keys[i]];
        }
        return newData;
    }

    ordernarObject(data) {
        this.data = data;
        if (!this.data) {
            return [];
        }

        var arr = Object.keys(this.data);
        if (arr.length <= 0) {
            return [];
        }
        // var ordInt = (order == "asc" ? 1 : -1);
        arr.sort((a, b) => this.sort(this.data[a], this.data[b]))
        return arr;
    }
    sort(a, b) {
        // 0 iguales , 1 mayor ,  -1 menor
        var peso = 0;
        for (let i = 0; i < this.arrProps.length; i++) {
            const prop = this.arrProps[i];
            var prioridad = prop.peso || this.arrProps.length - i;
            var ordInt = (prop.order == "asc" ? 1 : -1);
            var valA = this.recursiveData(a, prop.key) || 1;
            var valB = this.recursiveData(b, prop.key) || 1;
            if (typeof valA == "string") valA = valA.toLowerCase();
            if (typeof valB == "string") valB = valB.toLowerCase();

            peso += (valA < valB) ? (-1 * prioridad * ordInt) : (valA > valB) ? (1 * prioridad * ordInt) : 0;
        }
        return (peso < 0) ? (-1) : (peso > 0) ? (1) : 0;
    }
    recursiveData(data, key) {
        var dataFinal;
        var arr = key.split("/");
        for (let i = 0; i < arr.length; i++) {
            if (data) {
                dataFinal = data[arr[i]];
                if (dataFinal) {
                    data = dataFinal;
                }
            }
        }
        return data;
    }
    // ordernarArr(arr) {
    //     return [];
    // }
}
