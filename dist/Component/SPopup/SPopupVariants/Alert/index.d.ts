import { Component } from 'react';
export declare type PropsType = {
    icon?: any;
    title?: string;
    message?: string;
    onPress: () => void;
    onClose?: () => void;
};
export default class Alert extends Component<PropsType> {
    constructor(props: any);
    render(): JSX.Element;
}
