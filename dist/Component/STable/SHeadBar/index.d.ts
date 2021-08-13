import { Component } from 'react';
declare type SHeadBarProps = {
    reload: () => void;
    onAdd: any;
    buscar: any;
};
export default class SHeadBar extends Component<SHeadBarProps> {
    constructor(props: any);
    getAdd(): JSX.Element;
    render(): JSX.Element;
}
export {};
