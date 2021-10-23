import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'
import { SAssets } from '../../Types';
import STheme from '../STheme';
import LocalImg, { IconNames, IconsVariant } from '../../img/index'
import SView from '../SView';

type SIconType = {
    name?: IconNames,
    width?: number | string,
    height?: number | string,
    fill?: string,
    stroke?: string,
    opacity?: number | string,
    style?: any,
    bgr?: string
}

export default class SIcon extends Component<SIconType> {
    static Assets = {};
    static loadAssets(assets: SAssets) {
        if (assets.svg) {
            this.Assets = assets.svg;
        }
    }
    getIconName(_name) {
        var name = _name.split("_")[0];
        var icon = LocalImg[name]
        if (icon) {
            return icon;
        }
        if (!SIcon.Assets) return null;
        return SIcon.Assets[name]
    }
    getIconProps(name) {
        var variant = IconsVariant[name];
        if (!variant) return {};
        return variant;
    }
    render() {
        var Select = this.getIconName(this.props.name);
        if (!Select) return null;
        var Icon = null;
        if (Platform.OS == 'web') {
            Icon = Select.Web;
        } else {
            Icon = Select.Native;
        }
        if (!Icon) {
            return <View />
        }
        var ICON = (<Icon width={"100%"} height={"100%"} fill={"#000"} {...this.getIconProps(this.props.name)}  {...this.props} />)
        if (this.props.bgr) {
            ICON = (<SView center>
                <SIcon name={"Box"} fill={this.props.bgr} />
                <SView style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    padding: "10%",
                }} center>
                    {ICON}
                </SView>
            </SView>)
        }
        return ICON;
    }
}
