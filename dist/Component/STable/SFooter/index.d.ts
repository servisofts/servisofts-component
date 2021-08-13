import { Component } from 'react';
import { ViewStyle } from 'react-native';
declare type SType = {
    data: Object;
    header: [Object];
    style: ViewStyle;
    setHeader: (data: Object) => void;
};
export default class SFooter extends Component<SType> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
