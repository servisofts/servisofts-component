import React, { Component } from 'react';
import SView from '../SView';

export default class SBuscador extends Component {

    static buscarObj(data, buscador) {
        return data;
    }
    static validate(data, buscador) {
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