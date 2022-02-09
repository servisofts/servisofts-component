import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SPage } from '../..';
import STable2 from '../../Component/STable2';

const DataTest = {
    "1": { "key": "1", "name": "A", "value": "123" },
    "2": { "key": "2", "name": "B", "value": "456" },
    "3": { "key": "3", "name": "C", "value": "789" },
    "4": { "key": "4", "name": "D", "value": "101112" },
    "5": { "key": "5", "name": "E", "value": "131415" },
    "6": { "key": "6", "name": "F", "value": "161718" },
    "7": { "key": "7", "name": "G", "value": "192021" }
};
export default class NewTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={"STable"} disableScroll>
                <STable2
                    header={[
                        { key: "index", label: "#", width: 35, },
                        { key: "name", label: "Nombre", width: 100, }, 
                        { key: "value", label: "value", width: 100, }
                    ]}
                    data={DataTest}
                />
            </SPage>
        );
    }
}
