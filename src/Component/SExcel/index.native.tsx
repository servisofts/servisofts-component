import React, { Component } from 'react';
import { SNotification, SText, STheme, SView } from '../../index';
import { SExcelPropsType } from './types';
import Item from "./Item"
import xlsx from 'xlsx-color';
import SExcelFunc from "./func"

import { Platform } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import Share from 'react-native-share';
var RNFS = require('react-native-fs');

const saveExel = async (excel, name) => {
    const fileFInal = xlsx.write(excel, { bookType: 'xlsx', type: 'binary' });
    var pathDirectori = "";
    if (Platform.OS == "android") {
        // pathDirectori = RNFS.;
        // pathDirectori = RNFS.DownloadDirectoryPath;
        pathDirectori = RNFS.DocumentDirectoryPath;
    } else {
        pathDirectori = RNFS.DocumentDirectoryPath;
    }
    var path = pathDirectori;
    // await RNFS.mkdir(path, {}).catch((err) => {
    //     console.log(err)
    // })
    var finalpath = path + '/' + name + '.xlsx';
    console.log("GUARDANDO EN LA RUTA ", finalpath);

    RNFS.writeFile(finalpath, fileFInal, 'ascii').then((r) => {
        console.log("GUARDANDO CON EXITO EN LA RUTA ", finalpath);
        // RNFS.readFile(finalpath, "base64").then(b64 => {
        //     console.log(b64);
        // Share.share({
        //     message: `file://${finalpath}`,
        //     title: `file://${finalpath}`,
        //     url: `file://${finalpath}`,
        //     // type: 'audio/mp3',
        // }).then(e => {
        //     console.log("Share", e)
        // })
        // })
        console.log("ABRIENDO RUTA ", finalpath);
        Share.open({
            title:"Compartir archivo",
            url: "file://" + finalpath,
            type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        })
        // FileViewer.open(finalpath, {})
        //     .then((e) => {
        //         // console.log("EXITO ABRIENDO  ", finalpath);
        //         console.log("ERROR ABRIENDO  ", finalpath, e);
        //         // success
        //     })
        //     .catch(error => {
        //         SNotification.send({
        //             title: "Error abriendo archivo.",
        //             body: error.message,
        //             color: STheme.color.danger,
        //             time: 10000,
        //         })
        //         console.log("ERROR ABRIENDO  ", finalpath, error);
        //         // error
        //     });
    }).catch((error) => {
        SNotification.send({
            title: "Error guardando archivo.",
            body: error.message,
            color: STheme.color.danger,
            time: 10000,
        })
        console.log("ERROR AL GUARDAR EN LA RUTA ", finalpath);
    });
}
export default class SExcel extends Component<SExcelPropsType> {
    static create = SExcelFunc.create;
    static createAndSave = (props: SExcelPropsType) => {
        if (!props.data) {
            console.error("SExcel No hay data")
            return null;
        }
        var sheet = SExcelFunc.create(props);
        saveExel(sheet, props.name);
        // xlsx.writeFile(sheet, props.name + ".xlsx");
    }

    props: SExcelPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    saveFile({ sheet }) {
        console.log("Aqui ya no llegue")
        // xlsx.writeFile(sheet, this.props.name + ".xlsx");
    }
    render() {
        return <Item {...this.props} onPress={(sheet) => {
            this.saveFile({ sheet })
        }} />
    }
}

