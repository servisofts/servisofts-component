import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import SView from '../SView'
import STable4 from './index'
import SThread from '../SThread'

type ScrollPropsType = {
    parent: STable4

}
export default class Scroll extends Component<ScrollPropsType> {
    scroll: ScrollView;
    handleScrollVertical = (e) => {
        // if (this.props.parent.rowNumbers) {
        //     this.props.parent.rowNumbers.scrollTo({ ...e.nativeEvent.contentOffset })
        // }
        // if (this.props.parent.table) {
        //     this.props.parent.table.scrollTo({ ...e.nativeEvent.contentOffset })
        // }
    }
    scrollTo(e) {
        this.scroll.scrollTo({ ...e, animated: false })
    }
    render() {
        return (
            <SView width={15} height >
                <ScrollView
                    ref={ref => this.scroll = ref}
                    onScroll={this.handleScrollVertical}
                    scrollEventThrottle={this.props.parent.scrollEventThrottle}
                    contentContainerStyle={{
                        height: this.props.parent.contentHeight
                    }}
                />
            </SView>
        )
    }
}