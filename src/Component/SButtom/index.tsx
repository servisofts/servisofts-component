import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { STheme } from '../../index';
import DeleteBtn from './DeleteBtn';


export type onSubmitProps = {
    type?: "default" | "outline" | "secondary" | "danger" | "success",
    variant?: "default" | "confirm",
}

export type typeProps = {
    style?: any,
    styleText?: any,
    options?: onSubmitProps,
    props?: onSubmitProps,
    onPress?: Function,
    onPressValidation?: Function,
    //callBack:Function,
}


export class SButtom extends Component<typeProps> {
    static defaultProps = {
        options: {

        },
        style: {
            // width: 100,
            // height: 40,
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
            ...this.props.options,
            ...this.props.props
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
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: STheme.color.secondary,
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
        }
    }
    getVariant(theme?) {
        return {
            "default": {
                touchable: {
                    width: 100,
                    height: 40,
                },
                text: {
                    fontSize: 12,
                }
            },
            "confirm": {
                touchable: {
                    width: 100,
                    height: 40,
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
        return (
            <Component style={{ ...variant.touchable, ...style.touchable, ...this.props.style }}
                styleText={{ ...variant.text, ...style.text }}
                onPress={() => {
                    // if (!this.props.onPressValidation()) return;
                    if (this.props.onPress) this.props.onPress();
                }}>
                <Text style={[variant.text, style.text]}> {this.props.children}</Text>
            </Component >
        );
    }
}

