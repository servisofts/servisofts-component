import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { SText, STheme, SView, SImage, SPopup, SHr } from '../../../../index';
// import DocumentPicker from 'react-native-document-picker';
// import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
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
            if (props.filePath) {
                // console.log(props.filePath + "/" + props.name + "/" + value)
                this.state.files.push({
                    uri: props.filePath + "/" + props.name + "/" + value,
                    name: value,
                });

            } else {
                this.state.files.push({
                    uri: value,
                    name: value,
                });
            }

        }
    }

    handleResponseLibrary(response) {
        console.log(response);
        if (response.assets) {
            if (response.assets[0]) {
                var file = response.assets[0];

                this.state.files[0] = {
                    file: {
                        ...file,
                        name: file.fileName,
                    },
                    uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
                };
                if (this.props.onChange) {
                    this.props.onChange(this.state.files);
                }
                this.setState({ ...this.state });
            }

        }
    }
    fileUpload = async () => {
        // launchCamera({
        //     mediaType: "photo",
        // }, (response) => {
        // launchImageLibrary({
        //     // mediaType: "photo",
        // }, (response) => {


        // });
        SPopup.openContainer({
            render: (props) => {
                return <SView col={"xs-12"} center padding={8}>
                    <SText onPress={() => {
                        if (Platform.OS == "android") {
                            request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                                // …
                            });
                        } else if (Platform.OS == "ios") {
                            request(PERMISSIONS.IOS.CAMERA).then((result) => {
                                // …
                            });
                        }

                        launchCamera({
                            mediaType: "photo",
                        }, (response) => {
                            this.handleResponseLibrary(response);
                        });
                        props.close();
                    }} fontSize={20} padding={8} card col={"xs-12"} bold center>Camara</SText>
                    <SHr />
                    <SText onPress={() => {
                        launchImageLibrary({
                            // mediaType: "photo",
                        }, (response) => {
                            this.handleResponseLibrary(response);
                        });
                        props.close();
                    }} fontSize={20} padding={8} card col={"xs-12"} bold center>Galeria</SText>
                </SView>
            },
            key: "dropFile"
        })
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
        console.log(image)
        return <SView col={"xs-12"} flex style={{
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
                flex
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
                <SView flex col={"xs-12"} style={{
                    borderRadius: 4,
                }} center>
                    {this.getImages()}
                    {/* <SText center>{this.props.placeholder}</SText> */}
                </SView>
            </SView>
        );
    }
}
