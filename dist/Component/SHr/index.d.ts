import { Component } from 'react';
declare type SHr_Props = {
    height?: number;
    color?: string;
};
export default class SHr extends Component<SHr_Props> {
    static defaultProps: {
        height: number;
    };
    render(): JSX.Element;
}
export {};
