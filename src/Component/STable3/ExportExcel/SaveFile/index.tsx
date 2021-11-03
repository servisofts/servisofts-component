import React, { Component } from 'react'
import xlsx from 'xlsx-color';
export default class SaveFile {
    static saveExel(excel, name) {
        xlsx.writeFile(excel, name+".xlsx");
    }
}
