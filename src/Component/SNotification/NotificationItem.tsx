import React, { Component, useRef, useState } from 'react'
import { PanResponder, Animated, PanResponderGestureState, GestureResponderEvent, } from 'react-native'
import { SHr, SIcon, SImage, SLoad, SPage, SText, STheme, SView, } from '../../';
import SNotification, { Notification } from '.';

// const CloseIcon = ({ data }: { data: Notification }) => {
//     return <SView style={{
//         position: "absolute",
//         top: 0,
//         right: 0,
//         width: 25,
//         height: 25,
//         padding: 0,
//         alignItems: "flex-end",
//         // justifyContent: "flex-start"
//     }} onPress={() => {
//         SNotification.remove(data.key ?? "");
//     }}  >
//         <SIcon width={8} height={8} fill={STheme.color.gray} name='Cerrar' />
//     </SView>
// }

export type onDropNotificationEventProps = {
    notification: Notification,
    gesture: PanResponderGestureState,
    gestureEvent: GestureResponderEvent,
}
export type onDropNotificationEvent = (p: onDropNotificationEventProps) => void;
const NotificationItem = (props: { index: number, data: Notification, onPress?: any, onDrop?: onDropNotificationEvent }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    // const [dropped, setDropped] = useState(false);
    const { data } = props

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_, gesture) => {
                // if (
                //     gesture.moveY > 400 && gesture.moveY < 600 && // coordenadas de dropzone
                //     gesture.moveX > 50 && gesture.moveX < 300
                // ) {
                //     setDropped(true); // simulamos un "drop"
                // }

                if (props.onDrop) {
                    props.onDrop({
                        notification: props.data,
                        gesture: gesture,
                        gestureEvent: _,
                    });
                }
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();


            }
        })
    ).current;





    return (
        <SView
            animated
            key={props.data.key}
            // onPress={props.onPress}
            activeOpacity={0.5}
            style={[pan.getLayout(), {
                width: 220,
                // top: 8 + (60) * props.index,
                borderRadius: 4,
                backgroundColor: STheme.color.background + "EE",
                // overflow: "hidden",
                // @ts-ignore
                userSelect: "none",
                padding: 4,
                borderWidth: 2,
                borderColor: STheme.color.card,
                borderLeftWidth: 4,
                borderStartColor: props?.data?.color ?? STheme.color.lightGray,
                flexDirection: "row",
                alignItems: "center"
            }]}
            {...(!props.onDrop ? {} : panResponder.panHandlers)}
            onPress={!props.onDrop ? props.onPress : null}
        >
            <SView flex padding={4}>
                <SText font='Roboto' style={{
                    fontWeight: "bold"
                }}>{props?.data?.title}</SText>
                <SHr h={4} />
                <SText font='Roboto' style={{
                    color: STheme.color.gray,
                    fontSize: 12
                }}>{props?.data?.body}</SText>
                {data.type == "loading" ? <SLoad type='bar' /> : null}
            </SView>
            {!data.image ? null : <SView width={35} height={35} card style={{ overflow: "hidden", borderRadius: 4, }}><SImage src={props?.data?.image} /></SView>}
        </SView >
    )
}



export default NotificationItem;