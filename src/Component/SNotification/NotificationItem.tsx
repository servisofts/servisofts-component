import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SHr, SIcon, SImage, SLoad, SPage, SText, STheme, SView } from '../../';
import SNotification, { Notification } from '.';

const CloseIcon = ({ data }: { data: Notification }) => {
    return <SView style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 25,
        height: 25,
        padding: 0,
        alignItems: "flex-end",
        // justifyContent: "flex-start"
    }} onPress={() => {
        SNotification.remove(data.key ?? "");
    }}  >
        <SIcon width={8} height={8} fill={STheme.color.gray} name='Cerrar' />
    </SView>
}
const NotificationItem = (props: { index: number, data: Notification, onPress?: any }) => {
    const { data } = props
    return (
        <SView
            key={props.data.key}
            onPress={props.onPress}
            activeOpacity={0}
            style={{
                width: 220,
                // top: 8 + (60) * props.index,
                borderRadius: 4,
                backgroundColor: STheme.color.background + "EE",
                // overflow: "hidden",
                padding: 4,
                borderWidth: 2,
                borderColor: STheme.color.card,
                borderLeftWidth: 4,
                borderStartColor: props?.data?.color ?? STheme.color.lightGray,
                flexDirection: "row",
                alignItems: "center"
            }}>
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