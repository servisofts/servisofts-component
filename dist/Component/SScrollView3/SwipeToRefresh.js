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
import React, { useRef, useState } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import SLoad from '../SLoad';
import SView from '../SView';
var valueScroll = 0;
var valueScrollContainer = 0;
var DefaultDistance = 100;
var velocity = 7;
var procentToActive = 0.65;
export default (function (_a) {
    var children = _a.children, onRefresh = _a.onRefresh;
    var _b = useState(false), refreshing = _b[0], setRefreshing = _b[1];
    var scrollViewRef = useRef();
    var ContainerAnim = useRef(new Animated.Value(0)).current;
    var scrollY = useRef(new Animated.Value(0)).current;
    scrollY.addListener(function (_a) {
        var value = _a.value;
        valueScroll = value;
    });
    ContainerAnim.addListener(function (_a) {
        var value = _a.value;
        valueScrollContainer = value;
    });
    var panResponder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: function (evt, gestureState) { return gestureState.dy != 0; },
        onPanResponderMove: function (evt, gestureState) {
            // scrollY.setValue(-gestureState.dy)
            // return;
            if (!onRefresh)
                return true;
            if (valueScroll > 0)
                return true;
            var calueToset = (1 - ((valueScrollContainer !== null && valueScrollContainer !== void 0 ? valueScrollContainer : 1) / DefaultDistance));
            if (calueToset <= 0 || calueToset > 1)
                return true;
            ContainerAnim.setValue(valueScrollContainer + (calueToset * (gestureState.vy) * velocity));
        },
        onPanResponderRelease: function (evt, gestureState) {
            if (valueScrollContainer >= DefaultDistance * procentToActive) {
                setRefreshing(true);
                var timeout_1 = 1000;
                var timeoutId_1;
                var timeoutPromise = new Promise(function (resolve, reject) {
                    timeoutId_1 = setTimeout(function () {
                        reject(new Error("Promise timed out after " + timeout_1 + " ms"));
                    }, timeout_1);
                });
                var p1 = new Promise(function (resolve, reject) {
                    onRefresh(resolve, reject);
                });
                Promise.race([p1, timeoutPromise])
                    .then(function (result) {
                    clearTimeout(timeoutId_1);
                    setRefreshing(false);
                    Animated.timing(ContainerAnim, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true
                    }).start();
                    ContainerAnim.setValue(0);
                })["catch"](function (error) {
                    clearTimeout(timeoutId_1);
                    setRefreshing(false);
                    Animated.timing(ContainerAnim, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true
                    }).start();
                    // ContainerAnim.setValue(0);
                });
            }
            else {
                Animated.timing(ContainerAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true
                }).start();
            }
            // } else {
            // }
        }
    })).current;
    return (React.createElement(View, { style: { flex: 1 } },
        React.createElement(SView, { style: {
                position: "absolute",
                flex: 1
            }, center: true, height: true, col: 'xs-12' }, refreshing ? React.createElement(SLoad, null) : null),
        React.createElement(Animated.ScrollView
        // ref={scrollViewRef}
        , __assign({ 
            // ref={scrollViewRef}
            style: { flex: 1 }, bounces: true, disableScrollViewPanResponder: true, nestedScrollEnabled: true, 
            // contentContainerStyle={styles.contentContainer}
            scrollEventThrottle: 16, onScroll: Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true }) }, panResponder.panHandlers, { contentContainerStyle: {
                flex: 1
            } }),
            React.createElement(Animated.View, { style: { transform: [{ translateY: ContainerAnim }], flex: 1 } }, children))));
});
