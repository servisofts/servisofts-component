import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'
import * as Icon2 from '../../img/Icon2/index';
import * as Arrow from '../../img/Arrow/index';

type IconNames = "Icon2" | "Arrow" | "engranaje" | "drag"

type SIconType = {
    name?: IconNames,
    width?: number,
    height?: number,
    fill?: string,
    stroke?: string,
}

export default class SIcon extends Component<SIconType> {
    getIconName(name: IconNames) {
        switch (name) {
            case "Icon2": return Icon2;
            case "Arrow": return Arrow;
            default: return null;
        }
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
        return (<Icon width={"100%"} height={"100%"} {...this.props} />)
    }
}
