import { Component } from 'react';
declare type Props = {
    onUpload?: Function;
    onPress?: Function;
    placeholder?: string;
    cstyle?: any;
    onChange?: Function;
    defaultValue?: string;
    accept?: string;
};
export default class DropFile extends Component<Props> {
    files: any;
    state: any;
    constructor(props: any);
    getName(name: any): any;
    getExtension(name: any): any;
    getImages: () => JSX.Element;
    render(): JSX.Element;
}
export {};
