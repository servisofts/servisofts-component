import { Component } from 'react';
declare type SImageType = {
    source?: any;
    src?: any;
    style?: any;
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
