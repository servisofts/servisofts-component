import React, { Component } from 'react';
import { SForm, SGradient, SHr, SNavigation, SPopup, SStorage, SText, STheme, SView, SIcon, SInput, SLoad } from '../../index';

import { SExcelReaderPropsType } from './types';
import xlsx from 'xlsx-color';
import func from './func';

const KEY_POPUP_IMPORT = "";
export default class PopupImport extends Component<SExcelReaderPropsType> {
    static open(props: SExcelReaderPropsType, callback) {
        SPopup.open({
            key: KEY_POPUP_IMPORT,
            content: <PopupImport {...props} callback={callback} />
        })
    }
    static close() {
        SPopup.close(KEY_POPUP_IMPORT)
    }
    props: SExcelReaderPropsType;
    state;
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    onChangeValue(files) {
        this.setState({ loading: "Decodificando excel..." })
        console.log("Cambio el valor...")
        const file = files[0].file;
        var data = func.create({
            ...this.props, file: file, callback: () => {
                if (this.props.callback) this.props.callback();
                this.setState({ loading: false })
            }
        })
        // this.setState({ loading: false })

        // PopupImport.close();
    }
    onPress() {

    }
    render() {
        if (this.state.loading) return <SLoad type='window' />
        return <SView width={362}
            // height={286}
            center style={{ borderRadius: 8, overflow: 'hidden', }} withoutFeedback backgroundColor={STheme.color.background}   >
            <SHr height={30} />
            <SView col={"xs-12"}>
                <SText fontSize={14} color={STheme.color.lightGray} center >{"Por favor, sube el archivo en formato Excel para que se pueda sincronizar con el sistema"}</SText>
            </SView>
            <SHr height={30} />
            <SView col={"xs-11"} center>
                <SInput type={"file"} onChangeText={this.onChangeValue.bind(this)} />
            </SView>
            <SView flex />
            <SView width={140} height={44} center backgroundColor={STheme.color.primary} style={{ borderRadius: 8 }}
                onPress={() => {
                    PopupImport.close();
                }}  >
                <SText fontSize={14} color={STheme.color.text} bold>SALIR</SText>
            </SView>
            <SHr height={30} />
        </SView>
    }
}