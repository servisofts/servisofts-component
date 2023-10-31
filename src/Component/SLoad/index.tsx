import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import STheme from '../STheme';
import SView from '../SView';
import { SLoadPropsType } from './type';
import _type from "./type"
import { SUuid } from '../SUuid';
import SLoadContainer from './SLoadContainer';
export default class SLoad extends Component<SLoadPropsType> {
    props: SLoadPropsType;

    static defaultProps: SLoadPropsType = {
        type: "circle",
    }
    key;
    color;
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = this.props.key ?? SUuid()
        this.color = STheme.color.text ? STheme.color.text : STheme.color.secondary;
    }

    componentWillUnmount(): void {
        SLoadContainer.remove(this.props.key);
    }
    render() {
        var type = this.props.type;
        if (!type) type = "circle"
        const Comp: any = _type[type]
        const ITEM = <Comp key={this.key} {...this.props} color={this.props.color??this.color} />;
        if (Comp.renderGlobal) {
            Comp.renderGlobal(ITEM)
            return null;
        }
        return ITEM;
    }
}