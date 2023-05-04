import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, PanResponder, Animated, ScrollViewComponent } from 'react-native';
import SLoad from '../SLoad';
import SPromise from '../SPromise';
import SText from '../SText';
import SView from '../SView';
var valueScroll = 0;
var valueScrollContainer = 0;
const DefaultDistance = 100;
const velocity = 7;
const procentToActive = 0.65
export default ({ children, onRefresh }) => {
    const [refreshing, setRefreshing] = useState(false);
    const scrollViewRef: any = useRef();
    const ContainerAnim = useRef(new Animated.Value(0)).current;
    const scrollY: any = useRef(new Animated.Value(0)).current;

    scrollY.addListener(({ value }) => {
        valueScroll = value;
    });
    ContainerAnim.addListener(({ value }) => {
        valueScrollContainer = value;
    });

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => gestureState.dy != 0,
            onPanResponderMove: (evt, gestureState) => {
                // scrollY.setValue(-gestureState.dy)
                // return;
                if (!onRefresh) return true;
                if (valueScroll > 0) return true;
                var calueToset = (1 - ((valueScrollContainer ?? 1) / DefaultDistance))
                if (calueToset <= 0 || calueToset > 1) return true;
                ContainerAnim.setValue(valueScrollContainer + (calueToset * (gestureState.vy) * velocity));
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (valueScrollContainer >= DefaultDistance * procentToActive) {
                    setRefreshing(true);
                    let timeout = 1000;
                    let timeoutId;
                    const timeoutPromise = new Promise((resolve, reject) => {
                        timeoutId = setTimeout(() => {
                            reject(new Error(`Promise timed out after ${timeout} ms`));
                        }, timeout);
                    });
                    const p1 = new Promise((resolve, reject) => {
                        onRefresh(resolve, reject);
                    })
                    Promise.race([p1, timeoutPromise])
                        .then(result => {
                            clearTimeout(timeoutId);
                            setRefreshing(false);
                            Animated.timing(ContainerAnim, {
                                toValue: 0,
                                duration: 300,
                                useNativeDriver: true,
                            }).start();
                            ContainerAnim.setValue(0);
                        })
                        .catch(error => {
                            clearTimeout(timeoutId);
                            setRefreshing(false);
                            Animated.timing(ContainerAnim, {
                                toValue: 0,
                                duration: 300,
                                useNativeDriver: true,
                            }).start();
                            // ContainerAnim.setValue(0);
                        });

                } else {
                    Animated.timing(ContainerAnim, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
                }
                // } else {

                // }
            },
        })
    ).current;

    return (
        <View style={{ flex: 1 }}>
            <SView style={{
                position: "absolute",
            }} center col={'xs-12'}>{refreshing ? <SLoad /> : null}</SView>
            <Animated.ScrollView
                // ref={scrollViewRef}
                style={{ flex: 1 }}
                bounces={true}
                disableScrollViewPanResponder={true}
                nestedScrollEnabled={true}
                // contentContainerStyle={styles.contentContainer}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
                {...panResponder.panHandlers}
            >
                <Animated.View style={{ transform: [{ translateY: ContainerAnim }] }}>
                    {children}
                </Animated.View>
            </Animated.ScrollView>
        </View>
    );
};
