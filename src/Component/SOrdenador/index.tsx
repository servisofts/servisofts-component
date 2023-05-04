import SDate from "../SDate";

export type TypeOrdenar = {
    key: string,
    order: "asc" | "desc",
    peso: number,
    type?: "number" | "text" | "date",

}
export default class SOrdenador {
    arrProps: TypeOrdenar[];
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
    ordernarObjetoToLista(data) {
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

        return arr.map((key) => {
            return this.data[key];
        });
    }
    sort(a, b) {
        // 0 iguales , 1 mayor ,  -1 menor
        var peso = 0;
        for (let i = 0; i < this.arrProps.length; i++) {
            const prop = this.arrProps[i];
            var prioridad = prop.peso || this.arrProps.length - i;
            var ordInt = (prop.order == "asc" ? 1 : -1);
            var valA = this.recursiveData(a, prop.key) || 0;
            var valB = this.recursiveData(b, prop.key) || 0;
            if (typeof valA == "string") valA = valA.toLowerCase();
            if (typeof valB == "string") valB = valB.toLowerCase();
            if (prop.type == "number") {
                valA = parseFloat(valA ?? 0);
                valB = parseFloat(valB ?? 0);
            }
            if (prop.type == "date") {
                valA = new SDate(valA).getTime()
                valB = new SDate(valB).getTime()
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
                if (dataFinal == "0") {
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
