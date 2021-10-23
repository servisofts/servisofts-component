import React, { Component } from 'react';
import SIcon from '../../Component/SIcon';
import LocalImg, { IconsVariant } from "../../img/index";
import { SView, SText, STheme, SPage, SNavigation, SInput, SButtom, } from '../../index';
import { SvgXml } from 'react-native-svg';
const test = ``

export default class SvgToReact extends Component {
    state;
    input;
    constructor(props) {
        super(props);
        this.state = {
            result: "",
        };
    }
    getClases = (variant) => {
        var clases = {};
        var myRegexp = /(.*?){(.*?)}/g
        var match = myRegexp.exec(variant);
        while (match != null) {
            var clase = match[1].replace(/\s/g, '');
            var value = match[2].replace(/\s/g, '');
            value = value.replace(/:(.*?);/g, '="$&"');
            value = value.replace(/:/g, '');
            value = value.replace(/;/g, '');
            clases[clase] = value;
            match = myRegexp.exec(variant);
        }
        return clases;
    }
    transformarTexto = (texto) => {
        // texto = texto.replace(/\s/g, '');
        var myString = texto.replace(/\n/g, '');
        var result = myString;

        var defs = result.match(/<defs>(.*?)<\/defs>/g);
        try {
            var styles = /<style>(.*?)<\/style>/g.exec(result)[1];
            var clases = this.getClases(styles);
            Object.keys(clases).map((key) => {
                var value = clases[key];
                result = result.replace(new RegExp(`class=${key}"`, 'g'), `${value}`);
            })
        } catch (e) {

        }
        result = result.replace(/<defs>(.*?)<\/defs>/g, '');
        var title = result.match(/<title>(.*?)<\/title>/g);
        result = result.replace(/<title>(.*?)<\/title>/g, '');
        result = result.replace(/<g.*?>/g, "");
        result = result.replace(/<\/g.*?>/g, "");
        result = result.replace(/>/g, '>\n');
        result = result.replace(/svg/g, 'Svg');
        result = result.replace(/path/g, 'Path');
        result = result.replace(/circle/g, 'Circle');
        result = result.replace(/rect/g, 'Rect');
        result = result.replace(/xmlns=".*?"/g, '{...props}');



        var finalPage = `
import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    ${result}
)
const Native = Web;
export default { Native, Web }`;
        finalPage += `\n`;

        this.setState({ result: finalPage});
    }
    render() {
        return (
            <SPage
                title="SvgToReact"
            >
                <SView col={"xs-12"} center >
                    <SView col={"xs-10 md-8 xl-6"}>
                        <SInput
                            ref={(input) => { this.input = input; }}
                            props={{
                                label: "Ingresa el svg",
                                customStyle: "calistenia",
                            }}
                            defaultValue={test}
                            style={{
                                height: 200,
                                backgroundColor: "#99999966",
                            }}
                            multiline={true}
                        />
                    </SView>
                    <SView col={"xs-10 md-8 xl-6"} center height={60}>
                        <SButtom props={{
                            type: "danger",
                        }}
                            onPress={() => {
                                this.transformarTexto(this.input.getValue());
                            }}
                        >GENERAR</SButtom>
                    </SView>
                    <SView col={"xs-10 md-8 xl-6"}>
                        <SInput props={{
                            label: "Resultado",
                            customStyle: "calistenia",
                        }}
                            value={this.state.result}
                            style={{
                                height: 400,
                                backgroundColor: "#99999966",
                            }}
                            multiline={true}
                        />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
