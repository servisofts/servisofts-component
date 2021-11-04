import React, { Component } from 'react';
import { View, Text, Animated, ViewStyle } from 'react-native';
import { SColType } from '../../Types/index';
import SComponentContainer from '../SComponentContainer/index';
import { SUuid } from '../SUuid/index';
import { SViewProps } from '../SView/index';

export type SGridProps = {
    col: SColType,
    style: ViewStyle,
    colSquare?: boolean,
    flex?: Number | boolean,
    height?: any,
    onLayout?: (event: any) => void,
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
            var text: string = this.props.col;
            text = text.trim();
            text.split(" ").map((row) => {
                var cols = /((xs|sm|md|lg|xl)-(([0-9]{1,2}.[0-9])|([0-9]{1,2})))/.exec(row);
                if (cols[2] && cols[3]) {
                    col[cols[2]] = cols[3];
                }
            })
            var max = this.getMax(col);
            this.animSize.setValue({ x: (max * 100) / 12, y: this.animSize.y._value });
        } else {
            col = this.props.col;
        }

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
                ...(!this.props.style.position ? {} : { position: this.props.style.position, }),
                ...(!this.props.style.flex ? {} : { flex: this.props.style.flex, }),
                ...(!this.props.flex ? {} : { flex: this.props.flex == true ? 1 : this.props.flex }),
                ...(!this.props.style.height ? {} : { height: this.props.style.height, }),
                ...(!this.props.style.maxHeight ? {} : { maxHeight: this.props.style.maxHeight, }),
                ...(!this.props.style.maxWidth ? {} : { maxWidth: this.props.style.maxWidth, }),
                ...(!this.props.style.width ? {} : { width: this.props.style.width, }),
                ...(!this.props.colSquare ? {} : (!this.props.col ? { width: this.animSize.x } : { height: this.animSize.y })),
                ...(!this.props.height ? {} : { height: this.props.height == true ? "100%" : this.props.height }),
                ...(!this.props.style.zIndex ? {} : { zIndex: this.props.style.zIndex, }),
                ...(this.props.style.margin == null ? {} : { margin: this.props.style.margin }),
                ...(this.props.style.marginBottom == null ? {} : { marginBottom: this.props.style.marginBottom }),
                ...(this.props.style.marginTop == null ? {} : { marginTop: this.props.style.marginTop }),
                ...(this.props.style.marginLeft == null ? {} : { marginLeft: this.props.style.marginLeft }),
                ...(this.props.style.marginRight == null ? {} : { marginRight: this.props.style.marginRight }),
                ...(this.props.style.marginStart == null ? {} : { marginStart: this.props.style.marginStart }),
                ...(this.props.style.marginEnd == null ? {} : { marginEnd: this.props.style.marginEnd }),
                ...(this.props.style.top == null ? {} : { top: this.props.style.top }),
                ...(this.props.style.bottom == null ? {} : { bottom: this.props.style.bottom }),
                ...(this.props.style.left == null ? {} : { left: this.props.style.left }),
                ...(this.props.style.right == null ? {} : { right: this.props.style.right }),
                ...(!this.props.col ? {} : {
                    width: this.animSize.x.interpolate({
                        inputRange: [0, 100],
                        outputRange: ["0%", "100%"]
                    }),
                }),

            }}
                onLayout={(evt) => {
                    this.layout = evt.nativeEvent.layout;

                    if (this.props.colSquare) {
                        if ( this.props.col) {
                            this.animSize.setValue({ x: this.animSize.x._value, y: this.layout.width });
                        } else if (this.layout.height != this.animSize.x._value) {
                            this.animSize.setValue({ x: this.layout.height, y: this.layout.height });
                        }
                    }


                    if (this.props.onLayout) this.props.onLayout(evt);

                }}>
                {this.props.children}
            </Animated.View >
        );

    }
}