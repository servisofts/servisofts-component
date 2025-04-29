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
import Date from './SPopupVariants/Date';
import SPopupComponent2 from './SPopupComponent2';
import SPopupComponent3 from './SPopupComponent3';

type SPopupOpenProps = {
    key?: string,
    content: any,
    style?: any,
    type?: "1" | "2" | "3",
    onClose?: Function,
}

var INSTANCE;

export const SPopupOpen = ({ key, content, style }: SPopupOpenProps) => {
    INSTANCE.open({ key, content, style });
}
export const SPopupClose = (key) => {
    INSTANCE.close(key);
}


const ContainerTypes = {
    "1": SPopupComponent,
    "2": SPopupComponent2,
    "3": SPopupComponent3,
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
    static date(text, onPress) {
        // alert(obj)
        INSTANCE.open({ key: "Date", content: <Date title={text} onPress={onPress} />, style: {} });
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
        INSTANCE.open({ key, content: obj.content, ...obj });
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
        };
        INSTANCE = this;
    }
    componentDidMount() {
        INSTANCE = this;
    }
    open({ key, content, style = {}, type = "1", onClose }: SPopupOpenProps) {
        // console.log(key);
        this.state.data[key] = {
            content: content,
            style: style,
            type: type,
            onClose: onClose
        };
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
            const { style, content, type = "1" } = obj;
            const CONTAINER = ContainerTypes[type];
            // var style = this.state.style[key];
            return <CONTAINER
                key={key}
                {...obj}
                close={() => { this.close(key) }}
            >
                {/* <TouchableWithoutFeedback> */}
                {content}
                {/* </TouchableWithoutFeedback> */}
            </CONTAINER>
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
