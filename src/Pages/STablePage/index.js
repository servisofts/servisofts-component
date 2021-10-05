import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SPage } from '../..';
import STable from '../../Component/STable';
export default class STablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={"STable"} disableScroll>
                <STable
                    header={[
                        { key: "index", label: "#", width: 35, },
                    ]}
                    data={{
                        "1":{},
                        "2":{},
                        "3":{},
                        "4":{},
                        "5":{},
                        "6":{},
                        "7":{},
                        "8":{},
                        "9":{},
                        "10":{},
                        "11":{},
                        "12":{},
                        "13":{},
                        "14":{},
                        "15":{},
                        "16":{},
                        "17":{},
                        "18":{},
                    }}
                />
            </SPage>
        );
    }
}
