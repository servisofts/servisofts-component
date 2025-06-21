import React, { Component } from 'react';
import { View, Text, Platform, ImageStyle } from 'react-native';
import { SText, STheme, SView, SImage, SPopup, SHr, SIcon } from '../../../../index';
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
    style?: ImageStyle,
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
                return <SView col={"xs-12"} center padding={16}>
                    <SView padding={20}
                        col={"xs-12"}
                        card row center
                        onPress={() => {
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
                        }} >
                        <SView width={18} height={18}>
                            <SIcon stroke={STheme.color.text} name={"Camara"} />
                        </SView>
                        <SView width={8} />
                        <SText fontSize={18} bold center>Camara</SText>
                    </SView>
                    <SHr h={16}/>
                    <SView padding={20}
                        col={"xs-12"}
                        card row center
                        onPress={() => {
                            launchImageLibrary({
                                // mediaType: "photo",
                            }, (response) => {
                                this.handleResponseLibrary(response);
                            });
                            props.close();
                        }}
                    >
                        <SView width={18} height={18}>
                            <SIcon stroke={STheme.color.text} name={"Galeria"} />
                        </SView>
                        <SView width={10} />
                        <SText fontSize={18} bold center>Galeria</SText>
                    </SView>
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
        return <SView col={"xs-12"} flex style={{
            overflow: 'hidden',
        }}>
            <SImage src={image.uri} style={this.props.style} />
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
                    // borderRadius: 4,
                }} center>
                    {this.getImages()}
                    {/* <SText center>{this.props.placeholder}</SText> */}
                </SView>
            </SView>
        );
    }
}
