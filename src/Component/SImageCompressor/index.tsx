import { SImageCompressorPropsType } from "./types";

export default class SImageCompressor {
    static compress(props: SImageCompressorPropsType) {
        return new Promise((resolve, reject) => {
            
            const reader = new FileReader();
            reader.readAsDataURL(props.file);
            reader.onload = (event) => {
                
                let newWidth = props.maxWidth;


                let image, oldWidth, oldHeight, newHeight, canvas, ctx, newDataUrl;
                let imageType = props.file.type;
                let imageArguments = props.quality;
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
                
                
                let ___ = fetch(newDataUrl).then(function (res) {
                    return res.arrayBuffer();
                }).then(function (buf) {
                    return new File([buf], props.file.name, {type: imageType});
                });
            
        
                resolve(___);
            };
            reader.onerror = error => reject(error);


        });

        
    }

    

}