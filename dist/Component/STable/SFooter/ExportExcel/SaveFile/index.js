import xlsx from 'xlsx-color';
var SaveFile = /** @class */ (function () {
    function SaveFile() {
    }
    SaveFile.saveExel = function (excel, name) {
        xlsx.writeFile(excel, name + ".xlsx");
    };
    return SaveFile;
}());
export default SaveFile;
