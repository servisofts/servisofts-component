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
    onClose?: () => any
    // ViewPropTypes,
    // TouchableOpacityProps,
    //callBack:Function,
}
export default class SIFechaAlert extends Component<typeProps> {
    sdate
    scroll
    refItens
    state

    static defaultProps = {
        props: {},
        style: {}
    };
    constructor(props) {
        super(props);
        this.sdate = new SDate(new Date())
        if (this.props.props.defaultValue) {
            if(this.props.props.defaultValue.get("year")){
                this.sdate = this.props.props.defaultValue
            }
        }
        this.state = {
            initial: {
                year: this.sdate.get("year"),
                month: this.sdate.get("month"),
                day: this.sdate.get("day"),
            },
            select: {
                year: 0,
                month: 0,
                day: 0,
            }
        };
        this.scroll = {};
        this.refItens = {
            year: {},
            month: {},
            day: {},
        };
        this.inital();
    }
    componentWillUnmount() {
        if (this.props.onClose) this.props.onClose();
    }
    inital() {
        new SThread(10, "moveDate", true).start(() => {
            var ready = true;
            if (!this.state.select["year"]) {
                this.selectIten("year", this.state.initial["year"])
                ready = false;
            }
            if (!this.state.select["month"]) {
                this.selectIten("month", this.state.initial["month"])
                ready = false;
            }
            if (!this.state.select["day"]) {
                this.selectIten("day", this.state.initial["day"])
                ready = false;
            }
            if (!ready) {
                this.inital();
            }
        })
    }
    onScrollEnd = (key, evt) => {
        var center = (evt.vertical.contentOffset.y + (evt.vertical.layoutMeasurement.height / 2));
        Object.keys(this.refItens[key]).map((keyD) => {
            var obj = this.refItens[key][keyD];
            if (!obj) return;
            var layout = obj.getLayout()
            if (
                layout.y <= center
                && layout.y + layout.height >= center
            ) {
                this.selectIten(key, obj.getProp("data").val)
            }
        })
    }
    selectIten(key, y) {
        if (this.refItens[key][y]) {
            if (!this.refItens[key][y]) {
                return;
            }
            if (!this.refItens[key][y].getLayout) {
                return;
            }
            var lay = this.refItens[key][y].getLayout();
            if (!lay) {
                return false;
            }

            this.scroll[key].scrollTo({ x: lay.x + 50, y: lay.y + 20 });
            this.state.select[key] = y;
            this.setState({ select: { ...this.state.select } })
            var sdate = new SDate(this.state.select.year + "-" + SDate.formatCero(this.state.select.month) + "-" + SDate.formatCero(this.state.select.day), "yyyy-MM-dd");
            if (sdate.isValid()) {
                if (this.props.onChange) this.props.onChange(sdate)
            }
            return true;
        }
        return false;
    }
    getListaKey = (key) => {
        var arr = [];
        switch (key) {
            case "year":
                for (let i: number = (!this.props.props.minYear ? 1900 : this.props.props.minYear); i <= (!this.props.props.maxYear ? (new SDate(new Date()).toJson().year+10) : this.props.props.maxYear); i++) {
                    arr.push({
                        type: key,
                        val: i,
                        data: i + ""
                    })
                }
                break;
            case "month":
                for (let i = 1; i <= 12; i++) {
                    arr.push({
                        type: key,
                        val: i,
                        data: SDate.getMonth(i).text,
                    })
                }
                break;
            case "day":
                for (let i = 1; i <= 31; i++) {
                    arr.push({
                        type: key,
                        val: i,
                        data: i + ""
                    })
                }
                break;
        }
        return arr.map((obj) => {
            if (obj.type == "day" && this.state.select.year && this.state.select.month) {
                var fecha = this.state.select.year + "-" + this.state.select.month + "-" + obj.val
                if (!SDate.isValid(fecha)) {
                    return <View />
                }
            }

            return (<SView
                center
                col={"xs-12"}
                style={{
                    width: "100%",
                    height: 40,
                }}
                data={obj}
                ref={(ref) => { this.refItens[obj.type][obj.val + ""] = ref }}
                onPress={() => {
                    var layout = this.refItens[obj.type][obj.val + ""].getLayout();
                    this.scroll[key].scrollTo({ x: layout.x + 50, y: layout.y + 20 }, 300);
                }}>

                <SText
                >
                    {obj.data}
                </SText>
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
            col={"xs-4"}
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
            {SPage.backgroundComponent}
            {/* <SBackground /> */}
            < SView row style={{
                width: "100%",
                height: 200,
            }}>
                {this.getLista("day")}
                {this.getLista("month")}
                {this.getLista("year")}
            </SView >
        </SView >
    }
}
