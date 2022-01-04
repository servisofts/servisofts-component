import { Component } from 'react';
declare type Props = {
    onUpload?: Function;
    onPress?: Function;
    placeholder?: string;
    cstyle?: any;
    onChange?: Function;
    defaultValue?: string;
};
export default class DropFileSingle extends Component<Props> {
    state: any;
    constructor(props: any);
    fileUpload: () => Promise<void>;
    getFiles(): any;
    getImages: () => JSX.Element;
    render(): JSX.Element;
}
export {};
