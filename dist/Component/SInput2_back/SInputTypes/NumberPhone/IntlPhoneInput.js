var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { View, Text, Modal, FlatList, StyleSheet, TouchableOpacity, TextInput, } from 'react-native';
import data from './Countries';
// import { SafeAreaView } from 'react-navigation';
// import Buscador from '../../Component/Inicio/Buscador';
// import CloseButtom from '../../../Component/CloseButtom';
// import BackgroundImage from '../../BackgroundImage';
var IntlPhoneInput = /** @class */ (function (_super) {
    __extends(IntlPhoneInput, _super);
    function IntlPhoneInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangePropText = function (unmaskedPhoneNumber, phoneNumber) {
            var _a = _this.state, dialCode = _a.dialCode, mask = _a.mask, selectedCountry = _a.selectedCountry;
            var countOfNumber = mask.match(/9/g).length;
            if (_this.props.onChangeText) {
                var isVerified = countOfNumber === (unmaskedPhoneNumber === null || unmaskedPhoneNumber === void 0 ? void 0 : unmaskedPhoneNumber.length) && (phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.length) > 0;
                _this.props.onChangeText({
                    dialCode: dialCode,
                    unmaskedPhoneNumber: unmaskedPhoneNumber,
                    phoneNumber: phoneNumber,
                    isVerified: isVerified,
                    selectedCountry: selectedCountry
                });
            }
        };
        _this.onChangeText = function (value) {
            var unmaskedPhoneNumber = (value.match(/\d+/g) || []).join('');
            if (unmaskedPhoneNumber.length === 0) {
                _this.setState({ phoneNumber: '' });
                _this.onChangePropText('', '');
                return;
            }
            var phoneNumber = _this.state.mask.replace(/9/g, '_');
            for (var index = 0; index < unmaskedPhoneNumber.length; index += 1) {
                phoneNumber = phoneNumber.replace('_', unmaskedPhoneNumber[index]);
            }
            var numberPointer = 0;
            for (var index = phoneNumber.length; index > 0; index -= 1) {
                if (phoneNumber[index] !== ' ' && !isNaN(phoneNumber[index])) {
                    numberPointer = index;
                    break;
                }
            }
            phoneNumber = phoneNumber.slice(0, numberPointer + 1);
            unmaskedPhoneNumber = (phoneNumber.match(/\d+/g) || []).join('');
            _this.onChangePropText(unmaskedPhoneNumber, phoneNumber);
            _this.setState({ phoneNumber: phoneNumber });
        };
        _this.showModal = function () { return (_this.props.disableCountryChange ? null : _this.setState({ modalVisible: true })); };
        _this.hideModal = function () { return _this.setState({ modalVisible: false }); };
        _this.onCountryChange = function (code) { return __awaiter(_this, void 0, void 0, function () {
            var countryData, country, err_1, defaultCountry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, data];
                    case 1:
                        countryData = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, countryData.filter(function (obj) { return obj.code === code; })[0]];
                    case 3:
                        country = _a.sent();
                        this.setState({
                            dialCode: country.dialCode,
                            flag: country.flag,
                            mask: country.mask,
                            phoneNumber: '',
                            selectedCountry: country
                        });
                        this.hideModal();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        defaultCountry = this.state.defaultCountry;
                        this.setState({
                            dialCode: defaultCountry.dialCode,
                            flag: defaultCountry.flag,
                            mask: defaultCountry.mask,
                            phoneNumber: '',
                            selectedCountry: defaultCountry
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.filterCountries = function (value) {
            var lang = _this.props.lang;
            var countryData = data.filter(function (obj) { var _a, _b; return (((_b = obj[(_a = lang === null || lang === void 0 ? void 0 : lang.toLowerCase()) !== null && _a !== void 0 ? _a : "en"]) === null || _b === void 0 ? void 0 : _b.indexOf(value)) > -1 || obj.dialCode.indexOf(value) > -1); });
            _this.setState({ countryData: countryData });
        };
        _this.renderModal = function () {
            if (_this.props.customModal)
                return _this.props.customModal(_this.state.modalVisible, _this.state.countryData, _this.onCountryChange);
            var _a = _this.props, countryModalStyle = _a.countryModalStyle, modalContainer = _a.modalContainer, modalFlagStyle = _a.modalFlagStyle, filterInputStyle = _a.filterInputStyle, modalCountryItemCountryNameStyle = _a.modalCountryItemCountryNameStyle, modalCountryItemCountryDialCodeStyle = _a.modalCountryItemCountryDialCodeStyle, closeText = _a.closeText, filterText = _a.filterText, searchIconStyle = _a.searchIconStyle, closeButtonStyle = _a.closeButtonStyle, lang = _a.lang;
            return (React.createElement(Modal, { animationType: "slide", transparent: false, visible: _this.state.modalVisible },
                React.createElement(View, { style: {
                        flex: 1,
                        backgroundColor: "#000"
                        // backgroundColor: style.colors.fondo
                    } },
                    React.createElement(View, { style: {
                            flex: 1,
                            width: "100%",
                            alignItems: "center"
                        } },
                        React.createElement(View, { style: {
                                width: "100%",
                                marginTop: 4,
                                height: 70,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row"
                            } }),
                        React.createElement(FlatList, { style: {
                                width: "100%"
                            }, data: _this.state.countryData, keyExtractor: function (item, index) { return index.toString(); }, renderItem: function (_a) {
                                var item = _a.item;
                                return (React.createElement(View, { style: {
                                        alignItems: "center"
                                    } },
                                    React.createElement(TouchableOpacity, { style: {
                                            width: "90%",
                                            height: 35
                                        }, onPress: function () { return (_this.onCountryChange(item.code)); } },
                                        React.createElement(View, { style: {
                                                flexDirection: "row",
                                                flex: 1,
                                                marginTop: 4,
                                                justifyContent: "space-between",
                                                padding: 4,
                                                borderRadius: 4
                                            } },
                                            React.createElement(View, { style: {
                                                    width: 50
                                                } },
                                                React.createElement(Text, null, item.flag)),
                                            React.createElement(View, { style: {
                                                    flex: 8
                                                } },
                                                React.createElement(Text, { style: {
                                                        color: "#fff"
                                                    } }, item.en)),
                                            React.createElement(View, { style: {
                                                    flex: 2
                                                } },
                                                React.createElement(Text, { style: {
                                                        color: "#fff"
                                                    } }, item.dialCode))),
                                        React.createElement(View, { style: {
                                                height: 1,
                                                backgroundColor: '#ffffff44'
                                            } }))));
                            } })))));
        };
        _this.renderAction = function () {
            var renderAction = _this.props.renderAction;
            if (renderAction) {
                console.log("action", renderAction);
                if (typeof renderAction !== "function")
                    throw ("The renderAction is not a function. Please set a renderAction function on there");
                else
                    return _this.props.renderAction();
            }
            return null;
        };
        var telefono = props.defaultValue;
        var phone = "";
        var dialCode = "+591";
        if (telefono) {
            phone = telefono.split(" ")[1];
            dialCode = telefono.split(" ")[0];
        }
        var defaultCountry = data.filter(function (obj) { return obj.dialCode === dialCode; })[0] || data.filter(function (obj) { return obj.code === 'BO'; })[0];
        _this.state = {
            defaultCountry: defaultCountry,
            flag: defaultCountry.flag,
            modalVisible: false,
            dialCode: defaultCountry.dialCode,
            phoneNumber: phone,
            mask: defaultCountry.mask,
            countryData: data,
            selectedCountry: defaultCountry
        };
        return _this;
    }
    IntlPhoneInput.prototype.focus = function () {
        this.props.inputRef.current.focus();
    };
    IntlPhoneInput.prototype.render = function () {
        var _this = this;
        var flag = this.state.flag;
        var _a = this.props, containerStyle = _a.containerStyle, flagStyle = _a.flagStyle, phoneInputStyle = _a.phoneInputStyle, dialCodeTextStyle = _a.dialCodeTextStyle, inputProps = _a.inputProps;
        return (React.createElement(View, { style: __assign(__assign(__assign({}, styles.container), containerStyle), { flexDirection: "row" }) },
            React.createElement(TouchableOpacity, { onPress: function () { return _this.showModal(); } },
                React.createElement(View, { style: __assign(__assign({}, styles.openDialogView), { flexDirection: "row", 
                        // justifyContent:"center",
                        alignItems: "center", marginRight: 4 }) },
                    React.createElement(Text, { style: [styles.flagStyle, flagStyle] }, flag),
                    React.createElement(Text, { style: [styles.dialCodeTextStyle, dialCodeTextStyle] }, this.state.dialCode))),
            React.createElement(TextInput, __assign({}, inputProps, { style: __assign(__assign({}, styles.phoneInputStyle), phoneInputStyle), placeholder: this.props.placeholder || this.state.mask.replace(/9/g, '_'), autoCorrect: false, keyboardType: "number-pad", secureTextEntry: false, value: this.state.phoneNumber, onChangeText: function (text) { return _this.onChangeText(text); } })),
            this.renderModal(),
            this.renderAction()));
    };
    return IntlPhoneInput;
}(React.Component));
export default IntlPhoneInput;
var styles = StyleSheet.create({
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
        color: "#fff"
    },
    modalCountryItemContainer: {
        flex: 1,
        paddingLeft: 5,
        flexDirection: 'row'
    },
    modalFlagStyle: {
        fontSize: 25
    },
    modalContainer: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        flex: 10,
        backgroundColor: '#00DDF4'
    },
    flagStyle: {
        fontSize: 22
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
        color: '#424242'
    },
    searchIcon: {
        padding: 10
    },
    filterInputStyleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    phoneInputStyle: {
        // marginLeft: 5,
        flex: 1,
        width: "100%",
        color: "#fff"
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIconStyle: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15
    },
    buttonStyle: {
        alignItems: 'center',
        padding: 14,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    countryStyle: {
        flex: 1,
        borderColor: 'black',
        borderTopWidth: 1,
        padding: 12
    },
    closeButtonStyle: {
        padding: 12,
        alignItems: 'center'
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
        paddingLeft: 10
    }
});
