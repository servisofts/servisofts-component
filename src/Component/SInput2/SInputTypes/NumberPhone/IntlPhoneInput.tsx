import React from 'react';
import { View, Text, Modal, FlatList, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput, Platform, } from 'react-native';
import PropTypes from 'prop-types';
import data from './Countries';
// import { SafeAreaView } from 'react-navigation';
// import Buscador from '../../Component/Inicio/Buscador';
// import CloseButtom from '../../../Component/CloseButtom';
// import BackgroundImage from '../../BackgroundImage';



export default class IntlPhoneInput extends React.Component {
    props
    state
    constructor(props) {
        super(props);
        var telefono = props.defaultValue;
        var phone = "";
        var dialCode = "+591";
        if (telefono) {
            phone = telefono.split(" ")[1];
            dialCode = telefono.split(" ")[0];
        }

        const defaultCountry = data.filter((obj) => obj.dialCode === dialCode)[0] || data.filter((obj) => obj.code === 'BO')[0];
        this.state = {
            defaultCountry,
            flag: defaultCountry.flag,
            modalVisible: false,
            dialCode: defaultCountry.dialCode,
            phoneNumber: phone,
            mask: defaultCountry.mask,
            countryData: data,
            selectedCountry: defaultCountry
        };
    }

    onChangePropText = (unmaskedPhoneNumber, phoneNumber) => {
        const { dialCode, mask, selectedCountry }: any = this.state;
        const countOfNumber = mask.match(/9/g).length;
        if (this.props.onChangeText) {
            const isVerified = countOfNumber === unmaskedPhoneNumber?.length && phoneNumber?.length > 0;
            this.props.onChangeText({
                dialCode, unmaskedPhoneNumber, phoneNumber, isVerified, selectedCountry
            });
        }
    }

    onChangeText = (value) => {
        let unmaskedPhoneNumber = (value.match(/\d+/g) || []).join('');

        if (unmaskedPhoneNumber.length === 0) {
            this.setState({ phoneNumber: '' });
            this.onChangePropText('', '');
            return;
        }


        let phoneNumber = this.state.mask.replace(/9/g, '_');
        for (let index = 0; index < unmaskedPhoneNumber.length; index += 1) {
            phoneNumber = phoneNumber.replace('_', unmaskedPhoneNumber[index]);
        }
        let numberPointer = 0;
        for (let index = phoneNumber.length; index > 0; index -= 1) {
            if (phoneNumber[index] !== ' ' && !isNaN(phoneNumber[index])) {
                numberPointer = index;
                break;
            }
        }
        phoneNumber = phoneNumber.slice(0, numberPointer + 1);
        unmaskedPhoneNumber = (phoneNumber.match(/\d+/g) || []).join('');

        this.onChangePropText(unmaskedPhoneNumber, phoneNumber);
        this.setState({ phoneNumber });
    }


    showModal = () => (this.props.disableCountryChange ? null : this.setState({ modalVisible: true }));

    hideModal = () => this.setState({ modalVisible: false });

    onCountryChange = async (code) => {
        const countryData = await data;
        try {
            const country = await countryData.filter((obj) => obj.code === code)[0];
            this.setState({
                dialCode: country.dialCode,
                flag: country.flag,
                mask: country.mask,
                phoneNumber: '',
                selectedCountry: country
            });
            this.hideModal();
        } catch (err) {
            const defaultCountry = this.state.defaultCountry;
            this.setState({
                dialCode: defaultCountry.dialCode,
                flag: defaultCountry.flag,
                mask: defaultCountry.mask,
                phoneNumber: '',
                selectedCountry: defaultCountry
            });
        }
    }

    filterCountries = (value) => {
        const { lang
        } = this.props;
        const countryData = data.filter((obj) => (obj[lang?.toLowerCase() ?? "en"]?.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1));
        this.setState({ countryData });
    }

    focus() {
        this.props.inputRef.current.focus();
    }

    renderModal = () => {
        if (this.props.customModal) return this.props.customModal(this.state.modalVisible, this.state.countryData, this.onCountryChange);
        const {
            countryModalStyle,
            modalContainer,
            modalFlagStyle,
            filterInputStyle,
            modalCountryItemCountryNameStyle,
            modalCountryItemCountryDialCodeStyle,
            closeText,
            filterText,
            searchIconStyle,
            closeButtonStyle,
            lang
        } = this.props;

        return (

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
                <View style={{
                    flex: 1,
                    backgroundColor: "#000"
                    // backgroundColor: style.colors.fondo
                }}>
                    {/* <BackgroundImage /> */}
                    <View style={{
                        flex: 1,
                        width: "100%",
                        alignItems: "center"
                    }}>
                        <View style={{
                            width: "100%",
                            marginTop: 4,
                            height: 70,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                        }}>

                            {/* <Buscador onChange={this.filterCountries} propsImput={{
                                autoFocus: true,
                                placeholder: "ESCRIBA EL PAIS DE SU INTERÉS"
                            }}
                                styleImput={{
                                    marginTop: 10,
                                    top: 0,
                                    left: 8,
                                    width: "80%",
                                    position: "relative"
                                }} /> */}
                        </View>

                        <FlatList
                            style={{
                                width: "100%",
                            }}
                            data={this.state.countryData}
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
                                            onPress={() => (
                                                this.onCountryChange(item.code)
                                            )}>
                                            <View style={{
                                                flexDirection: "row",
                                                flex: 1,
                                                marginTop: 4,
                                                justifyContent: "space-between",
                                                padding: 4,
                                                borderRadius: 4,
                                            }}>
                                                <View style={{

                                                    width: 50,
                                                }}>
                                                    <Text>{item.flag}</Text>
                                                </View>
                                                <View style={{
                                                    flex: 8,
                                                }}>
                                                    <Text style={{
                                                        color: "#fff",
                                                    }} >{item.en}</Text>
                                                </View>
                                                <View style={{
                                                    flex: 2
                                                }}>
                                                    <Text style={{
                                                        color: "#fff"
                                                    }}>{item.dialCode}</Text>
                                                </View>
                                            </View>

                                            <View style={{
                                                height: 1,
                                                backgroundColor: '#ffffff44'
                                            }} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        />
                    </View>


                    {/* <CloseButtom left={false} close={() => {
                        this.hideModal()
                    }} /> */}


                </View>

            </Modal >
        );
    }

    renderAction = () => {
        const renderAction = this.props.renderAction;
        if (renderAction) {
            console.log("action", renderAction);
            if (typeof renderAction !== "function") throw ("The renderAction is not a function. Please set a renderAction function on there");
            else return this.props.renderAction();
        }
        return null;
    }

    render() {
        const { flag } = this.state;
        const {
            containerStyle,
            flagStyle,
            phoneInputStyle,
            dialCodeTextStyle,
            inputProps
        } = this.props;
        return (
            <View style={{ ...styles.container, ...containerStyle, flexDirection: "row" }}>
                <TouchableOpacity onPress={() => this.showModal()}>
                    <View style={{
                        ...styles.openDialogView,
                        flexDirection: "row",
                        // justifyContent:"center",
                        alignItems: "center",
                        marginRight: 4,
                    }}>
                        <Text style={[styles.flagStyle, flagStyle]}>{flag}</Text>
                        <Text style={[styles.dialCodeTextStyle, dialCodeTextStyle]}>{this.state.dialCode}</Text>
                    </View>
                </TouchableOpacity>
                <TextInput
                    {...inputProps}
                    style={{
                        ...styles.phoneInputStyle, ...phoneInputStyle,
                        // margin:0,
                        // padding:0,
                        // backgroundColor:"#f00"
                    }}
                    placeholder={this.props.placeholder || this.state.mask.replace(/9/g, '_')}
                    autoCorrect={false}
                    keyboardType="number-pad"
                    secureTextEntry={false}
                    value={this.state.phoneNumber}
                    onChangeText={(text) => this.onChangeText(text)}
                />
                {this.renderModal()}
                {this.renderAction()}

            </View>


        );
    }
}



const styles = StyleSheet.create({
    closeTextStyle: {
        padding: 5,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    modalCountryItemCountryDialCodeStyle: {
        fontSize: 15,
        color: "#fff"
    },
    modalCountryItemCountryNameStyle: {
        flex: 1,
        fontSize: 15,
        color: "#fff",
    },
    modalCountryItemContainer: {
        flex: 1,
        paddingLeft: 5,
        flexDirection: 'row',
    },
    modalFlagStyle: {
        fontSize: 25,
    },

    modalContainer: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        flex: 10,
        backgroundColor: '#00DDF4'
    },

    flagStyle: {
        fontSize: 22,
    },
    dialCodeTextStyle: {
        color: "#fff"
    },
    countryModalStyle: {
        flex: 1,
        borderColor: 'black',
        borderTopWidth: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    openDialogView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    filterInputStyle: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#00DDF4',
        color: '#424242',
    },
    searchIcon: {
        padding: 10,
    },
    filterInputStyleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    phoneInputStyle: {
        // marginLeft: 5,
        flex: 1,
        width: "100%",
        color: "#fff"
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIconStyle: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15
    },
    buttonStyle: {
        alignItems: 'center',
        padding: 14,
        borderRadius: 3,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    countryStyle: {
        flex: 1,
        borderColor: 'black',
        borderTopWidth: 1,
        padding: 12,
    },
    closeButtonStyle: {
        padding: 12,
        alignItems: 'center',

    },
    buscar: {
        borderColor: "#fff",
        color: "#fff",
        marginTop: 5,
        height: 25,
        borderWidth: 1,
        width: "80%",
        borderRadius: 15,
        fontSize: 15,
        paddingLeft: 10,
    },
});
