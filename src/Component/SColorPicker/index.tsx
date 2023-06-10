import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import SHr from '../SHr';
import SText from '../SText';
import ColorBar from './ColorBar';
import BlackToWithe from './BlackToWithe';

type SColorPickerPropsType = {
    defaultValue?: any,
    onChange?: (any) => any;
}
export default class SColorPicker extends Component<SColorPickerPropsType> {
    state; layout; layoutBody;
    constructor(props: any) {
        super(props);
        this.state = {
            color: this.props.defaultValue ?? "#ff0000",
            // color_bar: props.defaultValue ?? "#ff0000",

        }
    }

    render() {
        return <SView col={"xs-12"} padding={4} height {...this.props} >
            <SView flex col={"xs-12"}>
                <SView col={"xs-12"} center row height >
                    <SView col={"xs-3"} height backgroundColor={this.state.color} center>
                        <SText bold>{this.state.color}</SText>
                    </SView>
                    <SView backgroundColor='#fff' col={"xs-9"} height style={{
                        // overflow: "hidden"
                    }}>
                        <BlackToWithe defaultValue={this.props.defaultValue} color={this.state.color_bar} onChange={(e) => {
                            this.setState({ color: e })
                            if (this.props.onChange) this.props.onChange(e)
                        }} />
                    </SView>
                </SView >
            </SView>
            <SHr />
            <ColorBar defaultValue={this.props.defaultValue} onChange={(e) => {
                this.setState({ color_bar: e })
            }} />
        </SView>
    }
}