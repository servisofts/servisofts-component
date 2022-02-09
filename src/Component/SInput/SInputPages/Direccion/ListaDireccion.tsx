import React, { Component } from 'react';
import { Animated, } from 'react-native';
import { SInput } from '../..';
import { SView } from '../../../..';
import SIcon from '../../../SIcon';
import SText from '../../../SText';
import STheme from '../../../STheme';

type typeProps = {
    direccion?: any,
}


class ListaDireccion extends Component<typeProps> {
    animSize;
    state;
    constructor(props) {
        super(props);
        this.state = {
            timeAnim: 350,
        };
        this.animSize = new Animated.Value(0);

    }
    fadeIn() {
        // this.setState({ isOpen: true });
        Animated.timing(this.animSize, {
            toValue: 1,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start();
    }

    fadeOut() {

        Animated.timing(this.animSize, {
            toValue: 0,
            duration: this.state.timeAnim,
            useNativeDriver: true
        }).start(() => {
            // this.setState({ isOpen: false });
        });
    }
    getClose() {
        return <SView style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 40,
            height: 40,
            opacity: this.animSize,
        }} center animated onPress={() => {
            this.fadeOut();
        }}>
            <SIcon name={"Close"} style={{
                width: 25,
                height: 25,
            }} fill={STheme.color.primary} />
        </SView>
    }
    getInput() {
        return <SView col={"xs-12"} center style={{
            padding: 4,
        }}>
            <SInput col={"xs-11"} style={{
                height: 30,
                backgroundColor: STheme.color.primary,
                borderRadius: 4,
                padding: 4,
            }}
                defaultValue={this.props.direccion}
                placeholder={"Direccion..."}
                onFocus={() => this.fadeIn()}
            />
        </SView>
    }
    render() {
        return (
            <SView
                col={"xs-11 sm-10 md-8 lg-7 xl-6"}
                height
                backgroundColor={STheme.color.background + "dd"}
                animated
                style={{
                    position: "absolute",
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    bottom: this.animSize.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-84%", "0%"],
                    }),
                }}>
                <SView height={16} />
                <SView col={"xs-12"} center>
                    <SText fontSize={12}>{"Busca tu direccion o selecciona en el mapa."}</SText>
                </SView>
                <SView height={8} />
                {this.getInput()}
                {this.getClose()}

            </SView>
        );
    }
}
export default ListaDireccion;