var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import CalendarParams from './data';
var SDate = /** @class */ (function () {
    function SDate(date, format) {
        if (!date) {
            this.date = new Date();
            return;
        }
        if (typeof date == "string") {
            if (!format) {
                this.date = new Date(date);
            }
            else {
                this.date = SDate.parse(date, format);
                // console.log(this.date);
            }
        }
        else {
            this.date = date;
        }
    }
    SDate.formatCero = function (val) {
        var txt = val + "";
        if (txt.length > 1) {
            return val;
        }
        return "0" + val;
    };
    SDate.parse = function (fecha, format) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm";
        }
        var myRe = new RegExp('(yyyy)|(MM)|(dd)|(hh)|(mm)|(ss)', 'g');
        // var res = [...format.matchAll(myRe)];
        // var res = Array.from(format.matchAll(myRe));
        // res = [...res];
        var match;
        var res = [];
        while ((match = myRe.exec(format)) !== null) {
            res.push(match);
        }
        var date = {};
        res.map(function (obj) {
            var temp = fecha.substring(obj.index, obj.index + obj[0].length);
            date[obj[0]] = temp;
        });
        var ISOf = "yyyy-MM-ddThh:mm:ss-04:00";
        ISOf = ISOf.replace("yyyy", date["yyyy"] || "1999");
        ISOf = ISOf.replace("MM", date["MM"] ? date["MM"] : "01");
        ISOf = ISOf.replace("dd", date["dd"] ? date["dd"] : "01");
        ISOf = ISOf.replace("hh", date["hh"] || "00");
        ISOf = ISOf.replace("mm", date["mm"] || "00");
        ISOf = ISOf.replace("ss", date["ss"] || "01.000");
        var dateFina = new Date(ISOf);
        return dateFina;
    };
    SDate.prototype.isValid = function () {
        if (isNaN(this.date)) {
            return false;
        }
        return true;
    };
    SDate.prototype.clone = function () {
        return new SDate(new Date(this.date.getTime()));
    };
    SDate.prototype.getTime = function () {
        return this.date.getTime();
    };
    SDate.prototype.getDay = function () {
        return this.date.getDate();
    };
    SDate.prototype.setDay = function (val) {
        this.date.setDate(val);
        return this;
    };
    SDate.prototype.addDay = function (val) {
        this.date.setDate(this.getDay() + val);
        return this;
    };
    SDate.prototype.addMonth = function (val) {
        this.date.setMonth(this.getMonth() - 1 + val);
        return this;
    };
    SDate.prototype.getMonth = function () {
        return this.date.getMonth() + 1;
    };
    SDate.prototype.getYear = function () {
        return this.date.getFullYear();
    };
    SDate.prototype.setYear = function (val) {
        this.date.setFullYear(val);
        return this;
    };
    SDate.prototype.getMonthJson = function () {
        return SDate.getMonth(this.getMonth());
    };
    SDate.prototype.getDayOfWeek = function () {
        var day = this.date.getDay();
        if (day - 1 < 0) {
            day = 7;
        }
        day = day - 1;
        return day;
    };
    SDate.prototype.getDayOfWeekJson = function () {
        return SDate.getDayOfWeek(this.getDayOfWeek());
    };
    SDate.prototype.getFirstDayOfWeek = function () {
        var day = this.getDayOfWeek();
        var date = this.clone();
        date.setDay(date.getDay() - day);
        return date;
    };
    SDate.prototype.getWeek = function () {
        var date = new SDate(this.getYear() + "-01-01", "yyyy-MM-dd");
        var day = date.getFirstDayOfWeek();
        return Math.floor(this.diff(day) / 7) + 1;
    };
    SDate.prototype.equalDay = function (sdate) {
        if (this.toString("yyyy-MM-dd") == sdate.toString("yyyy-MM-dd")) {
            return true;
        }
        return false;
    };
    SDate.prototype.isAfter = function (sdate) {
        if (this.getTime() >= sdate.getTime()) {
            return true;
        }
        return false;
    };
    SDate.prototype.isBefore = function (sdate) {
        if (this.getTime() <= sdate.getTime()) {
            return true;
        }
        return false;
    };
    SDate.prototype.diffTime = function (sdate) {
        var date1 = this.date;
        var date2 = sdate.date;
        if (!date2)
            return 0;
        var timeDiff = date2.getTime() - date1.getTime();
        return timeDiff;
    };
    SDate.prototype.diff = function (sdate) {
        var date1 = this.date;
        var date2 = sdate.date;
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };
    SDate.prototype.isCurDate = function () {
        if (this.toString("yyyy-MM-dd") == new SDate().toString("yyyy-MM-dd")) {
            return true;
        }
        return false;
    };
    SDate.prototype.formatCero = function (val) {
        var txt = val + "";
        if (txt.length > 1) {
            return val;
        }
        return "0" + val;
    };
    SDate.prototype.toString = function (format) {
        if (!format) {
            format = "yyyy-MM-dd hh:mm:ss";
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
    };
    SDate.prototype.get = function (param) {
        return this.toJson()[param];
    };
    SDate.prototype.toJson = function () {
        return {
            minutes: this.date.getMinutes(),
            hour: this.date.getHours(),
            day: this.date.getDate(),
            seconds: this.date.getSeconds(),
            dayOfWeek: this.date.getDay(),
            month: this.getMonth(),
            year: this.date.getFullYear()
        };
    };
    SDate.getMonthsOfYear = function () {
        return CalendarParams.month;
    };
    SDate.getMonth = function (month) {
        var dateJson = CalendarParams.month[month];
        return __assign(__assign({}, dateJson), { month: month });
    };
    SDate.getDaysOfWeek = function () {
        return CalendarParams.dayOfWeek;
    };
    SDate.getDayOfWeek = function (dia) {
        var dateJson = CalendarParams.dayOfWeek[dia];
        return __assign(__assign({}, dateJson), { day: dia });
    };
    SDate.isValid = function (fecha) {
        var fechaf = fecha.split("-");
        var ano = fechaf[0];
        var mes = fechaf[1];
        var dia = fechaf[2];
        var anoNum = parseInt(ano, 10);
        var mesNum = parseInt(mes, 10) - 1;
        var diaNum = parseInt(dia, 10);
        if ((anoNum < 1900) || (anoNum > 2100))
            return false;
        var fechaAno = new Date(anoNum, 1, 1); // Para tener el año a 4 dígitos
        var fechaDate = new Date(anoNum, mesNum, diaNum); // Paso a fmt fecha
        return (fechaAno.getFullYear() == fechaDate.getFullYear() &&
            mesNum == fechaDate.getMonth()) ? true : false;
    };
    return SDate;
}());
export default SDate;
