import React, { Component } from 'react';
import { SPage, SText } from '../../index';

const TEXT = {
    title: {
        en: "Servisofts Component",
        es: "Servisofts Component",
    },
    body: {
        en: "Servisofts Component is a library for Android, IOS & web for easing app development in react-native-web.",
        es: "Servisofts Component es una libreria para Android, IOS & web para facilitar el desarrollo de aplicaciones en react-native-web.",
    }
}


export default class Docs extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            len: "es"
        };
    }

    render() {
        return (
            <SPage title={'Documentacion'}>

                <SText>{TEXT.title[this.state.len]}</SText>
                <SText>{TEXT.body[this.state.len]}</SText>
                

            </SPage>
        );
    }
}
