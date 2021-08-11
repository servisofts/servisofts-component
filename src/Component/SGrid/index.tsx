import React, { Component } from 'react';
import { View, Text, Animated, ViewStyle } from 'react-native';
import { SColType } from '../../Types/index';
import SComponentContainer from '../SComponentContainer/index';
import { SUuid } from '../SUuid/index';
import { SViewProps } from '../SView/index';

export type SGridProps = {
    col: SColType,
    style: ViewStyle,
    colSquare?: boolean
}

export default class SGrid extends Component<SGridProps> {
    key: string;
    animSize;
    medida;
    layout;
    constructor(props: any) {
        super(props);
        this.state = {
        };
        this.animSize = new Animated.ValueXY({ x: 100, y: 0 });
        this.key = SUuid();
    }
    getMax = (col) => {
        if (!col) return 0;
        var options = ["xs", "sm", "md", "lg", "xl"];
        var index = options.indexOf(this.medida);
        for (let i = index; i >= 0; i--) {
            const mtmp = options[i];
            if (col[mtmp]) {
                return col[mtmp];
            }
        }
        return 0;
    }
    setSize() {
        var col;
        if (typeof this.props.col == "string") {
            col = {};
            var text:string = this.props.col;
            text = text.trim();
            text.split(" ").map((row) => {
                var cols = /((xs|sm|md|lg|xl)-(([0-9]{1,2}.[0-9])|([0-9]{1,2})))/.exec(row);
                if (cols[2] && cols[3]) {
                    col[cols[2]] = cols[3];
                }
            })
        } else {
            col = this.props.col;
        }
        var max = this.getMax(col);
        this.animSize.setValue({ x: (max * 100) / 12, y: this.animSize.y._value });
    }
    changeMedida(medida) {
        this.medida = medida;
        this.setSize();
    }
    componentDidMount() {
        SComponentContainer.registerGrid(this.key, this);
    }
    componentWillUnmount() {
        SComponentContainer.removeGrid(this.key);
    }
    render() {
        return (
            <Animated.View style={{
                ...(!this.props.style.flex ? {} : {
                    flex: this.props.style.flex,
                }),
                ...(!this.props.style.height ? {} : {
                    height: this.props.style.height,
                }),
                ...(!this.props.col ? {} : {
                    width: this.animSize.x.interpolate({
                        inputRange: [0, 100],
                        outputRange: ["0%", "100%"]
                    }),
                }),
                ...(!this.props.colSquare ? {} : {
                    height: this.animSize.y,
                }),
                ...(!this.props.style.width ? {} : {
                    width: this.props.style.width,
                }),
            }} onLayout={(evt) => {
                this.layout = evt.nativeEvent.layout;
                this.animSize.setValue({ x: this.animSize.x._value, y: this.layout.width });
            }}>
                {this.props.children}
            </Animated.View>
        );

    }
}