/**
 * Created by andrewhurst on 10/5/15.
 */
import { Component } from 'react';
export default class KeyboardSpacer extends Component {
    static propTypes: any;
    static defaultProps: {
        topSpacing: number;
        onToggle: () => any;
    };
    _listeners: any;
    props: any;
    state: any;
    constructor(props: any, context: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateKeyboardSpace(event: any): void;
    resetKeyboardSpace(event: any): void;
    render(): JSX.Element;
}
