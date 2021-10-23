import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class submit extends Component {
    static http(props, url, files, callback) {
        var form: any = document.createElement("FORM");
        form.setAttribute("method", "POST");
        form.setAttribute("enctype", "multipart/form-data");

        var body = new FormData(form);

        var dataInner = [];
        files.map((file: any) => {
            body.append('file', file.file);
            dataInner.push({
                descripcion: file.file.name
            });
        })
        var myInit: any = {
            method: 'POST',
            body: body,
            mode: 'no-cors',
        };

        props.data = dataInner;

        var data: any = JSON.stringify(props);
        body.append('data', data);
        // console.log(props);

        var myRequest = new Request(url + "multipart", myInit);
        fetch(myRequest)
            .then(function (response: any) {
                if (callback) {
                    callback({
                        estado: "exito",
                        data: response.data
                    });
                }
            }).catch(error => {
                callback({
                    estado: "error",
                    error: error
                });
            })
        // })
        // x.click()
    }
}
