import { Component } from 'react';
import { SLoadContainerPropsType } from './type';
export default class SLoadContainer extends Component<SLoadContainerPropsType> {
    props: SLoadContainerPropsType;
    static INSTANCE: SLoadContainer;
    static add(o: any): void;
    static remove(key: any): void;
    constructor(props: any);
    render(): unknown[];
}
