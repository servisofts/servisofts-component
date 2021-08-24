import React, { Component } from 'react';
import SIcon from '../../Component/SIcon';
import LocalImg, { IconsVariant } from "../../img/index";
import { SView, SText, STheme, SPage, SNavigation, } from '../../index';
export default class SIconPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getIcon(name) {
        return <SView col={"xs-4 sm-3 md-2 lg-1.5"} colSquare center>
            <SView col={"xs-8"} colSquare center>
                <SIcon name={name} />
            </SView>
            <SText fontSize={10} center>{name}</SText>
        </SView>
    }
    getIcons() {
        var obj = {
            ...LocalImg,
            ...IconsVariant
        }
        return Object.keys(obj).map(name => this.getIcon(name));
    }
    render() {
        return (
            <SPage
                title="SIcon"
            >
                <SView col={"xs-12"} row>
                    {this.getIcons()}
                </SView>
            </SPage>
        );
    }
}
