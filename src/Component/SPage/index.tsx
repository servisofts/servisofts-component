import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SNavBar from '../SNavBar/index';
import SSCrollView from '../SSCrollView/index';
import STheme from '../STheme/index';
import SView from '../SView/index';
import SScrollView2 from '../SScrollView2/index';


export type SPageProps = {
    onBack?: Function,
    title?: String | Component,
    hidden?: boolean,
    preventBack?: boolean,
    disableScroll?: boolean

}

export default class SPage extends Component<SPageProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getNavBar() {
        if (this.props.hidden) return <View />
        return <SNavBar {...this.props} />
    }
    getScroll() {
        if (this.props.disableScroll) return this.props.children
        return <SScrollView2 disableHorizontal contentContainerStyle={{
            minHeight: "100%",
        }}>
            {this.props.children}
        </SScrollView2>
    }
    render() {
        return (
            <SView
                col={"xs-12"}
                style={{
                    flex: 1,
                }}
            >
                {this.getNavBar()}
                <SView col={"xs-12"}
                    style={{
                        flex: 1,
                        height: "100%",
                    }}>
                    {this.getScroll()}
                </SView>
            </SView>
        );

    }
}