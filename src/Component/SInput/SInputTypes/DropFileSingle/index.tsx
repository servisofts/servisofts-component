import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SIcon, SImage, SText, STheme, SView } from '../../../../index';
const delay = ms => new Promise(res => setTimeout(res, ms));
type Props = {
    onUpload?: Function,
    onPress?: Function,
    placeholder?: string,
    cstyle?: any,
    onChange?: Function,
    defaultValue?: string,
}

export default class DropFileSingle extends Component<Props> {
    state;
    onUpload;
    isLoad;
    idInstance;
    constructor(props) {
        super(props);
        var value = props.defaultValue || "";
        this.state = {
            images: [],
        };
        if (value) {
            this.state.images.push({
                uri: value,
                name: value,
            });
        }
        this.onUpload = this.props.onUpload;
        this.idInstance = new Date().getTime();
    }
    componentDidMount() {
        this.esperar();
    }

    getFiles() {
        if (this.state.images.length <= 0) {
            return null;
        }
        return this.state.images.map((image, index) => {
            return image.file;
        });
    }
    esperar = async () => {
        await delay(300)
        if (this.isLoad) {
            return;
        }
        this.isLoad = true;

        document.querySelectorAll(".drop-zone__inputa" + `_key_${this.idInstance}`).forEach((inputElement: any) => {
            const dropZoneElement = inputElement.closest(".dropZonea");
            // dropZoneElement.addEventListener("click", (e) => {
            //     e.preventDefault();
            //     inputElement.click();
            // });

            inputElement.addEventListener("change", (e) => {
                for (let i = 0; i < inputElement.files.length; i++) {
                    const file = inputElement.files[i];
                    var ext = file.name.split('.').pop();
                    // if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                    var fr = new FileReader();
                    fr.onload = (e) => {
                        this.state.images[0] = {
                            file: file,
                            uri: e.target.result
                        };
                        if (this.props.onChange) {
                            this.props.onChange(this.state.images);
                        }
                        this.setState({ ...this.state });
                    }
                    fr.readAsDataURL(file);
                    // }
                }
            });

            dropZoneElement.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            ["dragleave", "dragend"].forEach((type) => {
                dropZoneElement.addEventListener(type, (e) => {
                });
            });

            dropZoneElement.addEventListener("drop", (e) => {
                e.preventDefault();
                var Load = 0;
                if (e.dataTransfer.files.length) {
                    console.log(e)
                    inputElement.files = e.dataTransfer.files;
                }
                for (let i = 0; i < inputElement.files.length; i++) {
                    const file = inputElement.files[i];
                    var ext = file.name.split('.').pop();
                    ext = ext.toLowerCase();
                    // if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                    var fr = new FileReader();
                    fr.onload = (e) => {
                        this.state.images[0] = {
                            file: file,
                            uri: e.target.result
                        };
                        if (this.props.onChange) {
                            this.props.onChange(this.state.images);
                        }
                        this.setState({ ...this.state });
                    }
                    fr.readAsDataURL(file);
                    // }
                }

            });
        });
    }
    getName(name) {
        var arr = name.split('.');
        var ext = arr.pop();
        var name = arr.join('.');
        if (name.length > 15) {
            name = name.substr(0, 15) + '...';
        }
        return name;
    }
    getImages = () => {
        if (this.state.images.length <= 0) {
            return <SText center>{""}</SText>
        }
        var image = this.state.images[0];
        return <SView col={"xs-12"} height style={{
            overflow: 'hidden',
            borderRadius: 4,
        }}>
            <SImage src={image.uri} />
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"}
                height
            >
                <SView height col={"xs-12"} style={{
                    borderRadius: 4,
                }} center onPress={() => {
                    document.getElementById("dropFileainp" + `_key_${this.idInstance}`).click();
                }}>
                    <div id={"dropFilea" + `_key_${this.idInstance}`} style={{
                        // display:"flex",
                        width: "100%",
                        height: "100%",
                        // backgroundColor: "#f00",
                    }} className={"dropZonea"} onClick={() => {
                        if (this.props.onPress) this.props.onPress();
                    }}>
                        <input id={"dropFileainp" + `_key_${this.idInstance}`} type='file' name='file' className={'drop-zone__inputa' + `_key_${this.idInstance}`} accept="image/*"
                            style={{
                                display: "none"
                            }} />

                        {this.getImages()}
                        {/* {this.props.children} */}
                    </div>
                </SView>
            </SView>
        );
    }
}
