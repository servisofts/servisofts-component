import { Component } from 'react';
export declare type onSubmitProps = {
    type?: "default" | "outline" | "secondary" | "danger" | "success" | "bateonR" | "float";
    variant?: "default" | "confirm";
};
export declare type typeProps = {
    style?: any;
    styleText?: any;
    options?: onSubmitProps;
    props?: onSubmitProps;
    onPress?: Function;
    onPressValidation?: Function;
    loading?: boolean;
} & onSubmitProps;
export declare class SButtom extends Component<typeProps> {
    static defaultProps: {
        options: {};
        style: {};
        onPressValidation: () => boolean;
    };
    constructor(props: any);
    getOption(option: any): any;
    getTypes(): {
        default: {
            touchable: any;
            text: any;
        };
        secondary: {
            touchable: any;
            text: any;
        };
        outline: {
            touchable: {
                backgroundColor: string;
                borderRadius: number;
                borderWidth: number;
                borderColor: string;
                justifyContent: string;
                alignItems: string;
            };
            text: any;
        };
        danger: {
            touchable: {
                borderRadius: number;
                backgroundColor: string;
                justifyContent: string;
                alignItems: string;
            };
            text: any;
        };
        success: {
            touchable: {
                borderRadius: number;
                backgroundColor: string;
                justifyContent: string;
                alignItems: string;
            };
            text: any;
        };
        bateonR: {
            touchable: {
                backgroundColor: string;
                borderRadius: number;
                justifyContent: string;
                alignItems: string;
            };
            text: any;
        };
        float: {
            touchable: any;
            text: any;
        };
    };
    getVariant(theme?: any): {
        default: {
            touchable: {
                width: number;
                height: number;
            };
            text: {
                fontSize: number;
            };
        };
        confirm: {
            touchable: {
                width: number;
                height: number;
            };
            text: {
                fontSize: number;
            };
        };
    };
    styleType: any;
    variant: any;
    render(): JSX.Element;
}
