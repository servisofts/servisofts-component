import React, { Component } from 'react';
import SView from '../SView';
import SBuscadorInput from './SBuscadorInput';
import { SBuscadorPropsType } from './type';

export default class SBuscador extends Component<SBuscadorPropsType> {

    static buscarObj(data, buscador) {
        return data;
    }

    static validate(data, buscador) {
        if (!buscador) return data;
        var val = buscador.toLowerCase();
        val = val.trim();
        var str = JSON.stringify(data).toLowerCase();

        var arr_busqueda = val.split(" ");

        var peso = 0;
        arr_busqueda.map((palabra_a_buscar) => {
            palabra_a_buscar = palabra_a_buscar.replace("-","\\-")
            palabra_a_buscar = palabra_a_buscar.replace("'","\\'")
            palabra_a_buscar = palabra_a_buscar.replace("\"","\\\"")
            var expreg = new RegExp(":.*?" + palabra_a_buscar + ".*?(,|})", "i");
            if (expreg.test(str)) {
                if (palabra_a_buscar + "".length < 2) {
                    return;
                }
                peso++;
                // return data;
            }
        })
        if (peso < arr_busqueda.length) return null;
        if (!peso) return null;
        data.peso = peso;
        return data;
    }
    // No tocar la version antigua
    static validate_old(data, buscador) {
        if (!buscador) return data;
        var val = buscador.toLowerCase();
        var str = JSON.stringify(data).toLowerCase();
        var expreg = new RegExp(":.*?" + val + ".*?(,|})", "i");
        if (expreg.test(str)) {
            return data;
        }
        return null;
    }

    static filter({ data, txt }) {
        if (typeof data === 'object' && !Array.isArray(data)) {
            // Filtramos tipo objeto
            var objFinal = {};
            Object.keys(data).map((key) => {
                if (!this.validate(data[key], txt)) return;
                objFinal[key] = data[key]
            })

            return objFinal;
        } else if (Array.isArray(data)) {
            // Filtramos tipo array
            return data.filter(a => this.validate(a, txt))
        }
        return data;
    }
    props: SBuscadorPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (<SBuscadorInput  {...this.props} />);
    }
}