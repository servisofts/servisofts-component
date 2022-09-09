import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import SText from '../SText/index';
import SGrid from '../SGrid/index';
import STheme, { SThemeColors, SThemeProps } from '../STheme/index';
import DebugBar from './DebugBar/index';
import { SAssets } from '../../Types';
import SIcon from '../SIcon/index';
import SPopup from '../SPopup';
import SPage from '../SPage';
import { SInputsCofig } from "../../Types/index"
import SThread from '../SThread';

export type SComponentContainerProps = {
    theme?: SThemeProps,
    background?: any,
    debug?: boolean,
    socket?: any,
    assets?: SAssets,
    inputs?: () => SInputsCofig,
}


export default class SComponentContainer extends Component<SComponentContainerProps> {
    private static Instance: SComponentContainer = null;
    private static GridListen: { [key in string]: SGrid } = {};
    static SSocket: any;
    public static registerGrid(key: string, grid: SGrid) {
        if (!this.Instance) return;
        this.GridListen[key] = grid;
        grid.changeMedida(this.Instance.state.medida);
    }
    public static removeGrid(key: string) {
        if (!this.Instance) return;
        delete this.GridListen[key];
    }
    public static getInputsConfig() {
        if (!this.Instance) {
            return null;
        }
        if (!this.Instance.props) {
            return null;
        }
        if (!this.Instance.props.inputs) {
            return null;
        }
        return this.Instance.props.inputs();
    }
    layout;
    state;
    constructor(props) {
        super(props);
        this.state = {
            layout: {},
            medida: "xs",
            theme: null,
            barStyle: "default",
        };
        SComponentContainer.Instance = this;
        SComponentContainer.SSocket = props.socket;
        SIcon.loadAssets(this.props.assets);
        if (this.props.background) {
            SPage.setBackground(this.props.background);

        }
    }

    onChangeSize(layout) {
        this.layout = layout;
        var curMedida = "";
        if (layout.width >= 1400) {
            curMedida = "xxl";
        } else if (layout.width >= 1200) {
            curMedida = "xl";
        } else if (layout.width >= 992) {
            curMedida = "lg"
        } else if (layout.width >= 768) {
            curMedida = "md"
        } else if (layout.width >= 576) {
            curMedida = "sm"
        } else {
            curMedida = "xs"
        }
        if (this.state.medida != curMedida) {
            this.state.medida = curMedida;
            Object.keys(SComponentContainer.GridListen).map((key) => {
                var item = SComponentContainer.GridListen[key];
                item.changeMedida(this.state.medida);
            })
        }

    }
    getContenido() {
        if (!this.state.theme) return null;
        return (
            <View style={{
                width: "100%",
                flex: 1,
                height: "100%",
                backgroundColor: this.state.theme?.barColor || "#222222"
            }} >
                <SafeAreaView style={{
                    width: '100%',
                    flex: 1,
                }}>
                    <View style={{
                        width: "100%",
                        flex: 1,
                    }} >
                        <StatusBar barStyle={this.state.theme?.barStyle} animated backgroundColor={this.state.theme?.barColor || "#222222"} />
                        <View style={{
                            width: "100%",
                            flex: 1,
                        }} onLayout={(evt) => {
                            // this.setState({ layout: evt.nativeEvent.layout })
                            this.onChangeSize(evt.nativeEvent.layout);
                        }}>
                            {this.props.children}
                        </View>
                        <DebugBar debug={this.props.debug} />
                        <SPopup />
                    </View>
                </SafeAreaView>
            </View>
        )
    }
    render() {
        SComponentContainer.Instance = this;
        return (
            <STheme {...this.props.theme} data={this.state.theme} onLoad={(color: SThemeColors) => {
                if (this.state.theme != color) {
                    this.setState({ theme: null });
                    new SThread(10, "render_theme", false).start(() => {
                        this.setState({ theme: color });
                    })
                }
            }}>
                {this.getContenido()}
            </STheme>

        );

    }
}