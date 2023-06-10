import React, { Component } from 'react';
import { View, Text, NativeScrollEvent, ViewStyle } from 'react-native';
import { SText, SView, STheme, SThread, SSCrollView, SColorPicker } from '../../../../index';
import SPage from '../../../SPage';
// import SBackground from '../../../SBackground';

type typeConfig = {
    defaultValue?: any,
}
type typeProps = {
    style: ViewStyle,
    defaultValue: any,
    onChange: (value: any) => any,
    onClose?: () => any
    // ViewPropTypes,
    // TouchableOpacityProps,
    //callBack:Function,
}
export default class SIColorAlert extends Component<typeProps> {
    sdate
    scroll
    refItens
    state

    static defaultProps = {
        props: {},
        style: {}
    };
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillUnmount() {
        if (this.props.onClose) this.props.onClose();
    }

    render() {
        return <SView
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            center
            withoutFeedback
            style={{
                borderRadius: 8,
                backgroundColor: STheme.color.background,
                overflow: "hidden"
            }
            }>
            {SPage.backgroundComponent}
            {/* <SBackground /> */}
            <SView col={"xs-12"} colSquare padding={8} center>
                <SColorPicker {...this.props} />

            </SView>

        </SView >
    }
}
