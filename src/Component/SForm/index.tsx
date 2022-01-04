import React, { Component } from 'react';
import { View, Text, ViewStyle } from 'react-native';
// import { SButtom, typeConfig } from '../SButtom';
import { SInput, TypeInputProps } from '../SInput/index';
import SView, { SViewProps } from '../SView/index';
// import { Col, TypeCol } from '../SView/cols';
import { SButtom, onSubmitProps } from '../SButtom/index';
import Submit from './submit'
import Upload from './Upload';


interface InputsTp {
    [index: string]: TypeInputProps;
}
export type SFromProps = {
    style?: ViewStyle,
    props?: SViewProps,
    inputProps?: TypeInputProps,
    inputs: InputsTp,
    onSubmit?: Function,
    onSubmitName?: String,
    onSubmitProps?: onSubmitProps,
} & SViewProps
export default class SForm extends Component<SFromProps> {

    static defaultProps = {
        props: {

        },
    }
    _ref;
    state;
    constructor(props) {
        super(props);
        this.state = {
            files: {},
        };
        this._ref = {};
    }
    verify() {
        var isValid = true;
        Object.keys(this._ref).map((key) => {
            var input: SInput = this._ref[key];
            if (!input.verify()) {
                isValid = false;
            }
        })
        return isValid;
    }
    focus(key) {
        if (this._ref[key]) {
            this._ref[key].focus();
        }
    }
    getFiles() {
        if (!this.state.files) this.state.files = {};
        Object.keys(this._ref).map((key) => {
            var input: SInput = this._ref[key];
            if (input.getType() == "file") {
                this.state.files[key] = input.getValue();
                return;
            }
            if (input.getType() == "image") {
                this.state.files[key] = input.getValue();
                return;
            }
        })
        return this.state.files;
    }
    uploadFiles(url) {
        var files = this.getFiles();
        Object.keys(files).map((key) => {
            var obj = files[key];
            if (obj) {
                if (typeof obj != "string") {
                    Upload.send(obj, url);
                }
            }

        })
    }
    submitFiles(data, key, url) {
        this.getFiles();
        if (!this.state.files[key]) {
            return;
        }
        if (typeof this.state.files[key] === 'string') {
            return;
        }
        console.log(this.state.files[key]);

        Submit.http(data, url, this.state.files[key], (res) => {

        });
    }
    submit() {
        var data = {};
        var isValid = true;
        Object.keys(this._ref).map((key) => {
            var input: SInput = this._ref[key];
            if (!input.verify()) {
                isValid = false;
            }
            if (input.getType() == "file") {
                this.state.files[key] = input.getValue();
                return;
            }
            if (input.getType() == "image") {
                this.state.files[key] = input.getValue();
                return;
            }
            data[key] = input.getValue();
        })
        if (isValid) {
            if (this.props.onSubmit) {
                this.props.onSubmit(data);
            }
            return data;
        }
        return null;
    }
    getButtom() {
        // if (!this.props.onSubmit) return <View />
        if (!this.props.onSubmitName) return <View />
        return <SButtom
            props={{
                type: "danger",
                // col: "xs-12 md-6",
                ...this.props.onSubmitProps,
                // customStyle: "primary",
            }} onPress={() => {
                this.submit()
            }}>
            {this.props.onSubmitName}
        </SButtom>
    }
    getInputs() {
        if (!this.props.inputs) {
            return <View />
        }

        var readyFocus = false;
        return Object.keys(this.props.inputs).map((key) => {
            var inputProps = this.props.inputs[key];
            var focus = false;
            if (
                inputProps.type != "file"
                && inputProps.type != "image"
                && !readyFocus
            ) {
                focus = true;
                readyFocus = true;
            }
            return <SInput
                autoFocus={focus}
                ref={(ref) => { this._ref[key] = ref }}
                placeholder={inputProps.label}
                {...this.props.inputProps}
                {...inputProps}
                defaultValue={inputProps.defaultValue}
            />
        })
    }

    render() {
        return (
            <SView
                col="xs-12"
                {...this.props}
                {...this.props.props}
            >
                {this.getInputs()}
                <SView col={"xs-12"} style={{
                    height: 14,
                }}></SView>
                <SView col={"xs-12"} center>
                    {this.getButtom()}
                </SView>
            </SView>
        );
    }
}
