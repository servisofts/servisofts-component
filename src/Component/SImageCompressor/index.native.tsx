import { SImageCompressorPropsType } from "./types";
import { Image } from 'react-native-compressor';
import RNFS from 'react-native-fs';

const uriToFile = async (uri, props) => {
    return new Promise(async (resolve, reject) => {
        let ___ = fetch(uri).then(function (res) {
            return res.arrayBuffer();
        }).then(function (buf) {
            return new File([buf], props.file.name, { type: props.file.type });
        });
        resolve(___);
    })

};
export default class SImageCompressor {
    static compress(props: SImageCompressorPropsType) {

        return new Promise((resolve, reject) => {
            console.log("Comprimientod", props)
            Image.compress(props.file.uri, {
                maxWidth: props.maxWidth,
                quality: props.quality,
            }).then(async (resp) => {
                console.log("Comprimido", resp)
                // const imageArrayBuffer = await RNFS.readFile(resp.uri, 'base64');
                console.log(props.file)
                resolve({
                    ...props.file,
                    uri: resp,

                    // arrayBuffer: imageArrayBuffer,
                })
                // uriToFile(resp, props).then((resp2) => {
                //     console.log(resp2);
                //     resolve(resp2);
                // }).catch((e) => {
                //     console.log(e);
                //     reject(e);
                // })
            }).catch(e => {
                console.log(e);
                reject(e);
            })
        });
    }
}