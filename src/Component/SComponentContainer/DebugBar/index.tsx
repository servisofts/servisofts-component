import React, { Component } from 'react'
import { Text, View } from 'react-native'
import SComponentContainer from '..';
import SIcon from '../../SIcon';
import SNavigation from '../../SNavigation';
import SText from '../../SText/index';
import STheme from '../../STheme/index';
import SThread from '../../SThread';
import SView from '../../SView/index';
export type typeSDebugBar = {
    debug: boolean
}
export default class DebugBar extends Component<typeSDebugBar> {
    state;
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            stateSocket: false,
        }
    }
    register() {
        new SThread(100, "", true).start(() => {
            if (SComponentContainer.SSocket) {
                if (SComponentContainer.SSocket.getSession() != null) {
                    SComponentContainer.SSocket.register("DebugBar", (instance) => {
                        this.register();
                    })
                    if (this.state.stateSocket != SComponentContainer.SSocket.getSession().isOpen()) {
                        this.setState({
                            stateSocket: SComponentContainer.SSocket.getSession().isOpen()
                        })
                    }
                    if (!this.state.register) this.setState({ register: true });
                    return;
                }
            }
            this.register();
        })
    }

    render() {
        if (!this.props.debug) return <View />
        this.register();
        return (
            <>
                <SView
                    style={{
                        position: "absolute",
                        width: 25,
                        height: 25,
                        backgroundColor: STheme.color.secondary,
                        right: 10,
                        top: 0,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        padding: 4,
                    }}
                    onPress={() => {
                        // STheme.change();
                    }}
                >
                    {this.state.stateSocket ?
                        <SIcon name={"Wifi"} fill={STheme.color.primary} /> :
                        <SIcon name={"WifiDisconnect"} fill={STheme.color.primary + "99"} stroke={STheme.color.primary} />
                    }
                </SView>
                <SView
                    style={{
                        position: "absolute",
                        width: 25,
                        height: 25,
                        backgroundColor: STheme.color.secondary,
                        right: 40,
                        top: 0,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        padding: 4,
                    }}
                    onPress={() => {
                        STheme.change();
                    }}
                >
                    <SIcon name={STheme.getTheme() == "default" ? "Sun" : "Moon"} fill={STheme.color.primary} />
                </SView>
                <SView
                    style={{
                        position: "absolute",
                        width: 25,
                        height: 25,
                        backgroundColor: STheme.color.secondary,
                        right: 70,
                        top: 0,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        padding: 1,
                    }}
                    onPress={() => {
                        SNavigation.navigate("scomponent");
                    }}
                >
                    <SIcon name={"AlertOutline"} fill={STheme.color.primary} />
                </SView>
            </>
        )
    }
}
