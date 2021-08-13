import React, { Component } from 'react';
import { View, Text, TextStyle } from 'react-native';
import STheme from '../STheme/index';
import SView, { SViewProps } from '../SView/index';


export type STextProps = {
    style?: TextStyle | [TextStyle] | any,
    primary?: boolean,
    fontSize?: number,
    bold?: boolean,
    color?: string,
    underLine?: boolean,
    justify?: boolean
} & SViewProps

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
                    color: STheme.color.secondary,
                    ...(!this.props.center ? {} : {
                        textAlign: "center",
                    }),
                    ...(!this.props.primary ? {} : {
                        color: STheme.color.primary
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
                    ...(!this.props.justify ? {} : {
                        textAlign: "justify",
                    }),
                    ...this.props.style
                }}>{this.props.children}</Text>
            </SView>
        );

    }
}