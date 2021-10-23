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
}

export default class DropFile extends Component<Props> {
    state;
    onUpload;
    isLoad;
    idInstance;
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        };
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
                    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif") {
                        var fr = new FileReader();
                        fr.onload = (e) => {
                            this.state.images.push({
                                file: file,
                                uri: e.target.result
                            });
                            if (this.props.onChange) {
                                this.props.onChange(this.state.images);
                            }
                            this.setState({ ...this.state });
                        }
                        fr.readAsDataURL(file);
                    }
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
                        this.state.images.push({
                            file: file,
                            uri: e.target.result
                        });
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
        return <SView row center >
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
                        <SView col={"xs-8"} colSquare>
                            <SImage src={image.uri} />
                        </SView>
                        <SText fontSize={8} center>{this.getName(image.file.name)}</SText>
                        <SView
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: 25,
                                height: 25,
                            }}
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
            <SView col={"xs-12"}
                height
                style={{
                    padding: 4,
                }}>
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
                        <input id={"dropFileainp" + `_key_${this.idInstance}`} type='file' name='file' className={'drop-zone__inputa' + `_key_${this.idInstance}`} multiple accept="image/*"
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
