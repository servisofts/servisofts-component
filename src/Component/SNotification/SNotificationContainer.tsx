import React, { Component } from 'react'
import SNotification, { Notification } from '.';
import NotificationItem from './NotificationItem';
import { FlatList, View } from 'react-native';


const SeparatorItem = <View style={{
    width: "100%",
    height: 4
}} />
export default class SNotificationContainer extends Component {

    state: { data: { [key: string]: Notification } } = {
        data: {}
    }

    constructor(props: any) {
        super(props);
        SNotification._setInstance(this);
    }

    repaint() {
        this.setState({ ...this.state })
    }
    componentDidMount() {
        SNotification._setInstance(this);
    }
    render() {
        const limit = 5;
        const arr = Object.values(this.state.data)
        // const arr = Object.values(this.state.data).sort((a: Notification, b: Notification) => {
        //     if (a.type != b.type) {
        //         if (a.type == "loading") return 1;
        //         if (b.type == "loading") return -1;
        //     }
        //     return 0;
        // });
        return <View style={{
            position: "absolute",
            top: 29,
            right: 8,
        }}>
            <FlatList
                data={arr.reverse().slice(0, limit)}
                scrollEnabled={false}
                ItemSeparatorComponent={() => SeparatorItem}
                renderItem={({ item, index }) => <NotificationItem key={item.key} data={item} index={index} onPress={() => {
                    SNotification.remove(item.key)
                }} />}
            />
            {arr.length > limit ? <>
                {SeparatorItem}
                <NotificationItem index={limit}
                    onPress={() => {
                        SNotification.removeAll();
                    }}
                    data={{
                        title: `${arr.length - limit} +`
                    }} />
            </> : null}
        </View>

    }
}
