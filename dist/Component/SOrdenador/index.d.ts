export declare type TypeOrdenar = {
    key: String;
    order: "asc" | "desc";
    peso: Number;
};
export default class SOrdenador {
    arrProps: any;
    data: any;
    constructor(arrProps: TypeOrdenar[]);
    ordenarArray(arr: any): any;
    ordenar(data: any): {};
    ordernarObject(data: any): string[];
    sort(a: any, b: any): 0 | 1 | -1;
    recursiveData(data: any, key: any): any;
}
