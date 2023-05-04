import React, { Component } from 'react';
import {
    View,
    NativeScrollEvent,
    ScrollViewProps,
    ScrollView,
    Platform,
    ViewStyle
} from 'react-native';
import Indicator from './Indicator';
import Scroll from './Scroll';

export type onSrollEndEvt = {
    horizontal: NativeScrollEvent,
    vertical: NativeScrollEvent,
}
type SType = ScrollViewProps & {
    disableHorizontal?: boolean,
    reverse?: boolean,
    onScrollEnd?: (evt: onSrollEndEvt) => {},
    onScroll?: (evt: onSrollEndEvt) => {},
    header?: { style: ViewStyle, content: any },
    footer?: Component,
    onPageFinish?: () => {},

}
export default class SScrollView2 extends Component<SType> {
    state;

    static defaultProps = {
        disableHorizontal: false,
        header: { style: {}, content: <View /> },
        footer: null,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
        this.setRef("this", this);
    }

    setRef(key, ref) {
        if (!this.state.ref) {
            this.state.ref = {};
        }
        this.state.ref[key] = ref;
    }
    getRef(key) {
        return this.state.ref[key];
    }
    setEnabled(en) {
        this.getRef("scrollh").setEnabled(en);
        this.getRef("scrollv").setEnabled(en);
        if (Platform.OS == "web") {
            // if (!en) {
            //     document.ontouchmove = preventDefault;
            // } else {
            //     document.ontouchmove = () => { }
            // }
        } else {

        }
    }
    scrollTo(props: { x?, y?}) {
        if (this.getRef("scrollh")) {
            this.getRef("scrollh").scrollTo(props)
        }
        if (this.getRef("scrollv")) {
            this.getRef("scrollh").scrollTo(props)
        }
        this.getRef("scrollv").scrollTo(props);
    }
    render() {
        let ccs: any = this.props.contentContainerStyle;
        return (
            <View style={{
                width: "100%",
                flex: 1,
            }}>
                <View style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    alignItems: "center",
                }} onLayout={(evt) => {

                }}>
                    <View style={{
                        maxWidth: "100%",
                        height: "100%",
                        minWidth: "100%",

                        ...(this.props.disableHorizontal ? {
                            minWidth: "100%",
                            alignItems: "center",

                        } : {}),
                    }}>
                        <Scroll
                            disableHorizontal={this.props.disableHorizontal}
                            ref={(ref) => { this.setRef("scrollh", ref) }}
                            horizontal={true}
                            contentContainerStyle={{ width: "100%", ...(ccs ?? {}) }}
                            {...this.props}
                        >
                            <View style={{
                                width: "100%",
                                ...(this.props.disableHorizontal ? {
                                    // minWidth: "100%",
                                    minHeight: "100%",
                                    alignItems: "center",
                                } : {}),
                            }}>
                                <Scroll
                                    disableHorizontal={this.props.disableHorizontal}
                                    ref={(ref) => { this.setRef("scrollv", ref) }}
                                    contentContainerStyle={this.props.contentContainerStyle}
                                    onScroll={this.props.onScroll}
                                    onPageFinish={this.props.onPageFinish}
                                    parent={this}
                                    {...this.props}
                                // onScrollEnd={this.props.onScrollEnd}
                                >
                                    <View style={{
                                        width: "100%",
                                        height: "100%",
                                        flex: 1,
                                        // backgroundColor: "#f0f",
                                    }}>
                                        <View style={{ width: "100%", height: this.props.header.style.height, }}></View>
                                        {this.props.children}
                                    </View>
                                </Scroll>

                                <View style={{
                                    position: "absolute",
                                    width: "100%",
                                    top: 0,
                                    left: 0,
                                    ...this.props.header.style
                                }}>
                                    {this.props.header.content}
                                </View>

                            </View>
                        </Scroll>
                        <Indicator ref={(ref) => {
                            if (ref) {
                                ref.setScroll(this.state.ref["scrollh"]);
                            }
                            this.setRef("indicatorH", ref)
                        }}
                        />
                        <Indicator ref={(ref) => {
                            if (ref) {
                                ref.setScroll(this.state.ref["scrollv"]);
                            }
                            this.setRef("indicatorV", ref)
                        }}
                        />
                    </View>

                </View>
            </View>
        );
    }
}