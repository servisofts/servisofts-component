import React, { Component } from 'react';


type SSectionType = {
    key: string,
}
class SSection extends Component<SSectionType> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<>{this.props.children}</>);
    }
}

export default SSection;