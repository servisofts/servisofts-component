export declare type TypeOrdenar = {
    key: string;
    order: "asc" | "desc";
    peso: number;
    type?: "number" | "text" | "date";
};
export default class SOrdenador {
    arrProps: TypeOrdenar[];
    data: any;
    constructor(arrProps: TypeOrdenar[]);
    ordenarArray(arr: any): any;
    ordenar(data: any): {};
    ordernarObject(data: any): string[];
    ordernarObjetoToLista(data: any): any[];
    sort(a: any, b: any): 0 | 1 | -1;
    recursiveData(data: any, key: any): any;
}
