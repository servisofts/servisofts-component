import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SGradient, SPage, SView } from '../..';

class SGradientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SPage title={"SGradient"}>
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 md-8"} center>
                        <SView height={16} />
                        <SView col={"xs-12"} center card height={100}>
                            <SView width={80} height={80} style={{
                                borderRadius: 4,
                                overflow: 'hidden',
                            }}>
                                <SGradient colors={["#f0f","#f00","#f00"]}/>
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </SPage>
        );
    }
}
export default SGradientPage;