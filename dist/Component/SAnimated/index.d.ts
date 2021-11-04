import { Component } from 'react';
import { ViewStyle } from 'react-native';
declare type typeConfig = {
    type: 'default';
    variant: 'default';
};
declare type typeProps = {
    style: ViewStyle;
    options: typeConfig;
};
export declare class SAnimated extends Component<typeProps> {
    styleType: any;
    variant: any;
    constructor(props: any);
    getOption(option: any): any;
    getTypes(): {
        default: {
            view: {
                backfaceVisibility?: "hidden" | "visible";
                backgroundColor: string;
                borderBottomColor?: string;
                borderBottomEndRadius?: number;
                borderBottomLeftRadius?: number;
                borderBottomRightRadius?: number;
                borderBottomStartRadius?: number;
                borderBottomWidth?: number;
                borderColor: string;
                borderEndColor?: string;
                borderLeftColor?: string;
                borderLeftWidth?: number;
                borderRadius: number;
                borderRightColor?: string;
                borderRightWidth?: number;
                borderStartColor?: string;
                borderStyle?: "solid" | "dotted" | "dashed";
                borderTopColor?: string;
                borderTopEndRadius?: number;
                borderTopLeftRadius?: number;
                borderTopRightRadius?: number;
                borderTopStartRadius?: number;
                borderTopWidth?: number;
                borderWidth: number;
                opacity?: number;
                testID?: string;
                elevation?: number;
                alignContent?: "center" | "space-around" | "flex-start" | "flex-end" | "space-between" | "stretch";
                alignItems: import("react-native").FlexAlignType;
                alignSelf?: "auto" | import("react-native").FlexAlignType;
                aspectRatio?: number;
                borderEndWidth?: string | number;
                borderStartWidth?: string | number;
                bottom?: string | number;
                display?: "flex" | "none";
                end?: string | number;
                flex?: number;
                flexBasis?: string | number;
                flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
                flexGrow?: number;
                flexShrink?: number;
                flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
                height?: string | number;
                justifyContent: "center" | "space-around" | "flex-start" | "flex-end" | "space-between" | "space-evenly";
                left?: string | number;
                margin?: string | number;
                marginBottom?: string | number;
                marginEnd?: string | number;
                marginHorizontal?: string | number;
                marginLeft?: string | number;
                marginRight?: string | number;
                marginStart?: string | number;
                marginTop?: string | number;
                marginVertical?: string | number;
                maxHeight?: string | number;
                maxWidth?: string | number;
                minHeight?: string | number;
                minWidth?: string | number;
                overflow?: "hidden" | "visible" | "scroll";
                padding?: string | number;
                paddingBottom?: string | number;
                paddingEnd?: string | number;
                paddingHorizontal?: string | number;
                paddingLeft?: string | number;
                paddingRight?: string | number;
                paddingStart?: string | number;
                paddingTop?: string | number;
                paddingVertical?: string | number;
                position?: "absolute" | "relative";
                right?: string | number;
                start?: string | number;
                top?: string | number;
                width?: string | number;
                zIndex?: number;
                direction?: "inherit" | "ltr" | "rtl";
                shadowColor?: string;
                shadowOffset?: {
                    width: number;
                    height: number;
                };
                shadowOpacity?: number;
                shadowRadius?: number;
                transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform)[];
                transformMatrix?: number[];
                rotation?: number;
                scaleX?: number;
                scaleY?: number;
                translateX?: number;
                translateY?: number;
            };
        };
    };
    getVariant(): {
        default: {
            view: {
                flex: number;
                width: string;
                height: string;
            };
        };
    };
    render(): JSX.Element;
}
export {};
