import CalendarParams from './data';
type dateParams = "minutes" | "hour" | "day" | "dayOfWeek" | "month" | "year";

type formatsTypes =
    | "yyyy-MM-dd"
    | "yyyy-MM-dd hh:mm"
    | "yyyy-MM-dd hh:mm:ss"
    | "yyyy-MONTH-dd hh:mm:ss"
    | "yyyy-MON-dd hh:mm:ss"
    | "yyyy-MM-ddThh:mm:ss"
    | "dd/MM/yyyy"
    | "dd/MM"
    | "yyyy/MM"
    | "yyyy-MM-dd"

export default class SDate {

    static getMonthsOfYear = () => {
        return CalendarParams.month;
    }
    static getMonth = (month) => {
        var dateJson = CalendarParams.month[month]
        return {
            ...dateJson,
            month: month,
        };
    }
    static getDaysOfWeek = () => {
        return CalendarParams.dayOfWeek;
    }

    static getDayOfWeek = (dia) => {
        var dateJson = CalendarParams.dayOfWeek[dia]
        return {
            ...dateJson,
            day: dia,
        };
    }
    static isValid = (fecha) => {
        var fechaf = fecha.split("-");
        var ano = fechaf[0];
        var mes = fechaf[1];
        var dia = fechaf[2];
        var anoNum = parseInt(ano, 10);
        var mesNum = parseInt(mes, 10) - 1;
        var diaNum = parseInt(dia, 10);
        if ((anoNum < 1900) || (anoNum > 2100)) return false;
        var fechaAno = new Date(anoNum, 1, 1); // Para tener el año a 4 dígitos
        var fechaDate = new Date(anoNum, mesNum, diaNum); // Paso a fmt fecha
        return (fechaAno.getFullYear() == fechaDate.getFullYear() &&
            mesNum == fechaDate.getMonth()) ? true : false;
    }
    static formatCero(val) {
        var txt = val + "";
        if (txt.length > 1) {
            return val;
        }
        return "0" + val
    }

    static parse(fecha: String, format: formatsTypes | string) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm"
        }
        var myRe = new RegExp('(yyyy)|(MM)|(dd)|(hh)|(mm)|(ss)', 'g');
        // var res = [...format.matchAll(myRe)];
        var res = Array.from(format.matchAll(myRe));
        // res = [...res];
        var date = {}
        res.map((obj) => {
            var temp = fecha.substring(obj.index, obj.index + obj[0].length);
            date[obj[0]] = temp;
        });
        var ISOf = "yyyy-MM-ddThh:mm:ss-04:00"
        ISOf = ISOf.replace("yyyy", date["yyyy"] || "1999");
        ISOf = ISOf.replace("MM", date["MM"] ? date["MM"] : "01");
        ISOf = ISOf.replace("dd", date["dd"] ? date["dd"] : "01");
        ISOf = ISOf.replace("hh", date["hh"] || "00");
        ISOf = ISOf.replace("mm", date["mm"] || "00");
        ISOf = ISOf.replace("ss", date["ss"] || "01.000");
        var dateFina = new Date(ISOf);
        return dateFina;
    }

    //CLASS
    date
    constructor(date?: any, format?: formatsTypes | string) {
        if (!date) {
            this.date = new Date();
            return;
        }
        if (typeof date == "string") {
            if (!format) {
                this.date = new Date(date);
            } else {
                this.date = SDate.parse(date, format);
            }
        } else {
            this.date = date;
        }
    }
    isValid() {
        if (isNaN(this.date)) {
            return false;
        }
        return true;
    }
    clone() {
        return new SDate(new Date(this.date.getTime()));
    }
    getTime() {
        return this.date.getTime();
    }
    getDay() {
        return this.date.getDate();
    }
    setDay(val) {
        this.date.setDate(val);
        return this;
    }
    addDay(val) {
        this.date.setDate(this.getDay() + val);
        return this;
    }
    addMonth(val) {
        this.date.setMonth(this.getMonth() - 1 + val);
        return this;
    }
    getMonth() {
        return this.date.getMonth() + 1;
    }
    getMonthJson() {
        return SDate.getMonth(this.getMonth());
    }
    getDayOfWeek() {
        return this.date.getDay();
    }
    getDayOfWeekJson() {
        return SDate.getDayOfWeek(this.date.getDay());
    }
    equalDay(sdate) {
        if (this.toString("yyyy-MM-dd") == sdate.toString("yyyy-MM-dd")) {
            return true;
        }
        return false;
    }
    isAfter(sdate) {
        if (this.getTime() >= sdate.getTime()) {
            return true;
        }
        return false;
    }
    isBefore(sdate) {
        if (this.getTime() <= sdate.getTime()) {
            return true;
        }
        return false;
    }
    isCurDate() {
        if (this.toString("yyyy-MM-dd") == new SDate().toString("yyyy-MM-dd")) {
            return true;
        }
        return false;
    }
    formatCero(val) {
        var txt = val + "";
        if (txt.length > 1) {
            return val;
        }
        return "0" + val
    }

    toString(format?: formatsTypes | String) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm:ss"
        }
        var json = this.toJson();
        format = format.replace("yyyy", json.year);
        format = format.replace("MM", this.formatCero(json.month));
        format = format.replace("MONTH", this.getMonthJson().text);
        format = format.replace("MON", this.getMonthJson().textSmall);
        format = format.replace("dd", this.formatCero(json.day));
        format = format.replace("hh", this.formatCero(json.hour));
        format = format.replace("mm", this.formatCero(json.minutes));
        format = format.replace("ss", this.formatCero(json.seconds));
        return format;
    }
    get(param: dateParams) {
        return this.toJson()[param];
    }
    toJson() {
        return {
            minutes: this.date.getMinutes(),
            hour: this.date.getHours(),
            day: this.date.getDate(),
            seconds: this.date.getSeconds(),
            dayOfWeek: this.date.getDay(),
            month: this.getMonth(),
            year: this.date.getFullYear()
        }
    }

}
