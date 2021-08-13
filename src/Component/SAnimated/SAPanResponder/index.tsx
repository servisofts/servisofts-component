import React, { Component } from 'react';
import { View, Text, PanResponder, GestureResponderEvent, PanResponderGestureState } from 'react-native';

// type typeProps = {
//     onGrand: PanResponderCallbacks.onPanResponderGrant,
//     onMove: PanResponderCallbacks.onPanResponderMove,
//     onRelease: PanResponderCallbacks.onPanResponderRelease,
//     onEnd: PanResponderCallbacks.onPanResponderEnd,
// }
interface typeProps {
    // onMoveShouldSetPanResponder?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined;
    // onStartShouldSetPanResponder?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined;
    onGrand?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    onMove?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    onRelease?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    // onPanResponderTerminate?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    // onMoveShouldSetPanResponderCapture?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined;
    // onStartShouldSetPanResponderCapture?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined;
    // onPanResponderReject?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    // onPanResponderStart?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    onEnd?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => void) | undefined;
    // onPanResponderTerminationRequest?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined;
    // onShouldBlockNativeResponder?: ((e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined;
}
export default class SAPanResponder {
    props;
    panResponder;
    constructor(props) {
        this.props = props;
        this.createPam();
    }

    getPanHandlers() {
        return this.panResponder.panHandlers;
    }
    createPam() {
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => (gestureState.dx != 0 || gestureState.dy != 0),
            // onShouldBlockNativeResponder:(evt,gh)=>true,
            // onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gs) => {
                if (this.props.onGrand) this.props.onGrand(evt, gs);
                // console.log("onPanResponderGrant")
            },
            onPanResponderMove: (evt, gs) => {
                if (this.props.onMove) this.props.onMove(evt, gs);
                // console.log("onPanResponderMove")
            },
            onPanResponderRelease: (evt, gs) => {
                if (this.props.onRelease) this.props.onRelease(evt, gs);
                // console.log("onPanResponderRelease")
            },
            onPanResponderEnd: (evt, gs) => {
                if (this.props.onEnd) this.props.onEnd(evt, gs);
                // console.log("onPanResponderEnd")
            },
        });
    }
}
