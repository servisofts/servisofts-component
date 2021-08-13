import { Component } from 'react';
declare type SelectAlertProps = {
    onAction: (data: any) => void;
    actionTypes: any;
    data: any;
};
export default class SelectAlert extends Component<SelectAlertProps> {
    state: any;
    constructor(props: any);
    getActions: () => any;
    render(): JSX.Element;
}
export {};
