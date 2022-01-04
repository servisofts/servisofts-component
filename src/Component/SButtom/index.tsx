import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SLoad, STheme } from '../../index';
import DeleteBtn from './DeleteBtn';


export type onSubmitProps = {
    type?: "default" | "outline" | "secondary" | "danger" | "success" | "bateonR" | "float",
    variant?: "default" | "confirm",
}

export type typeProps = {
    style?: any,
    styleText?: any,
    options?: onSubmitProps,
    props?: onSubmitProps,
    onPress?: Function,
    onPressValidation?: Function,
    loading?: boolean,
    //callBack:Function,
} & onSubmitProps


export class SButtom extends Component<typeProps> {
    static defaultProps = {
        options: {

        },
        style: {
        },
        onPressValidation: () => { return true }
    };

    constructor(props) {
        super(props);
        this.state = {
        };

    }
    getOption(option) {
        var opt = {
            type: this.props.type,
            variant: this.props.variant,
            ...this.props.options,
            ...this.props.props,

        }
        return !opt[option] ? "default" : opt[option]
    }
    //---RENDER
    getTypes() {
        return {
            default: {
                touchable: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...this.props.style,
                },
                text: {
                    color: STheme.color.secondary,
                    ...this.props.styleText,
                }
            },
            secondary: {
                touchable: {
                    borderRadius: 4,
                    backgroundColor: STheme.color.secondary,
                    borderWidth: 1,
                    borderColor: STheme.color.secondary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...this.props.style,
                },
                text: {
                    color: STheme.color.primary,
                    ...this.props.styleText,

                }
            },
            outline: {
                touchable: {
                    backgroundColor: STheme.color.primary + "88",
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: STheme.color.secondary + "45",
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                text: {
                    color: STheme.color.secondary,
                    ...this.props.styleText
                }
            },
            danger: {
                touchable: {
                    borderRadius: 4,
                    backgroundColor: STheme.color.danger,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                text: {
                    color: STheme.color.secondary,
                    ...this.props.styleText
                }
            },
            success: {
                touchable: {
                    borderRadius: 4,
                    backgroundColor: STheme.color.success,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                text: {
                    color: STheme.color.primary,
                    ...this.props.styleText
                }
            },
            bateonR: {
                touchable: {
                    backgroundColor: STheme.color.bateon + "",
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                text: {
                    color: STheme.color.secondary,
                    ...this.props.styleText
                }
            },
            float: {
                touchable: {
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    bottom: 38,
                    right: 16,
                    ...this.props.style,
                },
                text: {
                    ...this.props.styleText,
                }
            },
        }
    }
    getVariant(theme?) {
        return {
            "default": {
                touchable: {
                    width: 100,
                    height: 50,
                },
                text: {
                    fontSize: 12,
                }
            },
            "confirm": {
                touchable: {
                    width: 100,
                    height: 50,
                },
                text: {
                    fontSize: 12,
                }
            },
        }
    }
    //---RENDER
    styleType
    variant
    render() {
        // var theme = SThemeStyle();
        this.styleType = this.getTypes()
        this.variant = this.getVariant()
        //---RETURN
        var variant = this.variant[this.getOption("variant")]
        var style = this.styleType[this.getOption("type")]
        var Component: any = TouchableOpacity;
        if (this.props.props) {
            if (this.props.props.variant == "confirm") {
                Component = DeleteBtn
            }
        }
        var CONTEN = this.props.children;
        if (typeof this.props.children == "string") {
            CONTEN = <Text style={[variant.text, style.text]}> {this.props.children}</Text>
        }
        if (this.props.loading) {
            CONTEN = <SLoad />
        }
        return (
            <Component style={{ ...variant.touchable, ...style.touchable, ...this.props.style }}
                styleText={{ ...variant.text, ...style.text }}
                onPress={() => {
                    if (this.props.loading) return;
                    // if (!this.props.onPressValidation()) return;
                    if (this.props.onPress) this.props.onPress();
                }}>
                {CONTEN}
            </Component >
        );
    }
}

