import React, { Component } from 'react';
import { View, Text, ScrollView, ViewStyle, Animated } from 'react-native';
import SAPanResponder from '../../SAnimated/SAPanResponder';
import STheme from '../../STheme';
import Scroll from '../Scroll';

type typeScroll = {
    horizontal?: Boolean,
    scroll?: Scroll
}

class Indicator extends Component<typeScroll> {
    panMove
    state
    onMove
    scroll
    startPosition
    constructor(props) {
        super(props);
        this.state = {
            size: 12,
            scroll: false,
            direction: (this.props.horizontal ? "Horizontal" : "Vertical"),
            animPos: new Animated.ValueXY({ x: 0, y: 0 }),
            animSize: new Animated.ValueXY({ x: 0, y: 0 }),
        };
        this.panMove = this.createPanMove();
    }

    repaint(scroll) {
        if (scroll) {
            this.state.scroll = scroll;
        }
        this.setState({ repaint: new Date().getTime() });
    }
    setScroll = (scroll) => {
        if (!this.state.scroll) {
            this.state.scroll = scroll;
            this.setState({ scroll: scroll });
            return;
        }
        this.state.scroll = scroll;

    }
    onScroll({ contentOffset, contentSize, layoutMeasurement }) {
        if (this.onMove) return;
        if (this.state.scroll) {
            var propsScrll = this.state.scroll.getProps();
            var layoutScroll = this.state.scroll.getLayout();
            if (!layoutScroll) {
                return;
            }
            var centerScroll = {
                x: (contentOffset.x - layoutMeasurement.width) / contentSize.width,
                y: (contentOffset.y - layoutMeasurement.height) / contentSize.height,
            }
            var position = {
                x: (layoutScroll.width * centerScroll.x) + this.state.animSize.x._value,
                y: (layoutScroll.height * centerScroll.y) + this.state.animSize.y._value
            }
            if (propsScrll.horizontal) {
                this.setScrollPosition({ x: position.x, y: 0 })
            } else {
                this.setScrollPosition({ x: 0, y: position.y })
            }
        }

    }
    setSize = ({ width, height }) => {
        // @ts-ignore
        Animated.timing(this.state.animSize, {
            toValue: { x: width, y: height },
            duration: 10,
            // useNativeDriver: true,
        }).start();
        return;
    }
    setScrollPosition = ({ x, y }) => {
        this.state.animPos.setValue({ x: x, y: y })
    }
    render() {
        if (!this.state.scroll) {
            return <View />
        }
        this.state.scroll.setIndicator(this);
        this.scroll = this.state.scroll;
        var layoutScroll = this.state.scroll.getLayout();
        var sizeScroll = this.state.scroll.getContentSize();
        if (layoutScroll && sizeScroll) {
            if (this.scroll.isHorizontal()) {
                var percent = layoutScroll.width / sizeScroll.width
                if (percent >= 1) {
                    this.setSize({ width: 0, height: 0, })
                } else {
                    this.setSize({ width: layoutScroll.width * percent, height: this.state.size, })
                }
            } else {
                // console.log(sizeScroll.height)
                var percent = layoutScroll.height / sizeScroll.height
                if (percent >= 1) {
                    this.setSize({ width: 0, height: 0, })
                } else {
                    this.setSize({ width: this.state.size, height: layoutScroll.height * percent })
                }
            }
        } else {
            // console.log("no repinto")
        }


        return <View
            style={{
                position: "absolute",
                ...(this.scroll.isHorizontal() ? {
                    width: "100%",
                    height: this.state.size,
                    bottom: 0,
                    left: 0,
                } : {
                    width: this.state.size,
                    height: "100%",
                    top: 0,
                    right: 0,
                })
            }}
            onLayout={(evt) => {
                // console.log(evt.nativeEvent.layout);
            }}
        >
            <Animated.View
                {...this.panMove.getPanHandlers()}
                style={{
                    width: this.state.animSize.x,
                    height: this.state.animSize.y,
                    left: this.state.animPos.x,
                    top: this.state.animPos.y,
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 4,
                    cursor: "pointer"
                }}>
                <View style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    backgroundColor: STheme.color.card,
                }}>

                </View>
            </Animated.View>
        </View>
    }

    moveScrollAsync = async (scroll: Scroll, moveTo) => {
        var sizeScroll = scroll.getContentSize();
        var layout = scroll.getLayout();
        var moveToRes = {
            x: moveTo.x * (sizeScroll.width / layout.width),
            y: moveTo.y * (sizeScroll.height / layout.height),
        }
        // console.log(moveToRes)
        if (scroll.isHorizontal()) {
            scroll.moveScroll({
                x: moveToRes.x,
                y: 0,
            })
        } else {
            scroll.moveScroll({
                x: 0,
                y: moveToRes.y,
            })
        }
    }
    createPanMove() {
        return new SAPanResponder({
            onGrand: (e, gs) => {
                this.onMove = true;
                var anim = this.state.animPos;
                this.startPosition = {
                    x: anim.x._value,
                    y: anim.y._value
                }

                anim.flattenOffset();
            },
            onMove: (e, gs) => {
                var scroll: Scroll = this.state.scroll;
                if (scroll) {
                    var moveTo = { x: 0, y: 0 };
                    var layout = scroll.getLayout();
                    if (scroll.getProps().horizontal) {
                        if (
                            this.startPosition.x + gs.dx > 0) {
                            moveTo = { x: this.startPosition.x + gs.dx, y: 0 };
                        }
                        if (this.startPosition.x + gs.dx + this.state.animSize.x._value >= layout.width) {
                            moveTo = {
                                x: layout.width - this.state.animSize.x._value,
                                y: 0
                            };
                        }
                    } else {
                        if (this.startPosition.y + gs.dy > 0) {
                            moveTo = { x: 0, y: this.startPosition.y + gs.dy }
                        }
                        if (this.startPosition.y + gs.dy + this.state.animSize.y._value >= layout.height) {
                            moveTo = {
                                x: 0,
                                y: layout.height - this.state.animSize.y._value,
                            };
                            // moveTo = this.lastPos;
                        }
                    }
                    this.state.animPos.setValue(moveTo);
                    this.moveScrollAsync(scroll, moveTo)
                }
            },
            onRelease: () => {
                this.onMove = false;
            },
        });
    }
}
export default Indicator;