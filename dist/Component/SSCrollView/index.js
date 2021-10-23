var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Component } from 'react';
import { View, Animated, Platform } from 'react-native';
import { SThread, SView } from '../../index';
var preventDefault = function (e) { return e.preventDefault(); };
var ASCroll = Animated.ScrollView;
var SSCrollView = /** @class */ (function (_super) {
    __extends(SSCrollView, _super);
    function SSCrollView(props) {
        var _this = _super.call(this, props) || this;
        _this.getScrollCalc = function (data) {
            return {
                width: data.contentSize.width,
                height: data.contentSize.height,
                maxScroll: {
                    x: (data.contentSize.width - data.layoutMeasurement.width),
                    y: (data.contentSize.height - data.layoutMeasurement.height)
                },
                scrollPos: {
                    x: data.contentOffset.x,
                    y: data.contentOffset.y
                }
            };
        };
        _this.scrollInfo = function () {
            var info = {};
            if (_this.scroll_h) {
                info["horizontal"] = __assign({ key: "horizontal" }, _this.scroll_h);
            }
            if (_this.scroll_v) {
                info["vertical"] = __assign({ key: "vertical" }, _this.scroll_v);
            }
            return info;
            // return <View style={{
            //     position: "absolute",
            //     top: 0,
            //     left: 0,
            //     width: 200,
            //     backgroundColor: STheme().colorSecondary + "88",
            //     borderRadius: 8,
            //     padding: 4,
            // }}>
            //     {info.map((data) => {
            //         return <SText options={{
            //             type: "primary",
            //         }}>{JSON.stringify(data, false, "\t").replace(/[\{|\}|,|"]/g, "")}</SText>
            //     })}
            //     <SButtom options={{
            //         type: "outline"
            //     }}
            //         onPress={() => {
            //             this.scrollh.scrollTo({ x: 1, y: 1 })
            //             this.scrollv.scrollTo({ x: 1, y: 1 })
            //         }}
            //     >TO END</SButtom>
            // </View>
        };
        _this.state = {};
        _this.animValueV = new Animated.Value(0);
        return _this;
    }
    SSCrollView.prototype.componentDidMount = function () {
        var _this = this;
        this.animValueV.addListener(function (animation) {
            _this.scrollv &&
                _this.scrollv.scrollTo({
                    y: animation.value,
                    animated: false
                });
        });
    };
    SSCrollView.prototype.getLayout = function () {
        if (this.layout) {
            return this.layout;
        }
    };
    SSCrollView.prototype.componentWillUnmount = function () {
        if (Platform.OS == "web") {
            document.ontouchmove = function () { };
            // document.removeEventListener('touchmove', preventDefault);
        }
    };
    SSCrollView.prototype.setEnabled = function (en) {
        if (Platform.OS == "web") {
            if (!en) {
                document.ontouchmove = preventDefault;
            }
            else {
                document.ontouchmove = function () { };
            }
        }
        else {
            if (this.scrollv) {
                this.scrollv.setNativeProps({ scrollEnabled: en });
            }
            if (this.scrollh) {
                this.scrollh.setNativeProps({ scrollEnabled: en });
            }
        }
    };
    SSCrollView.prototype.scrollIncrement = function (_a) {
        var x = _a.x, y = _a.y;
        if (!this.layout) {
            return;
        }
        var _b = this.layout, width = _b.width, height = _b.height;
        if (this.scroll_v) {
            this.scrollv.scrollTo({ x: this.scroll_v.contentOffset.x + x, y: this.scroll_v.contentOffset.y + y }, true);
        }
        else {
            this.scrollv.scrollTo({ x: 1, y: 1 }, true);
        }
        if (this.scroll_h) {
            this.scrollh.scrollTo({ x: this.scroll_h.contentOffset.x + x, y: this.scroll_h.contentOffset.y + y }, true);
        }
        else {
            this.scrollh.scrollTo({ x: 1, y: 1 }, true);
        }
    };
    SSCrollView.prototype.scrollTo = function (_a, duration) {
        var x = _a.x, y = _a.y;
        if (!this.layout) {
            return;
        }
        var _b = this.layout, width = _b.width, height = _b.height;
        if (this.scrollv) {
            Animated.timing(this.animValueV, {
                toValue: y - height / 2,
                duration: !duration ? 10 : duration,
                useNativeDriver: false
            }).start();
            // this.scrollv.scrollTo({ x: x - width / 2, y: y - height / 2 }, false);
        }
        if (this.scrollh) {
            // Animated.timing(this.scrollh, {
            //     toValue: { x: 1, y: 1 },
            //     duration: 10,
            // }).start();
            // this.scrollh.scrollTo({ x: 1, y: 1 }, false);
        }
    };
    SSCrollView.prototype.moveScrollVertical = function (_a) {
        var x = _a.x, y = _a.y;
        if (this.scrollv) {
            this.scrollv.scrollTo({ x: x, y: y }, false);
        }
    };
    SSCrollView.prototype.moveScrollHorizontal = function (_a) {
        var x = _a.x, y = _a.y;
        if (this.scrollh) {
            this.scrollh.scrollTo({ x: x, y: y }, false);
        }
    };
    SSCrollView.prototype.scrollToEnd = function () {
        if (this.scrollv) {
            this.scrollv.scrollToEnd();
        }
        if (this.scrollh) {
            this.scrollv.scrollToEnd();
        }
    };
    SSCrollView.prototype.scrollToPosition = function (_a) {
        var x = _a.x, y = _a.y;
        if (this.scrollv) {
            this.scrollv.scrollTo({ x: x, y: y });
        }
        if (this.scrollh) {
            this.scrollh.scrollTo({ x: x, y: y });
        }
    };
    SSCrollView.prototype.onScrollAnimationEnd = function () {
        this.props.onScrollEnd(this.scrollInfo());
    };
    SSCrollView.prototype.getScroll = function () {
        var _this = this;
        if (!this.layout) {
            return React.createElement(View, null);
        }
        return React.createElement(ASCroll, { ref: function (ref) { _this.scrollh = ref; }, horizontal: true, style: {
                width: this.layout.width
            }, scrollEventThrottle: 16, 
            // nestedScrollEnabled={true}
            disableScrollViewPanResponder: true, onLayout: function (evt) {
                // this.setState({ scrollh: evt.nativeEvent.layout })
            }, onScroll: function (evt) {
                _this.scroll_h = evt.nativeEvent;
                if (_this.props.onScroll) {
                    _this.props.onScroll(_this.scrollInfo());
                }
                if (_this.props.onScrollEnd) {
                    new SThread(350, "scroll_h", true).start(function () {
                        _this.onScrollAnimationEnd();
                    });
                }
                // this.setState({ scroll_h: })
            }, 
            // onContentSizeChange={() => {
            //     if (this.props.reverse) {
            //         this.scrollh.scrollToEnd({ amimated: false });
            //     }
            // }}
            contentContainerStyle: __assign(__assign({}, this.props.contentContainerStyle), (this.props.disableHorizontal ? { width: "100%" } : {})) },
            this.props.header,
            React.createElement(ASCroll, { nestedScrollEnabled: true, ref: function (ref) { _this.scrollv = ref; }, style: __assign({ width: "100%" }, this.props.style), scrollEventThrottle: 16, disableScrollViewPanResponder: true, onLayout: function (evt) {
                    // this.setState({ scrollv: evt.nativeEvent.layout })
                }, onScroll: function (evt) {
                    _this.scroll_v = evt.nativeEvent;
                    if (_this.props.onScroll) {
                        _this.props.onScroll(_this.scrollInfo());
                    }
                    if (_this.props.onScrollEnd) {
                        new SThread(150, "scroll_v", true).start(function () {
                            _this.onScrollAnimationEnd();
                        });
                    }
                    // this.setState({ scroll_v: evt.nativeEvent })
                }, contentContainerStyle: __assign({}, this.props.contentContainerStyle) },
                React.createElement(View, { style: __assign({ width: "100%", height: "100%" }, this.props.contentContainerStyle) }, this.props.children)),
            this.props.footer);
    };
    SSCrollView.prototype.render = function () {
        var _this = this;
        return (React.createElement(SView, { style: __assign({ width: "100%", flex: 1 }, this.props.style) },
            React.createElement(SView, { style: __assign({ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }, (Platform.OS == "web" ? {
                // position: "fixed",
                } : {
                    flex: 1
                })), onLayout: function (evt) {
                    _this.layout = evt.nativeEvent.layout;
                    if (!_this.state.load) {
                        _this.setState({ load: true });
                    }
                    return;
                } }, this.getScroll())));
    };
    return SSCrollView;
}(Component));
export default SSCrollView;
