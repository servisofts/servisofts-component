import { Component } from 'react';
import { SLoadPropsType } from './type';
export default class SLoad extends Component<SLoadPropsType> {
    props: SLoadPropsType;
    static defaultProps: SLoadPropsType;
    key: any;
    constructor(props: any);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
