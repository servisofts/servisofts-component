import React, { Component } from 'react';
import { View, Text, Platform, } from 'react-native';

import { SText, STheme, SView, SImage, SIcon } from '../../../../index';
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


export default class DropFile extends Component<Props> {
    files;
    state
    constructor(props: any) {
        super(props);
        this.state = {
            images: [],
        };
        var value = props.defaultValue || "";
        if (value) {
            if (typeof value == "string") {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    console.error("Value error", e)
                }
            }
            if (Array.isArray(value)) {
                if (props.filePath) {
                    value.map((itm) => {
                        this.state.images.push({
                            uri: props.filePath + "/" + props.name + "/" + itm,
                            name: itm,
                        });

                    })
                    console.log(this.state.images)
                    // console.log(props.filePath + "/" + props.name + "/" + value)
                }
            }


        }
    }
    getName(name) {
        if (!name) return;
        var arr = name.split('.');
        if (arr.length > 1) {
            var ext = arr.pop();

        }
        var name = arr.join('.');
        if (name.length > 15) {
            name = name.substr(0, 15) + '...';
        }
        return name;
    }
    getExtension(name) {
        if (!name) return;
        var arr = name.split('.');
        if (arr.length > 1) {
            return arr.pop();
        }
        return "File";
    }
    getImages = () => {
        if (this.state.images.length <= 0) {
            return <SText center>{""}</SText>
        }
        return <SView row center col={"xs-12"} >
            {this.state.images.map((image, index) => {
                return <SView key={index} width={100} height={100} style={{
                    padding: 4,
                    overflow: 'hidden',
                }}>
                    <SView key={index} width height center
                        style={{
                            // borderWidth: 1,
                            // borderColor: STheme.color.primary,
                            // backgroundColor: STheme.color.card,
                            borderRadius: 4,
                        }}>
                        <SView col={"xs-8"} colSquare card>
                            <SView col={"xs-12"} height style={{
                                position: "absolute",
                            }} center>
                                <SText color={STheme.color.gray} fontSize={18} bold>{this.getExtension(image?.file?.name ?? image.name)}</SText>
                            </SView>
                            <SView col={"xs-12"} flex>
                                <SImage src={image.uri} />
                            </SView>
                        </SView>
                        <SText fontSize={8} center>{this.getName(image?.file?.name ?? image.name)}</SText>
                        <SView
                            style={{ position: "absolute", top: 0, right: 0, width: 25, height: 25 }}
                            onPress={() => {
                                this.state.images.splice(index, 1);
                                if (this.props.onChange) {
                                    this.props.onChange(this.state.images);
                                }
                                this.setState({ ...this.state });
                            }}
                        >
                            <SIcon name={"Delete"} />
                        </SView >
                    </SView>
                </SView>
            })}
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"} flex onPress={() => {
                // DocumentPicker.pick({
                //     type: ["image/*"]
                // }).then((uri) => {

                // });
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
                launchImageLibrary({}, (response) => {
                    console.log(response);
                    if (response.assets) {
                        if (response.assets[0]) {
                            var file = response.assets[0];
                            this.state.images.push({
                                file: { ...file, name: file.fileName },
                                uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', '')
                            });
                            if (this.props.onChange) {
                                this.props.onChange(this.state.images);
                            }
                            this.setState({ ...this.state });
                        }

                    }

                });
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
