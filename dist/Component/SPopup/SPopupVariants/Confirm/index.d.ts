import { Component } from 'react';
export declare type PropsType = {
    icon?: any;
    title: string;
    message?: string;
    onPress?: () => void;
    onClose?: () => void;
};
export default class Confirm extends Component<PropsType> {
    static defaultProps: {
        title: string;
        message: string;
        onPress: () => void;
        onClose: () => void;
    };
    state: any;
    constructor(props: any);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
