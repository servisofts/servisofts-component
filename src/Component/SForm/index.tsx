import React, { Component } from 'react';
import { View, Text, ViewStyle } from 'react-native';
// import { SButtom, typeConfig } from '../SButtom';
import { SInput, TypeInputProps } from '../SInput/index';
import SView, { SViewProps } from '../SView/index';
// import { Col, TypeCol } from '../SView/cols';
import { SButtom, onSubmitProps } from '../SButtom/index';



interface InputsTp {
    [index: string]: TypeInputProps;
}
export type SFromProps = {
    style: ViewStyle,
    props: SViewProps,
    inputProps: TypeInputProps,
    inputs: InputsTp,
    onSubmit: Function,
    onSubmitName: String,
    onSubmitProps: onSubmitProps,
}
export default class SForm extends Component<SFromProps> {

    static defaultProps = {
        props: {

        },
        onSubmitName: "Registro"
    }
    _ref;
    constructor(props) {
        super(props);
        this.state = {
        };
        this._ref = {};
    }
    getButtom() {
        if (!this.props.onSubmit) return <View />
        if (!this.props.onSubmitName) return <View />
        return <SButtom
            props={{
                type: "danger",
                // col: "xs-12 md-6",
                ...this.props.onSubmitProps,
                // customStyle: "primary",
            }} onPress={() => {
                var data = {};
                var isValid = true;
                Object.keys(this._ref).map((key) => {
                    var input: SInput = this._ref[key];
                    if (!input.verify()) {
                        isValid = false;
                    }
                    data[key] = input.getValue();
                })
                if (isValid) {
                    this.props.onSubmit(data);
                }
            }}>
            {this.props.onSubmitName}
        </SButtom>
    }
    getInputs() {
        if (!this.props.inputs) {
            return <View />
        }

        return Object.keys(this.props.inputs).map((key) => {
            var inputProps = this.props.inputs[key];
            return <SInput
                ref={(ref) => { this._ref[key] = ref }}
                placeholder={inputProps.label}
                {...inputProps}
                props={{
                    ...this.props.inputProps,
                    ...inputProps
                }}
                //defaultValue={(inputProps.defaultValue) ? inputProps.defaultValue : ""}
                defaultValue={inputProps.defaultValue}
            />
        })
    }

    render() {
        return (
            <SView {...this.props.props}>
                {this.getInputs()}
                <SView style={{
                    height: 14,
                }}></SView>
                {this.getButtom()}
            </SView>
        );
    }
}
