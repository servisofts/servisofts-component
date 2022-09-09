import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { SText, STheme, SView, SImage } from '../../../../index';
// import DocumentPicker from 'react-native-document-picker';
// import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

type Props = {
    onUpload?: Function,
    onPress?: Function,
    placeholder?: string,
    cstyle?: any,
    onChange?: Function,
    defaultValue?: string,
    accept?: string,
}

export default class DropFileSingle extends Component<Props> {
    state;
    constructor(props) {
        super(props);
        this.state = {
            files: [],
        };
        var value = props.defaultValue || "";
        if (value) {
            this.state.files.push({
                uri: value,
                name: value,
            });
        }
    }

    fileUpload = async () => {
        launchImageLibrary({}, (response) => {
            console.log(response);
            if (response.assets) {
                if (response.assets[0]) {
                    var file = response.assets[0];

                    this.state.files[0] = {
                        file:{
                            ...file,
                            name: file.fileName,
                        },
                        uri:Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
                    };
                    if (this.props.onChange) {
                        this.props.onChange(this.state.files);
                    }
                    this.setState({ ...this.state });
                }

            }

        });
    }

    getFiles() {
        if (this.state.files.length <= 0) {
            return null;
        }
        return this.state.files.map((image, index) => {
            console.log(image);
            return image;
        });
    }
    getImages = () => {
        if (this.state.files.length <= 0) {
            return <SText center>{""}</SText>
        }
        var image = this.state.files[0];
        return <SView col={"xs-12"} height style={{
            overflow: 'hidden',
            borderRadius: 4,
        }}>
            <SImage src={image.uri} />
        </SView>
    }
    render() {
        return (
            <SView
                col={"xs-12"}
                height
                center
                onPress={() => {
                    this.fileUpload();
                    // ImagePicker.showImagePicker({
                    //     title: 'Seleccionar una Foto',
                    //     takePhotoButtonTitle: "Tomar Foto...",
                    //     chooseFromLibraryButtonTitle: "Elegir de la Biblioteca...",
                    //     allowEditing: true,
                    //     mediaType: 'photo',
                    //     cancelButtonTitle: "Cancelar",
                    //     storageOptions: {
                    //         skipBackup: true,
                    //         // path: 'image',
                    //         privateDirectory: true
                    //     },
                    // }, (response) => {

                    // });
                }}>
                <SView height col={"xs-12"} style={{
                    borderRadius: 4,
                }} center>
                    {this.getImages()}
                    {/* <SText center>{this.props.placeholder}</SText> */}
                </SView>
            </SView>
        );
    }
}
