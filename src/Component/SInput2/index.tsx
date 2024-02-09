import { TextInput, View, } from 'react-native'
import React, { Component } from 'react'
import { SInput2PropsType } from './type'
import InputTypes from "./types/index"
import SInput2TypeAbstract from './SInput2TypeAbstract';
import { Switch } from 'react-native';
export default class SInput2 extends Component<SInput2PropsType> {

    state: {
        layout: { x: any, y: any, width: any, height: any, left: any, top: any },
        value: any
    };
    props: SInput2PropsType
    constructor(props: SInput2PropsType) {
        super(props);
        this.state = {
            layout: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            },
            value: this.props.value ?? this.props.defaultValue
        }
    }

    getValue() {
        return this.state.value;
    }

    handleChange(val) {
        console.log(val)
        this.setState({ value: val })
    }
    render() {
        let ELM: any = InputTypes[this.props.type];
        if (!ELM) ELM = InputTypes["text"];
        return <ELM {...this.props} />


    }
}
/*
 
        let styleObject: any = this.props.style;
        if (Array.isArray(this.props.style)) {
            styleObject = this.props.style.reduce((result: any, currentObject: any) => {
                return { ...result, ...currentObject };
            }, {});
        }
        return <TextInput {...this.props} style={[{
            padding: 0,
            margin: 0,
            width: "100%",
        }, this?.props?.style]}
            value={this.state.value}
            onChangeText={(val) => {
                this.setState({ value: val })
            }}
            onFocus={() => {
                console.log("focus")
            }}
        />
        return <Switch

            // trackColor={{ false: "#767577", true: "#DAA520" }}
            // thumbColor={this.state.value ? "#DAA520" : "#f4f3f4"}
            onValueChange={this.handleChange.bind(this)}
            // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            value={this.state.value}
        />
        return <Picker
            // mode='dropdown'
            // selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        return <TextInput {...this.props} style={[{
            padding: 0,
            margin: 0,
            width: "100%",
        }, this?.props?.style]}
            value={this.state.value}
            onChangeText={(val) => {
                this.setState({ value: val })
            }}
            onFocus={() => {
                console.log("focus")
            }}
        />
 */