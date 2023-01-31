import React, { Component } from 'react';
import SView from '../SView';

export default class SBuscador extends Component {

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
            var expreg = new RegExp(":.*?" + palabra_a_buscar + ".*?(,|})", "i");
            if (expreg.test(str)) {
                peso++;
                // return data;
            }
        })
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

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView />
        );
    }
}