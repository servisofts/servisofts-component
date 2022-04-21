import React, { Component } from 'react';
import { SText, SPage, SButtom, SLocation, SHr } from '../index';

export default class SLocationPage extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            position: {}
        };
    }

    render() {
        return (
            <SPage title={'SLocationPage'}>
                <SText>{'POSITION'}</SText>
                <SText>{JSON.stringify(this.state.position)}</SText>
                <SHr />
                <SHr />
                <SButtom type={"danger"} onPress={() => {
                    SLocation.getCurrentPosition().then((position) => {
                        this.setState({ position: position });
                    }).catch((error) => {
                        console.log(error);
                        this.setState({ position: error });
                    })
                }}>GET MY LOCATION</SButtom>
                <SHr />
                <SHr />
                <SText>{`
                import { SLocation } from 'servisofts-component';

                 <SButtom type={"danger"} onPress={() => {
                    SLocation.getCurrentPosition().then((position) => {
                        // this.setState({ position: position });
                    }).catch((error) => {
                        console.log(error);
                        // this.setState({ position: error });
                    })
                }}>GET MY LOCATION</SButtom>
                `}</SText>


            </SPage>
        );
    }
}
