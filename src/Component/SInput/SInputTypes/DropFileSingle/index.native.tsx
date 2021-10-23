import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SText, STheme, SView } from '../../../../index';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-picker';

type Props = {
    onUpload?: Function,
    onPress?: Function,
    placeholder?: string,
    cstyle?:any,
    onChange?: Function,
}

export default class DropFileSingle extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-12"} height onPress={() => {
                // DocumentPicker.pick({
                //     type: ["image/*"]
                // }).then((uri) => {

                // });
                ImagePicker.showImagePicker({
                    title: 'Seleccionar una Foto',
                    takePhotoButtonTitle: "Tomar Foto...",
                    chooseFromLibraryButtonTitle: "Elegir de la Biblioteca...",
                    allowEditing: true,
                    mediaType: 'photo',
                    cancelButtonTitle: "Cancelar",
                    storageOptions: {
                        skipBackup: true,
                        // path: 'image',
                        privateDirectory: true
                    },
                }, (response) => {

                });
            }}>
                <SView height col={"xs-12"} style={{
                    borderRadius: 4,
                }} center>
                    {/* <SText center>{this.props.placeholder}</SText> */}
                </SView>
            </SView>
        );
    }
}
