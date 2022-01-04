import React, { Component } from 'react';
import { View, Text, TextStyle, TextProps } from 'react-native';
import STheme from '../STheme/index';
import SView, { SViewProps } from '../SView/index';
import { FontsType } from '../../font/index';
import { SThemeColors } from '../STheme'
export type STextProps = {
    style?: TextStyle | [TextStyle] | any,
    primary?: boolean,
    secondary?: boolean,
    fontSize?: number,
    bold?: boolean,
    color?: string,
    underLine?: boolean,
    justify?: boolean,
    capitalize?: boolean,
    font?: FontsType,
} & SViewProps & TextProps

export default class SText extends Component<STextProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SView {...this.props}>
                <Text style={{
                    ...(this.props.font ? { fontFamily: this.props.font } : (STheme.color.font ? { fontFamily: STheme.color.font } : null)),
                    color: !STheme.color.text ? STheme.color.secondary : STheme.color.text,
                    ...(!this.props.center ? {} : {
                        textAlign: "center",
                    }),
                    ...(!this.props.primary ? {} : {
                        color: STheme.color.primary
                    }),
                    ...(!this.props.secondary ? {} : {
                        color: STheme.color.secondary
                    }),
                    ...(!this.props.color ? {} : {
                        color: this.props.color
                    }),
                    ...(!this.props.bold ? {} : {
                        fontWeight: "bold",
                    }),
                    ...(!this.props.fontSize ? {} : {
                        fontSize: this.props.fontSize
                    }),
                    ...(!this.props.underLine ? {} : {
                        textDecorationLine: "underline",
                    }),
                    ...(!this.props.capitalize ? {} : {
                        textTransform: "capitalize",
                    }),
                    ...(!this.props.justify ? {} : {
                        textAlign: "justify",
                    }),
                    ...this.props.style
                }}>{this.props.children}</Text>
            </SView>
        );

    }
}