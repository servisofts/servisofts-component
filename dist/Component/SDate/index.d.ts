declare type dateParams = "minutes" | "hour" | "day" | "dayOfWeek" | "month" | "year";
declare type formatsTypes = "yyyy-MM-dd hh:mm:ss" | "yyyy-MONTH-dd hh:mm:ss" | "yyyy-MON-dd hh:mm:ss" | "yyyy-MM-ddThh:mm:ss" | "dd/MM/yyyy" | "dd/MM" | "yyyy/MM" & any;
export default class SDate {
    static getMonthsOfYear: () => {
        "1": {
            text: string;
            textSmall: string;
        };
        "2": {
            text: string;
            textSmall: string;
        };
        "3": {
            text: string;
            textSmall: string;
        };
        "4": {
            text: string;
            textSmall: string;
        };
        "5": {
            text: string;
            textSmall: string;
        };
        "6": {
            text: string;
            textSmall: string;
        };
        "7": {
            text: string;
            textSmall: string;
        };
        "8": {
            text: string;
            textSmall: string;
        };
        "9": {
            text: string;
            textSmall: string;
        };
        "10": {
            text: string;
            textSmall: string;
        };
        "11": {
            text: string;
            textSmall: string;
        };
        "12": {
            text: string;
            textSmall: string;
        };
    };
    static getMonth: (month: any) => any;
    static getDaysOfWeek: () => {
        "0": {
            text: string;
            textSmall: string;
        };
        "1": {
            text: string;
            textSmall: string;
        };
        "2": {
            text: string;
            textSmall: string;
        };
        "3": {
            text: string;
            textSmall: string;
        };
        "4": {
            text: string;
            textSmall: string;
        };
        "5": {
            text: string;
            textSmall: string;
        };
        "6": {
            text: string;
            textSmall: string;
        };
    };
    static getDayOfWeek: (dia: any) => any;
    static isValid: (fecha: any) => boolean;
    static formatCero(val: any): any;
    static parse(fecha: String, format: formatsTypes): Date;
    date: any;
    constructor(date?: any, format?: formatsTypes);
    isValid(): boolean;
    clone(): SDate;
    getTime(): any;
    getDay(): any;
    setDay(val: any): void;
    addDay(val: any): void;
    addMonth(val: any): void;
    getMonth(): any;
    getMonthJson(): any;
    getDayOfWeek(): any;
    getDayOfWeekJson(): any;
    equalDay(sdate: any): boolean;
    isAfter(sdate: any): boolean;
    isBefore(sdate: any): boolean;
    isCurDate(): boolean;
    formatCero(val: any): any;
    toString(_format: formatsTypes): any;
    get(param: dateParams): any;
    toJson(): {
        minutes: any;
        hour: any;
        day: any;
        seconds: any;
        dayOfWeek: any;
        month: any;
        year: any;
    };
}
export {};
