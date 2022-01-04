import React, { Component } from 'react';
import { View, Text, NativeScrollEvent, ViewStyle } from 'react-native';
import { SText, SView, STheme, SThread, SSCrollView } from '../../../../index';
import SDate from '../../../SDate';
import SPage from '../../../SPage';
// import SBackground from '../../../SBackground';
type typeResp = {
    year: number,
    month: number,
    day: number
}
type typeConfig = {
    defaultValue?: SDate,
    minYear?: number,
    maxYear?: number,
}
type typeProps = {
    style: ViewStyle,
    props: typeConfig,
    onChange: (value: SDate) => any,
    onClose?: () => any,
    options?: Array<string> | Array<{ key: string, content: any }>,
    // ViewPropTypes,
    // TouchableOpacityProps,
    //callBack:Function,
}
export default class SISelect extends Component<typeProps> {
    value
    scroll
    refItens
    state

    static defaultProps = {
        props: {},
        style: {}
    };
    constructor(props) {
        super(props);
        if (this.props.props.defaultValue) {
            this.value = this.props.props.defaultValue
        }
        this.state = {
            initial: this.value,
            select: false,
        };
        this.scroll = {};
        this.refItens = {

        };
        this.inital();
    }
    componentWillUnmount() {
        if (this.props.onClose) this.props.onClose();
    }
    inital() {
        new SThread(10, "moveSelect", true).start(() => {
            var ready = true;
            if (!this.state.select) {
                this.selectIten("select", this.state.initial)
                ready = false;
            }
            if (!ready) {
                this.inital();
            }
        })
    }
    onScrollEnd = (key, evt) => {
        var center = (evt.vertical.contentOffset.y + (evt.vertical.layoutMeasurement.height / 2));
        Object.keys(this.refItens).map((keyD) => {
            var obj = this.refItens[keyD];
            if (!obj) return;
            var layout = obj.getLayout()
            if (
                layout.y < center
                && layout.y + layout.height > center
            ) {
                this.selectIten(key, obj.getProp("data"))
            }
        })
    }
    selectIten(key, y) {
        if (this.refItens[y]) {
            if (!this.refItens[y]) {
                return;
            }
            if (!this.refItens[y].getLayout) {
                return;
            }
            var lay = this.refItens[y].getLayout();
            if (!lay) {
                return false;
            }

            this.scroll[key].scrollTo({ x: lay.x + 50, y: lay.y + 20 });
            this.state.select = y;
            if (this.props.onChange) this.props.onChange(this.state.select)
            this.setState({ select: this.state.select })
            // var sdate = new SDate(this.state.select.year + "-" + SDate.formatCero(this.state.select.month) + "-" + SDate.formatCero(this.state.select.day), "yyyy-MM-dd");
            // if (sdate.isValid()) {
            // }
            return true;
        }
        return false;
    }
    getListaKey = (key) => {
        var arr = this.props.options;
        return arr.map((obj) => {
            // if (obj.type == "day" && this.state.select.year && this.state.select.month) {
            //     var fecha = this.state.select.year + "-" + this.state.select.month + "-" + obj.val
            //     if (!SDate.isValid(fecha)) {
            //         return <View />
            //     }
            // }
            var Content;
            var keyObj;
            if (typeof obj != "object") {
                keyObj = obj;
                Content = <SText>
                    {obj}
                </SText>
            } else {
                keyObj = obj.key;
                Content = obj.content
                if (typeof obj.content != "object") {
                    Content = <SText>{obj.content}</SText>
                }
            }
            return (<SView
                center
                col={"xs-12"}
                style={{
                    width: "100%",
                    height: 40,
                }}
                data={keyObj}
                ref={(ref) => { this.refItens[keyObj] = ref }}
                onPress={() => {
                    var layout = this.refItens[keyObj].getLayout();
                    this.scroll[key].scrollTo({ x: layout.x + 50, y: layout.y + 20 });
                }}>

                {Content}
            </SView>)
        });
    }
    // componentDidMount() {
    // setTimeout(() => {
    //     this.scroll["year"].scrollToEnd();
    //     this.scroll["month"].scrollToEnd();
    //     this.scroll["day"].scrollToEnd();
    // }, 2000)
    // }
    getLista = (key) => {
        return <SView
            col={"xs-12"}
            center
            flex
        >
            <SView style={{
                position: "absolute",
                width: "100%",
                height: 40,
                backgroundColor: STheme.color.card
            }}>

            </SView>
            <SSCrollView disableHorizontal
                ref={(ref) => { this.scroll[key] = ref }}
                // reverse
                contentContainerStyle={{
                    width: "100%",
                }}
                onScrollEnd={(evt) => {
                    this.onScrollEnd(key, evt);
                }}
            >
                <SView col={"xs-12"} style={{
                    width: "100%",
                }}>
                    <SView style={{
                        height: 80
                    }}></SView>
                    {this.getListaKey(key)}
                    <SView style={{
                        height: 80
                    }}></SView>
                </SView>
            </SSCrollView>

        </SView>;
    }
    getInfo() {
        return <SView row style={{
            flex: 1,
        }}>
            {JSON.stringify(this.state.select)}
        </SView>
    }
    render() {
        return <SView
            col={"xs-11 md-6 xl-4"}
            center
            withoutFeedback
            style={{
                height: 200,
                borderRadius: 8,
                backgroundColor: STheme.color.background,
                overflow: "hidden"
            }
            }>
            {/* <SBackground /> */}
            {SPage.backgroundComponent}
            < SView row style={{
                width: "100%",
                height: 200,
            }}>
                {this.getLista("select")}
            </SView >
        </SView >
    }
}
