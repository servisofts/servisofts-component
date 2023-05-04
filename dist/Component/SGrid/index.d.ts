import { Component } from 'react';
import { ViewStyle } from 'react-native';
import { SColType } from '../../Types/index';
export declare type SGridProps = {
    col: SColType;
    style: ViewStyle;
    colSquare?: boolean;
    flex?: Number | boolean;
    margin?: any;
    height?: any;
    onLayout?: (event: any) => void;
    getValue?: () => any;
    setValue?: (event: any) => void;
};
export default class SGrid extends Component<SGridProps> {
    key: string;
    animSize: any;
    medida: string;
    layout: any;
    state: any;
    constructor(props: any);
    getMax: (col: any) => any;
    setSize(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    changeMedida(medida: any): void;
    setValue({ x, y }: {
        x: any;
        y: any;
    }): void;
    getValue(): any;
    render(): JSX.Element;
}
