var Upload = /** @class */ (function () {
    function Upload() {
    }
    Upload.send = function (files, url) {
        if (!files)
            return;
        if (files.length <= 0)
            return;
        // var form: any = document.createElement("FORM");
        // form.setAttribute("method", "POST");
        // form.setAttribute("enctype", "multipart/form-data");
        var body = new FormData();
        files.map(function (file) {
            body.append('file', file.file);
        });
        var request = new XMLHttpRequest();
        // request.upload.addEventListener("progress", function (e) {
        //     console.log(e);
        // });        
        request.open('POST', url, true);
        // request.withCredentials = true;
        request.send(body);
    };
    return Upload;
}());
export default Upload;
