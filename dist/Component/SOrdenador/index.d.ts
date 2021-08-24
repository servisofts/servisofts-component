export declare type TypeOrdenar = {
    key: String;
    order: "asc" | "desc";
    peso: Number;
};
export default class SOrdenador {
    arrProps: any;
    data: any;
    constructor(arrProps: TypeOrdenar[]);
    ordenar(data: any): {};
    recursiveData(data: any, key: any): any;
    ordernarObject(data: any): string[];
}
