import { Component } from 'react';
export declare type PropsType = {
    icon?: any;
    title: string;
    message?: string;
    onPress?: (obj: any) => void;
    onClose?: () => void;
};
export default class DateBetween extends Component<PropsType> {
    static defaultProps: {
        title: string;
        message: string;
        onPress: (resp: any) => void;
        onClose: () => void;
    };
    state: any;
    fecha_ini: any;
    fecha_fin: any;
    constructor(props: any);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
