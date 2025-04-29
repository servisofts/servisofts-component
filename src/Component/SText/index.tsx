import React, { Component } from 'react';
import { View, Text, TextStyle, TextProps, Dimensions, PixelRatio, Animated } from 'react-native';
import STheme from '../STheme/index';
import SView, { SViewProps } from '../SView/index';
import { FontsType } from '../../font/index';
import SLanguage, { LanguageSource } from '../SLanguage';
export type STextProps = {
    style?: TextStyle,
    primary?: boolean,
    secondary?: boolean,
    fontSize?: number,
    bold?: boolean,
    color?: string,
    underLine?: boolean,
    justify?: boolean,
    capitalize?: boolean,
    font?: FontsType,
    clean?: boolean,
    language?: LanguageSource
} & SViewProps & TextProps

export default class SText extends Component<STextProps> {
    constructor(props: any) {
        super(props);
        this.state = {
        };

    }

    renderText() {
        const fontSize = (this?.props?.fontSize ?? this.props?.style?.fontSize) ?? 14; // Tamaño de fuente base en píxeles
        const ps: any = this.props.style
        let CMP: any = Text;
        if (this.props.language) {
            CMP = SLanguage.Text
        }
        if (this.props.animated) {
            CMP = Animated.createAnimatedComponent(CMP);
        }
        return <CMP
            {...this.props.language ?? {}}
            numberOfLines={this.props.numberOfLines}
            style={{
                ...(this.props.font ? { fontFamily: this.props.font } : (STheme.color.font ? { fontFamily: STheme.color.font } : null)),
                fontSize: fontSize,
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
                ...(!this.props.underLine ? {} : {
                    textDecorationLine: "underline",
                }),
                ...(!this.props.capitalize ? {} : {
                    textTransform: "capitalize",
                }),
                ...(!this.props.justify ? {} : {
                    textAlign: "justify",
                }),
                ...ps
            }} allowFontScaling={false}>{this.props.children}</CMP>
    }
    render() {
        if (this.props.clean) {
            return this.renderText();
        }
        let propsForView = { ...this.props };
        // delete propsForView.animated
        return (<SView {...propsForView}>
            {this.renderText()}
        </SView>
        );

    }
}