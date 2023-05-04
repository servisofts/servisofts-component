var SImageCompressor = /** @class */ (function () {
    function SImageCompressor() {
    }
    SImageCompressor.compress = function (props) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(props.file);
            reader.onload = function (event) {
                var newWidth = props.maxWidth;
                var image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;
                var imageType = props.file.type;
                var imageArguments = props.quality;
                image = new Image();
                image.src = event.target.result;
                oldWidth = image.width;
                oldHeight = image.height;
                newHeight = Math.floor(oldHeight / oldWidth * newWidth);
                canvas = document.createElement("canvas");
                canvas.width = newWidth;
                canvas.height = newHeight;
                ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, newWidth, newHeight);
                newDataUrl = canvas.toDataURL(imageType, imageArguments);
                var ___ = fetch(newDataUrl).then(function (res) {
                    return res.arrayBuffer();
                }).then(function (buf) {
                    return new File([buf], props.file.name, { type: imageType });
                });
                resolve(___);
            };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    return SImageCompressor;
}());
export default SImageCompressor;
