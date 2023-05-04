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
        type: "circle"
    }
    key;
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = this.props.key ?? SUuid()
    }

    componentWillUnmount(): void {
        SLoadContainer.remove(this.props.key);
    }
    render() {
        var type = this.props.type;
        if (!type) type = "circle"
        const Comp: any = _type[type]
        const ITEM = <Comp key={this.key} {...this.props} />;
        if (Comp.renderGlobal) {
            Comp.renderGlobal(ITEM)
            return null;
        }
        return ITEM;
    }
}