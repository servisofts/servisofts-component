import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, ScrollView } from 'react-native';
// import Svg from '../../Svg';
import SPopupComponent from './SPopupComponent';

import Confirm, { PropsType as ConfirmProps } from './SPopupVariants/Confirm/index';
import Alert, { PropsType as AlertProps } from './SPopupVariants/Alert/index';
import DateBetween, { PropsType as DateBetweenProps } from './SPopupVariants/DateBetween/index';
import Info from './SPopupVariants/Info';
import Form from './SPopupVariants/Form';
import Container, { PopupContainerPropsType } from './SPopupVariants/Container';

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
    static info(text) {
        // alert(obj)
        INSTANCE.open({ key: "alert", content: <Info title={text} />, style: {} });
    }
    static dateBetween(text, onPress) {
        // alert(obj)
        INSTANCE.open({ key: "dateBetween", content: <DateBetween title={text} onPress={onPress} />, style: {} });
    }
    // static form() {
    //     INSTANCE.open({ key: "dateBetween", content: <Form />, style: {} });
    // }
    static openContainer(props: { key, render, props?: PopupContainerPropsType }) {
        let key = props.key ?? "popupContainer";
        INSTANCE.open({
            key: key, content: <Container {...props.props ?? {}}>
                {props.render({
                    key: key,
                    close: () => INSTANCE.close(key),
                })}
            </Container>
        });
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
                key={key}
                style={{
                    ...style
                }}
                close={() => { this.close(key) }}
            >
                {/* <TouchableWithoutFeedback> */}
                {obj}
                {/* </TouchableWithoutFeedback> */}
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
