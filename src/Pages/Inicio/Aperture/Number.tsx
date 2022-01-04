import React, { Component } from 'react';
import { Animated } from 'react-native';
import { SIcon, SText, STheme, SView } from '../../../index';
type typeProps = {
}

class Number extends Component<typeProps> {
    anim;
    constructor(props) {
        super(props);
        this.state = {
        };
        this.anim = new Animated.Value(0);

    }


    render() {
        return (
            <SView center animated style={{
                
            }}>
                <SText fontSize={30} bold>1</SText>
            </SView>
        );
    }
}
export default Number;