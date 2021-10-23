import { Component } from 'react';
import { PropsType as ConfirmProps } from './SPopupVariants/Confirm/index';
declare type SPopupOpenProps = {
    key?: string;
    content: any;
    style?: any;
};
export declare const SPopupOpen: ({ key, content, style }: SPopupOpenProps) => void;
export declare const SPopupClose: (key: any) => void;
export default class SPopup extends Component {
    static confirm(props: ConfirmProps): void;
    static alert(text: any): void;
    static dateBetween(text: any, onPress: any): void;
    static open(obj: SPopupOpenProps): void;
    static close(key?: string): void;
    state: any;
    constructor(props: any);
    componentDidMount(): void;
    open({ key, content, style }: {
        key: any;
        content: any;
        style: any;
    }): void;
    closeAll(): void;
    close(key: any): void;
    getPopups(): JSX.Element[];
    render(): JSX.Element;
}
export {};
