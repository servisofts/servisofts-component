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
    onUpload: any;
    isLoad: any;
    idInstance: any;
    constructor(props: any);
    componentDidMount(): void;
    getFiles(): any;
    esperar: () => Promise<void>;
    getName(name: any): any;
    getImages: () => JSX.Element;
    render(): JSX.Element;
}
export {};
