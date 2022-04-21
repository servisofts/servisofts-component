declare type dateParams = "minutes" | "hour" | "day" | "dayOfWeek" | "month" | "year";
declare type formatsTypes = "yyyy-MM-dd" | "yyyy-MM-dd hh:mm" | "yyyy-MM-dd hh:mm:ss" | "yyyy-MONTH-dd hh:mm:ss" | "yyyy-MON-dd hh:mm:ss" | "yyyy-MM-ddThh:mm:ss" | "dd/MM/yyyy" | "dd/MM" | "yyyy/MM" | "yyyy-MM-dd";
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
    static parse(fecha: String, format: formatsTypes | string): Date;
    date: any;
    constructor(date?: any, format?: formatsTypes | string);
    isValid(): boolean;
    clone(): SDate;
    getTime(): any;
    getDay(): any;
    setDay(val: any): this;
    addDay(val: any): this;
    addMonth(val: any): this;
    getMonth(): any;
    getYear(): any;
    setYear(val: any): this;
    getMonthJson(): any;
    getDayOfWeek(): any;
    getDayOfWeekJson(): any;
    getFirstDayOfWeek(): SDate;
    getWeek(): number;
    equalDay(sdate: any): boolean;
    isAfter(sdate: any): boolean;
    isBefore(sdate: any): boolean;
    diffTime(sdate: any): number;
    diff(sdate: any): number;
    isCurDate(): boolean;
    formatCero(val: any): any;
    toString(format?: formatsTypes | String): String;
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
