import React from 'react';
export default class IntlPhoneInput extends React.Component {
    props: any;
    state: any;
    constructor(props: any);
    onChangePropText: (unmaskedPhoneNumber: any, phoneNumber: any) => void;
    onChangeText: (value: any) => void;
    showModal: () => void;
    hideModal: () => void;
    onCountryChange: (code: any) => Promise<void>;
    filterCountries: (value: any) => void;
    focus(): void;
    renderModal: () => any;
    renderAction: () => any;
    render(): JSX.Element;
}
