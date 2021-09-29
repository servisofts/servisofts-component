import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { SText, SHr } from '../../index';
import SLoad from '../SLoad';
import SScrollView2 from '../SScrollView2';
import SThread from '../SThread';
import SView from '../SView';
import Data from './Data';
import Header, { Header_props } from './header';

type SType = {
    header: [Header_props],
    data: [Object] | Object,
}
export default class STable2 extends Component<SType> {
    state;
    _anim = {
        size: new Animated.Value(0),
        headerSize: {},
        headerPosition: {}
    };
    static defaultProps = {
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
        };
        this.buildAnimations();
    }
    componentDidMount() {
        this.buildAnimations();
    }
    header = () => {
        if (!this.props.header) {
            return <SLoad />
        }
        var positionInitial = 0;
        return this.props.header.map((item, index) => {
            if (!this._anim.headerSize[item.key]) {
                this._anim.headerSize[item.key] = new Animated.Value(item.width || 30);
                this._anim.headerPosition[item.key] = new Animated.Value(positionInitial);
                positionInitial += item.width + 1;
            }
            return <Header
                index={index}
                data={item}
                animationSize={this._anim.headerSize[item.key]}
                animationPosition={this._anim.headerPosition[item.key]}
            />

        });
    }
    data = () => {
        return Object.keys(this.props.data).map((key, index) => {
            const Render = this.props.header.map((item, index2) => {
                // if (!this._anim.headerSize[item.key]) {
                //     return;
                // }
                return <Data
                    index={index}
                    header={item}
                    data={this.props.data[key]}
                    animationSize={this._anim.headerSize[item.key]}
                    animationPosition={this._anim.headerPosition[item.key]}
                />

            });
            return <View style={{
                flexDirection: "row",
            }}>
                {Render}
                <View style={{
                    width:100,
                }}>

                </View>
            </View>

        })
    }
    buildAnimations = () => {
        if (!this._anim.size) {
            var size = { x: 0, y: 0 };
            // this.props.header.map((item, index) => {
            //     size.x += item.width ? item.width : 100;
            // });
            this._anim.size = new Animated.Value(0);
        }

    }
    render() {
        if (!this.state.isLoad) {
            new SThread(100, "load", false).start(() => {
                this.setState({ isLoad: true });
            })
            return <SLoad />
        }
        this.buildAnimations();
        return (
            <View style={{
                width: "100%",
                height: "100%",
            }}>
                <SView col={"xs-12"} height>
                    <SScrollView2 header={{
                        style: {
                            height: 30,
                        },
                        content: this.header(),
                    }}>
                        <Animated.View style={{
                            backgroundColor: "#ffffff11",
                        }}>
                            <View>
                                {this.data()}
                            </View>

                        </Animated.View>

                    </SScrollView2>

                </SView>
            </View>
        );
    }
}
