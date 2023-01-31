import { Component } from 'react';
import { ImageStyle } from 'react-native';
declare type SImageType = {
    source?: any;
    src?: any;
    style?: ImageStyle;
    enablePreview?: boolean;
};
export default class SImage extends Component<SImageType> {
    static Instances: {};
    static defaultProps: {
        style: {};
    };
    constructor(props: any);
    getImage(source: any, style?: any): JSX.Element;
    render(): JSX.Element;
}
export {};
