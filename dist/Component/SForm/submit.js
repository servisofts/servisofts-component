var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from 'react';
var submit = /** @class */ (function (_super) {
    __extends(submit, _super);
    function submit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    submit.http = function (props, url, files, callback) {
        var form = document.createElement("FORM");
        form.setAttribute("method", "POST");
        form.setAttribute("enctype", "multipart/form-data");
        var body = new FormData(form);
        var dataInner = [];
        if (!files) {
            console.log("NO HAY FILES");
            return;
        }
        if (files.length <= 0) {
            return;
        }
        alert(files);
        console.log(files);
        console.log(files.length);
        files.map(function (file) {
            body.append('file', file.file);
            dataInner.push({
                descripcion: file.file.name
            });
        });
        var myInit = {
            method: 'POST',
            body: body,
            mode: 'no-cors'
        };
        props.data = dataInner;
        var data = JSON.stringify(props);
        body.append('data', data);
        // console.log(props);
        var myRequest = new Request(url, myInit);
        fetch(myRequest)
            .then(function (response) {
            if (callback) {
                callback({
                    estado: "exito",
                    data: response.data
                });
            }
        })["catch"](function (error) {
            callback({
                estado: "error",
                error: error
            });
        });
        // })
        // x.click()
    };
    return submit;
}(Component));
export default submit;
