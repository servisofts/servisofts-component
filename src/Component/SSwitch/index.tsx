import React, { Component } from 'react'
import SView from '../SView';
import STheme from '../STheme';
import SLoad from '../SLoad';

export type SSwitchPropsType = {
    size?: any,
    defaultValue?: any,
    onChange?: (e: any) => any,
    loading?: any,
    value?: any,
    color?: any
}
export default class SSwitch extends Component<SSwitchPropsType> {
    state;
    constructor(props) {
        super(props);
        this.state = { value: this.props.defaultValue }
    }
    setValue(val) {
        if (this.props.loading) return;
        if (this.props.onChange) {
            this.props.onChange(val);
        }
        this.setState({ value: val })

    }
    switch() {
        if (this.props.value) {
            this.state.value = this.props.value
        } else if (this.props.value === false) {
            this.state.value = this.props.value
        }
        let size = this.props.size ?? 20
        let width = size * 2;
        return <SView center width={width} height={size} onPress={() => {
            this.setValue(!this.state.value)
        }}>
            <SView col={"xs-12"} height={size / 1.5} style={{
                borderRadius: 100,
                borderWidth: 2,
                borderColor: !this.state.value ? STheme.color.card : STheme.color.success,
                backgroundColor: !this.state.value ? STheme.color.card : STheme.color.success
            }}>
            </SView>
            <SView style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: 100,
                backgroundColor: this.props.color ?? STheme.color.text,
                ...(!this.state.value ? { left: 0 } : { right: 0 })
            }} center>
                {this.props.loading ? <SLoad color={STheme.color.primary} /> : null}
            </SView>
            {/* <SText>{type}</SText> */}
        </SView>
    }
    render() {
        return this.switch();
    }
}