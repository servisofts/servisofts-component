export default class SMath {
    static formatMoney(money: any, fixed?: number, cd?: string): string;
    static numberToLetter(numero: any, moneda?: {
        p: string;
        s: string;
    }): string;
    static parseFloat(txt: any): number;
}
