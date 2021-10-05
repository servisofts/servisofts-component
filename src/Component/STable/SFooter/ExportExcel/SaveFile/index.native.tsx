import React, { Component } from 'react'
import { Platform } from 'react-native';
import FileViewer from 'react-native-file-viewer';
import xlsx from 'xlsx-color';

var RNFS = require('react-native-fs');

export default class SaveFile {
    static saveExel = async (excel, name) => {
        const fileFInal = xlsx.write(excel, { bookType: 'xlsx', type: 'binary' });
        var pathDirectori = "";
        if (Platform.OS == "android") {
            // pathDirectori = RNFS.ExternalDirectoryPath;
            pathDirectori = RNFS.DownloadDirectoryPath;
        } else {
            pathDirectori = RNFS.DocumentDirectoryPath;
        }
        var path = pathDirectori + '/Download';
        await RNFS.mkdir(path, {}).catch((err) => {
            console.log(err)
        })
        var finalpath = path + '/' + name + '.xlsx';
        RNFS.writeFile(finalpath, fileFInal, 'ascii').then((r) => {
            console.log('Success');
            FileViewer.open(finalpath, { showOpenWithDialog: true })
                .then(() => {
                    // success
                })
                .catch(error => {
                    // error
                });
        }).catch((e) => {
            console.log('Error', e);
        });
    }
}
