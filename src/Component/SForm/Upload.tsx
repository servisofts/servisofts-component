import SImageCompressor from "../SImageCompressor";

export default class Upload {
    static send(file, url) {
        if (!file) return;
        console.log(file.file);

        var body = new FormData();
        body.append('file', file.file);
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.send(body);
        console.log("Se envio la data")
    }
    static sendPromise({ file }, url) {
        return new Promise(async (resolve, reject) => {
            if (!file) reject("file not found");
            if (!file.type) reject("file.type not found");
            if (file.type == "image/gif") {
                file = file;
            } else if (file.type.startsWith("image")) {
                file = await SImageCompressor.compress({ file: file, maxWidth: 1024, quality: 0.8 })
            }
            var body = new FormData();
            body.append('file', file);
            var request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(request.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: request.statusText,
                        in: "onload"
                    });
                }
            };
            request.onerror = function () {
                reject({
                    status: this.status,
                    statusText: request.statusText,
                    in: "onerror"
                });
            };

            request.send(body);

            // resolve("exito")

        })

    }

}
