import xlsx from 'xlsx-color';
import sheet from './sheet';
export default {
    create: function (props) {
        var book = xlsx.utils.book_new();
        var ws = sheet.create(props);
        xlsx.utils.book_append_sheet(book, ws, "Hoja 1");
        // xlsx.utils.sheet_to_html(sheet1)
        // var win = window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top=" + (screen.height - 400) + ",left=" + (screen.width - 840));
        // win.document.body.innerHTML = xlsx.utils.sheet_to_html(sheet1)
        return book;
    }
};
// Other functions
export var toLetters = function (num) {
    var mod = num % 26, pow = num / 26 | 0, out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
    return pow ? toLetters(pow) + out : out;
};
