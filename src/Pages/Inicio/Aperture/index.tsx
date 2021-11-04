import React, { Component } from 'react';
import { SIcon, SText, STheme, SView } from '../../../index';
import Number from './Number';
type typeProps = {
}

class Aperture extends Component<typeProps> {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    getNumber = (number) => {
        return <Number />
    }
    render() {
        return (
            <SView style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: STheme.color.primary,
            }} center>
                <SText fontSize={20} bold>Servisofts</SText>
                <SText fontSize={20} bold>Component</SText>
                {this.getNumber(1)}
            </SView>
        );
    }
}
export default Aperture;