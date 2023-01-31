export default class numeroLetra {
    Unidades(num: any): "" | "UN" | "DOS" | "TRES" | "CUATRO" | "CINCO" | "SEIS" | "SIETE" | "OCHO" | "NUEVE";
    Decenas(num: any): any;
    decena: number;
    unidad: number;
    DecenasY(strSin: any, numUnidades: any): any;
    Centenas(num: any): any;
    centenas: number;
    decenas: number;
    Seccion(num: any, divisor: any, strSingular: any, strPlural: any): string;
    cientos: number;
    resto: number;
    letras: string;
    etras: any;
    Miles(num: any): any;
    divisor: number;
    strMiles: any;
    strCentenas: any;
    Millones(num: any): any;
    strMillones: string;
    NumeroALetras(num: any, moneda?: {
        p: string;
        s: string;
    }): string;
}
