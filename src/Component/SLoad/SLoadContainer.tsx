import React, { Component } from 'react';
import { SLoadContainerPropsType } from './type';
import _type from "./type"
export default class SLoadContainer extends Component<SLoadContainerPropsType> {
    props: SLoadContainerPropsType;
    static INSTANCE: SLoadContainer;

    static add(o) {
        if (!this.INSTANCE) return;
        this.INSTANCE.setState({ ...o })
    }
    static remove(key) {
        if (!this.INSTANCE) return;
        delete this.INSTANCE.state[key]
        this.INSTANCE.setState({ ...this.INSTANCE.state })
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        SLoadContainer.INSTANCE = this;
        return <>{Object.values(this.state).map(o => o)}</>
    }
}