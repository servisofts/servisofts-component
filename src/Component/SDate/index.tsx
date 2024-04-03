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
    | "yyyy-MM"
    | "MM-dd"

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
    static getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
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

    static toString(dateStr, props: { fromFormat?: formatsTypes, toFormat?: formatsTypes }) {
        if (!dateStr) return "";
        let date: SDate;
        if (props.fromFormat) {
            date = new SDate(dateStr, props.fromFormat)
        } else {
            date = new SDate(dateStr, props.fromFormat ?? 'yyyy-MM-ddThh:mm:ss')
        }
        return date.toString(props.toFormat);
    }

    static parse(fecha: String, format: formatsTypes | string) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm"
        }
        var myRe = new RegExp('(yyyy)|(MM)|(dd)|(hh)|(HH)|(mm)|(ss)', 'g');
        // var res = [...format.matchAll(myRe)];
        // var res = Array.from(format.matchAll(myRe));
        // res = [...res];
        let match;
        let res = [];
        while ((match = myRe.exec(format)) !== null) {
            res.push(match);
        }
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
    date: Date
    constructor(date?: any, format?: formatsTypes) {
        if (!date) {
            this.date = new Date();
            return;
        }
        if (typeof date == "string") {
            if (!format) {
                this.date = new Date(date);
            } else {
                this.date = SDate.parse(date, format);
                // console.log(this.date);
            }
        } else {
            this.date = date;
        }
    }
    isValid() {
        var d: any = this.date;
        if (isNaN(d)) {
            return false;
        }
        return true;
    }
    clone() {
        return new SDate(new Date(this.date.getTime()));
    }

    // addTime() {
    //     this.date.set
    // }
    setHours(hours: number, min?: number, sec?: number, ms?: number) {
        this.date.setHours(hours, min, sec, ms);
        return this;
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
        this.date.setDate(this.date.getDate() + val);
        return this;
    }

    addMonth(val) {
        this.date.setMonth(this.getMonth() - 1 + val);
        return this;
    }
    addYear(val) {
        this.date.setFullYear(this.date.getFullYear() + val);
        return this;
    }
    addHour(val) {
        this.date.setHours(this.date.getHours() + val);
        return this;
    }
    addMinute(val) {
        this.date.setMinutes(this.date.getMinutes() + val);
        return this;
    }
    addSecond(val) {
        this.date.setSeconds(this.date.getSeconds() + val);
        return this;
    }
    addMillisecond(val) {
        this.date.setMilliseconds(this.date.getMilliseconds() + val);
        return this;
    }

    getMonth() {
        return this.date.getMonth() + 1;
    }
    getYear() {
        return this.date.getFullYear();
    }
    setYear(val) {
        this.date.setFullYear(val);
        return this;
    }
    getMonthJson() {
        return SDate.getMonth(this.getMonth());
    }
    getDayOfWeek() {
        var day = this.date.getDay();
        if (day - 1 < 0) {
            day = 7;
        }
        day = day - 1;
        return day;
    }
    getDayOfWeekJson() {
        return SDate.getDayOfWeek(this.getDayOfWeek());
    }

    getFirstDayOfWeek() {
        var day = this.getDayOfWeek();
        var date = this.clone();
        date.setDay(date.getDay() - day);
        return date;
    }
    getWeek() {
        var date = new SDate(this.getYear() + "-01-01", "yyyy-MM-dd");
        var day = date.getFirstDayOfWeek();
        return Math.floor(this.diff(day) / 7) + 1;
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
    diffTime(sdate) {
        var date1 = this.date;
        var date2 = sdate.date;
        if (!date2) return 0;
        var timeDiff = date2.getTime() - date1.getTime();
        return timeDiff;
    }

    diff(sdate) {
        var date1 = this.date;
        var date2 = sdate.date;
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }
    timeSince(sdate) {
        var date1 = this.date;
        var date2 = sdate.date;
        const seconds = Math.floor((date2.getTime() - date1.getTime()) / 1000);

        let interval = seconds / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " años";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " meses";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " días";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " horas";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutos";
        }
        return Math.floor(seconds) + " segundos";
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

    formatTime12(hours, minutes) {
        // Determina si es AM o PM
        let period = hours >= 12 ? 'p.m.' : 'a.m.';

        // Convierte las horas al formato de 12 horas
        hours = hours % 12;
        hours = hours ? hours : 12; // Si las horas son 0, se convierte a 12

        // Añade un cero al principio si los minutos son menores a 10
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        // Devuelve la hora formateada en h:mm a.m./p.m.
        return hours + ':' + formattedMinutes + ' ' + period;
    }
    toString(format?: formatsTypes | String) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm:ss"
        }
        var json = this.toJson();
        format = format.replace("yyyy", json.year + "");
        format = format.replace("MM", this.formatCero(json.month));
        format = format.replace("MONTH", this.getMonthJson().text);
        format = format.replace("DAY", this.getDayOfWeekJson().text);
        format = format.replace("day", this.getDayOfWeekJson().textSmall);
        format = format.replace("MON", this.getMonthJson().textSmall);
        format = format.replace("dd", this.formatCero(json.day));
        format = format.replace("hh", this.formatCero(json.hour));
        format = format.replace("HH", this.formatTime12(json.hour, json.minutes));
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
