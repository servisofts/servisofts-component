import React, { Component } from 'react';
import { SPage, SText, SView } from '../../index';


type SListType = {
    data: any,
}
class SList extends Component<SListType> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-12"} height>
                <SText>List</SText>
            </SView>
        );
    }
}

export default SList;