import React, { Component } from 'react';
import { View, Text, NativeScrollEvent, FlatList, TouchableOpacity, ViewStyle } from 'react-native';
import SScrollView, { onSrollEndEvt } from '../../../SScrollView';
import { SText, SView, SThread, STheme } from '../../../../index';
import SDate from '../../../SDate';
import Countries from './Countries';
import { SPopupClose, SPopupOpen } from '../../../SPopup';
// import SBackground from '../../../SBackground';

type typeConfig = {
    defaultValue?: SDate & any,
}
type typeProps = {
    style?: ViewStyle,
    props?: typeConfig,
    onChange?: (value: boolean) => any
}
export default class SIDialCodeAlert extends Component<typeProps> {
    static getDialCode(dialcode) {
        return Countries.filter((obj) => obj.dialCode == dialcode)[0] || Countries.filter((obj) => obj.code == dialcode)[0];
    }
    static getOpenButtom(dialcode, style, onChange) {
        var notifiChange = false;
        if (!dialcode) {
            dialcode = "+591";
            notifiChange = true;
        }
        var defaultCountry = Countries.filter((obj) => obj.dialCode == dialcode)[0] || Countries.filter((obj) => obj.code == dialcode)[0];
        if (onChange && notifiChange) onChange(defaultCountry);

        // if (!defaultCountry) {
        //     return <View />;
        // }
        return <SView
            props={{
                variant: "center"
            }} style={{
                width: 60,
                height: "100%"
            }}
            onPress={() => {
                SPopupOpen({
                    key: "phonePicker",
                    content: <SIDialCodeAlert
                        props={{
                            defaultValue: "+591"
                        }}
                        onChange={(val) => {
                            if (onChange) onChange(val);
                            SPopupClose("phonePicker")
                        }} />
                })
            }}
        >
            <SView props={{
                direction: "row",
                variant: "center"
            }} style={{
                width: "100%",
            }}>
                <SText style={style}>{defaultCountry.flag}</SText>
                <View style={{
                    width: 4,
                }}></View>
                <SText style={style}>{defaultCountry.dialCode}</SText>
            </SView>
        </SView>
    }



    state
    static defaultProps = {
        props: {},
        style: {}
    }
    constructor(props) {
        super(props);
        this.state = {
            data: Countries
        };

    }
    getLista() {
        return <View style={{
            width: "100%",
            height: "100%",
            alignItems: "center"
        }}>
            <View style={{
                width: "100%",
                marginTop: 4,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
            }}>

            </View>
            {/* <SScrollView disableHorizontal> */}
            <FlatList
                style={{
                    width: "100%",
                    height: "100%"
                }}
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                    ({ item }) => (
                        <View style={{
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                style={{
                                    width: "90%",
                                    height: 35,

                                }}
                                onPress={() => {
                                    if (this.props.onChange) this.props.onChange(item)
                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    flex: 1,
                                    marginTop: 4,
                                    justifyContent: "space-between",
                                    padding: 4,
                                    borderRadius: 4,
                                }}>
                                    <SText style={{
                                        width: 50,
                                        fontSize: 16
                                    }} >{item.flag}</SText>
                                    <SText style={{
                                        flex: 8,
                                    }} props={{ type: "primary" }}>{item.en}</SText>
                                    <SText style={{
                                        flex: 2,
                                    }} props={{ type: "primary" }}>{item.dialCode}</SText>
                                </View>

                                <SView
                                    style={{
                                        backgroundColor: STheme.color.background + "33",
                                        height: 1
                                    }}></SView>
                            </TouchableOpacity>
                        </View>
                    )
                }
            />
            {/* </SScrollView> */}
        </View>

    }
    render() {
        return <SView
            props={{
                col: "xs-11 md-8 xl-6",
                variant: "center",
                withoutFeedback: true,
            }}
            style={{
                // width: "100%",
                height: "100%",
                borderRadius: 8,
            }}>
            {/* <SBackground /> */}
            {this.getLista()}
        </SView>
    }
}
