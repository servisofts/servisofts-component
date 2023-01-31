import React, { Component } from 'react';
import { View, Text, ViewStyle } from 'react-native';
// import { SButtom, typeConfig } from '../SButtom';
import { SInput, TypeInputProps } from '../SInput/index';
import SView, { SViewProps } from '../SView/index';
// import { Col, TypeCol } from '../SView/cols';
import { SButtom, onSubmitProps, typeProps as ButtomType } from '../SButtom/index';
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
    onSubmitProps?: ButtomType,
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
    clear() {
        var isValid = true;
        Object.keys(this._ref).map((key) => {
            var input: SInput = this._ref[key];
            input.setValue("");
        })
        return this;
    }
    setValues(obj) {
        Object.keys(obj).map((key) => {
            var input: SInput = this._ref[key];
            input.setValue(obj[key]);
        })
    }
    getValues() {
        var obj = {};
        Object.keys(this._ref).map((key) => {
            var input: SInput = this._ref[key];
            obj[key] = input.getValue();
        })
        return obj;
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
            if (!input) return null;
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

    uploadFiles(url, key) {
        var files = this.getFiles();

        Object.keys(files).map((key2) => {
            if (key) {
                if (key != key2) return;
            }
            var obj = files[key2];
            if (obj) {
                if (typeof obj != "string") {
                    Upload.send(obj[0], url);
                }
            }

        })
    }
    uploadFiles2(url) {
        var files = this.getFiles();
        var _refs = this._ref;
        Object.keys(_refs).map((key) => {
            var input: SInput = _refs[key];
            if (!input) return;
            if (input.getType() == "file" || input.getType() == "image" || input.getType() == "files") {
                var files = input.getValue();

                if (!files) return;
                this.state.files[key] = files;
                Object.values(files).map((obj: any) => {
                    if (typeof obj != "string") {
                        if (obj.file) {
                            var name = obj?.file?.name;
                            Upload.send(obj, url + "/" + key + "/" + name);
                        }

                    }
                })
                return;
            }

        })
    }
    uploadFile(file, url) {
        if (file) {
            if (typeof file != "string") {
                Upload.send(file[0], url);
            }
        }
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
            if (input.getType() == "files") {
                var files = input.getValue();
                if (typeof files == "string") {
                    files = JSON.parse(files);
                }
                if (!files) return;
                if (files.length > 0) {
                    this.state.files[key] = files;
                    data[key] = files.map((obj: any) => {
                        if (typeof obj == "string") {
                            return obj;
                        }
                        if (obj.file) {
                            return obj?.file?.name;
                        } else {
                            return obj.name;
                        }
                    })
                } else {
                    data[key] = [];
                }
                return;
            }
            if (input.getType() == "file") {
                var files = input.getValue();
                if (!files) return;
                if (typeof files == "string") {
                    data[key] = files;
                } else {
                    if (!files) return;
                    if (files.length > 0) {
                        var file = files[0];
                        if (file.file) {
                            this.state.files[key] = file
                            data[key] = file.file.name
                        } else {
                            data[key] = file.name;
                        }

                    }
                }
                return;
            }
            if (input.getType() == "image") {
                var files = input.getValue();
                if (!files) return;
                if (typeof files == "string") {
                    data[key] = files;
                } else {
                    if (!files) return;
                    if (files.length > 0) {
                        var file = files[0];
                        if (file.file) {
                            this.state.files[key] = file
                            data[key] = file.file.name
                        } else {
                            data[key] = file.name;
                        }

                    }
                }
                return;
            }
            data[key] = input.getValue();
        })
        if (isValid) {
            if (this.props.onSubmit) {
                this.props.onSubmit(data, this);
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
                key={"imput_" + key}
                // autoFocus={focus}
                name={key}
                placeholder={inputProps.label}
                {...this.props.inputProps}
                {...inputProps}
                defaultValue={inputProps.defaultValue}
                ref={(ref) => {
                    this._ref[key] = ref
                }}

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
