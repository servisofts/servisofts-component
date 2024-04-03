import React, { Component } from 'react';
import { View, Text, Animated, ViewStyle } from 'react-native';
import { SColType, TColKey, TColKeyConv } from '../../Types/index';
import SComponentContainer from '../SComponentContainer/index';
import { SUuid } from '../SUuid/index';
import { SViewProps } from '../SView/index';

export type SGridProps = {
    col: SColType,
    colHidden?: TColKeyConv,
    style: ViewStyle,
    colSquare?: boolean,
    animated?: boolean,
    flex?: Number | boolean,
    margin?: any,
    height?: any,
    onLayout?: (event: any) => void,
    getValue?: () => any,
    setValue?: (event: any) => void,
    children?: any,
}

export default class SGrid extends Component<SGridProps> {
    key: string;
    animSize: any;
    medida = "xs";
    layout;
    state;
    constructor(props: any) {
        super(props);
        this.state = {
            x: 100,
            y: 0
        };
        this.animSize = new Animated.ValueXY({ x: 100, y: 0 });
        this.key = SUuid();
    }
    getMax = (col) => {
        if (!col) return 0;
        var options = ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"];
        var index = options.indexOf(this.medida);
        for (let i = index; i >= 0; i--) {
            const mtmp = options[i];
            if (col[mtmp]) {
                return col[mtmp];
            } else {
                if (this.medida == "xxs") {
                    return col["xs"]
                }
            }
        }
        return 0;
    }

    setSize() {
        var col;
        if (this.props.colHidden) {
            if (this.props.colHidden.indexOf(this.medida) > -1) {
                this.setState({ hidden: true });
                return null;
            } else if (this.state.hidden) {
                this.setState({ hidden: false });
            }
        }
        if (typeof this.props.col == "string") {
            col = {};
            var text: string = this.props.col;
            text = text.trim();
            text.split(" ").map((row) => {
                var cols = /((xxs|xs|sm|md|lg|xl|xxl)-(([0-9]{1,2}.[0-9])|([0-9]{1,2})))/.exec(row);
                if (cols[2] && cols[3]) {
                    col[cols[2]] = cols[3];
                }
            })
            var max = this.getMax(col);

            if (max == "0" && !this.state.hidden) {
                this.setState({ hidden: true })
            } else if (max != 0 && this.state.hidden) {
                this.setState({ hidden: false })
            }
            this.setValue({ x: (max * 100) / 12, y: this.state.y })
        } else {
            col = this.props.col;
        }

    }

    // shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): any {
    //     return nextState.x !== this.state.x
    // }
    componentDidMount() {
        SComponentContainer.registerGrid(this.key, this);
    }
    componentWillUnmount() {
        SComponentContainer.removeGrid(this.key);
    }
    changeMedida(medida) {
        this.medida = medida;
        this.setSize();
    }
    setValue({ x, y }) {
        if (x) {
            if (this.state.x !== x) {
                this.setState({ x })
            }
        }
        if (y) {
            if (this.state.y !== y) {
                this.setState({ y })
            }
        }


        // this.animSize.setValue({ x, y });
    }

    getValue() {
        return this.state;
    }

    render() {
        const size = this.getValue()
        let Element: any = View;
        if (this.props.animated) {
            Element = Animated.createAnimatedComponent(Element);
        }
        if (this.state.hidden) return null;
        return (
            <Element
                // key={SUuid()}
                style={{
                    ...(!this.props.style.position ? {} : { position: this.props.style.position, }),
                    ...(!this.props.style.flex ? {} : { flex: this.props.style.flex, }),
                    ...(!this.props.flex ? {} : { flex: this.props.flex == true ? 1 : parseInt(this.props.flex + "") }),
                    ...(!this.props.style.height ? {} : { height: this.props.style.height, }),
                    ...(!this.props.style.maxHeight ? {} : { maxHeight: this.props.style.maxHeight, }),
                    ...(!this.props.style.maxWidth ? {} : { maxWidth: this.props.style.maxWidth, }),
                    ...(!this.props.style.width ? {} : { width: this.props.style.width, }),
                    ...(!this.props.colSquare ? {} : (!this.props.col ? { width: size.x } : { height: size.y })),
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
                    ...(this.props.margin == null ? {} : { padding: this.props.margin }),
                    ...(!this.props.col ? {} : {
                        width: size.x + "%",
                    }),

                }}
                onLayout={(evt) => {
                    this.layout = evt.nativeEvent.layout;
                    if (this.props.colSquare) {
                        const size = this.getValue()
                        if (this.props.col) {
                            this.setValue({ x: size.x, y: this.layout.width });
                        } else if (this.layout.height != size.x) {
                            this.setValue({ x: this.layout.height, y: this.layout.height });
                        }
                    }


                    if (this.props.onLayout) this.props.onLayout(evt);

                }}>
                {this.props.children}
            </Element >
        );

    }
}