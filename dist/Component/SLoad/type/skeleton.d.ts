import { Component } from 'react';
import { Animated } from 'react-native';
import { SLoadPropsType } from '../type';
export default class skeleton extends Component<SLoadPropsType> {
    props: SLoadPropsType;
    animation: Animated.Value;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
