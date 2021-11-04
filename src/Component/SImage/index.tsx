import React, { Component } from 'react'
import { Image, Platform, Text, View } from 'react-native'
import SPopup from '../SPopup';
import STheme from '../STheme';
import SView from '../SView';

type SImageType = {
    source?: any,
    src?: any,
    style?: any,
    enablePreview?: boolean,
    // name?: "",
}

export default class SImage extends Component<SImageType> {
    static Instances = {};
    static defaultProps = {
        style: {},
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getImage(source, style?) {
        // var key = source.uri;
        if (!style) style = {};
        return <Image source={source} style={{ resizeMode: "contain", width:"100%", height:"100%", ...this.props.style, ...style, }} />;
        // if (!SImage.Instances[key]) {
        // SImage.Instances[key] = <Image source={source} style={{ ...this.props.style, ...style }} />;
        // }
        // return SImage.Instances[key]
    }
    render() {
        var source = this.props.source;
        if (source) {
            if (Platform.OS == "web") {
                source = { uri: source.default };
            }
        }
        if (!source && this.props.src) {
            if (typeof this.props.src == "string") {
                source = { uri: this.props.src };
            }else{
                source = this.props.src;
                if (Platform.OS == "web") {
                    source = { uri: source.default };
                }
            }
        }

        if (this.props.enablePreview) {
            return <SView style={{
                width: "100%",
                height: "100%",
                ...this.props.style,
            }} onPress={() => {
                SPopup.open({
                    key: "imgPreview",
                    content: <SView col={"xs-11 md-8 lg-6 xl-4"} colSquare center style={{
                        overflow: 'hidden',
                        maxHeight: "100%",
                        backgroundColor: STheme.color.background,
                        borderRadius: 8,
                    }} >
                        {this.getImage(source, { width: "100%", height: "100%", })}
                    </SView>,
                })
            }}>
                {this.getImage(source)}
            </SView>
        }
        return this.getImage(source);
    }
}
