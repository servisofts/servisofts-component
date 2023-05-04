
import React, { Component } from 'react';
import { SButtom, SIcon, SLoad, SPage, SText, SView } from '../..';

type typeProps = {
}

class SViewPage extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <SPage title={"SView"}>
                <SView col={"xs-12"} height={50} row>
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} height backgroundColor={"#00f"}></SView>
                    <SLoad type='skeleton' col={"xs-12 sm-10 md-8 lg-6 xl-4"} height />
                    <SView width={50} height backgroundColor={"#0ff"}>
                        <SIcon name={"Girl"} />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
export default SViewPage;