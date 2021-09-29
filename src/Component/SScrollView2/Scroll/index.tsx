import React, { Component } from 'react';
import { View, Text, ScrollView, ViewStyle, Platform, StyleProp } from 'react-native';
import Indicator from '../Indicator';

type typeScroll = {
    horizontal?: boolean,
    disableHorizontal?: boolean,
    indicator?: Indicator,
    contentContainerStyle?: StyleProp<ViewStyle>,
    onScroll?: (e: any) => void,
    onPageFinish?: () => {},

}
const preventDefault = e => e.preventDefault();

class Scroll extends Component<typeScroll> {
    enabled
    indicator
    scrollRef
    contentSize
    scrolldata
    layout
    constructor(props) {
        super(props);
        this.state = {
            direction: (this.props.horizontal ? "Horizontal" : "Vertical")
        };
        this.enabled = true;
    }
    componentWillUnmount() {
        this.setEnabled(true);
    }
    getProps() {
        return this.props;
    }
    getLayout() {
        return this.layout;
    }
    getContentSize() {
        return this.contentSize;
    }
    getState() {
        return this.state;
    }
    setIndicator(ref) {
        this.indicator = ref;
    }
    isHorizontal() {
        return this.props.horizontal;
    }
    noscroll() {
        window.scrollTo(0, 0);
    }
    setEnabled(bool) {
        if (Platform.OS == "web") {
            if (!bool) {
                document.ontouchmove = preventDefault;
                // alert("Sadasd")
                window.addEventListener("scroll", this.noscroll);
            } else {
                window.removeEventListener("scroll", this.noscroll);
                document.ontouchmove = () => { }
            }
        }
        this.enabled = bool;
        this.scrollRef.setNativeProps({ scrollEnabled: bool })
    }
    moveScroll({ x, y }) {
        this.scrollRef.scrollTo({ x, y, animated: false })
    }
    render() {
        return (
            <ScrollView
                horizontal={this.props.horizontal}
                ref={(ref) => { this.scrollRef = ref }}
                disableScrollViewPanResponder={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                bounces={false}
                scrollEventThrottle={16}
                onContentSizeChange={(w, h) => {
                    this.contentSize = { width: w, height: h }
                    if (this.indicator) {
                        this.indicator.repaint(this);
                    }
                    // console.log(this.state.direction, "onContentSizeChange", { width: w, height: h })
                }}
                onLayout={(evt) => {
                    this.layout = evt.nativeEvent.layout;
                    if (this.indicator) {
                        this.indicator.repaint(this);
                    }
                }}
                onScroll={(evt) => {
                    this.scrolldata = evt.nativeEvent;
                    if (this.props.onScroll) this.props.onScroll(evt);

                    if (this.props.onPageFinish) {
                        var evn = evt.nativeEvent;
                        var posy = evn.contentOffset.y + evn.layoutMeasurement.height;
                        var heigth = evn.contentSize.height;
                        if (heigth - posy <= 0) {
                            this.props.onPageFinish();
                        }
                    }
                    if (!this.enabled) {
                        return;
                    }
                    if (this.indicator) {
                        this.indicator.onScroll(evt.nativeEvent);
                    }
                    if (this.indicator) {
                        this.indicator.onScroll(evt.nativeEvent);
                    }

                }}
                style={{
                    ...(this.props.disableHorizontal ? {
                        width: "100%",
                        height: "100%",
                    } : {})

                }}
                contentContainerStyle={[{
                    ...(this.props.disableHorizontal ? {
                        maxWidth: "100%",
                        minWidth: "100%",
                        minHeight: "100%",
                    } : {}),

                }, this.props.contentContainerStyle]}
            >
                {this.props.children}
            </ScrollView>
        );
    }
}

export default Scroll;