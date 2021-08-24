import { Component } from 'react';
export declare type typeSDebugBar = {
    debug: boolean;
};
export default class DebugBar extends Component<typeSDebugBar> {
    state: any;
    constructor(props: any);
    register(): void;
    render(): JSX.Element;
}
