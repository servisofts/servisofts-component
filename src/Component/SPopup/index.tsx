import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
// import Svg from '../../Svg';
import SPopupComponent from './SPopupComponent';

import Confirm, { PropsType as ConfirmProps } from './SPopupVariants/Confirm/index';
import Alert, { PropsType as AlertProps } from './SPopupVariants/Alert/index';

type SPopupOpenProps = {
    key?: string,
    content: any,
    style?: any,
}

var INSTANCE;

export const SPopupOpen = ({ key, content, style }: SPopupOpenProps) => {
    INSTANCE.open({ key, content, style });
}
export const SPopupClose = (key) => {
    INSTANCE.close(key);
}
export default class SPopup extends Component {

    static confirm(props: ConfirmProps) {
        // alert(obj)
        INSTANCE.open({ key: "confirm", content: <Confirm {...props} />, style: {} });
    }
    static alert(text) {
        // alert(obj)
        INSTANCE.open({ key: "alert", content: <Alert title={text} />, style: {} });
    }
    static open(obj: SPopupOpenProps) {
        var key = obj.key;
        if (!obj.key) key = 'default';
        INSTANCE.open({ key, content: obj.content, style: obj.style });
    }
    static close(key?: string) {
        if (!key) {
            INSTANCE.closeAll();
        }
        INSTANCE.close(key);
    }
    state
    constructor(props) {
        super(props);
        this.state = {
            data: {

            },
            style: {}
        };
        INSTANCE = this;
    }
    componentDidMount() {
        INSTANCE = this;
    }
    open({ key, content, style }) {
        // console.log(key);
        this.state.data[key] = content;
        if (style) {
            this.state.style[key] = style;
        } else {
            this.state.style[key] = {};
        }
        this.setState({ ...this.state });
    }
    closeAll() {
        this.setState({ data: {} });
    }
    close(key) {
        delete this.state.data[key];
        this.setState({ ...this.state });
    }

    getPopups() {
        return Object.keys(this.state.data).map((key) => {
            var obj = this.state.data[key];
            var style = this.state.style[key];
            return <SPopupComponent
                style={style}
                close={() => { this.close(key) }}
            >
                <TouchableWithoutFeedback>
                    {obj}
                </TouchableWithoutFeedback>
            </SPopupComponent>
        })
    }
    render() {
        INSTANCE = this;
        return (
            <>
                {this.getPopups()}
            </>
        );
    }
}
