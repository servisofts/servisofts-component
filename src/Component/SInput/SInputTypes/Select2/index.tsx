import React from "react";
import SView from "../../../SView";
import SText from "../../../SText";
import { ScrollView, TextStyle } from "react-native";
import STheme from "../../../STheme";

class Select2 extends React.Component<{
    options: any[],
    onClose?: Function,
    onSelect: Function,
    selectStyle: TextStyle,
    defaultValue: any
}, any> {

    state = {
        select: 0,
        filtro: ""
    }
    componentDidMount(): void {
        if (this.props.defaultValue) {
            // this.setState({
            //     select: this.props.options.indexOf(this.props.defaultValue)
            // })
        }
    }

    componentWillUnmount(): void {
        if (this.props.onClose) {
            this.props.onClose(this.getSelect());
        }

    }

    getSelect() {
        if (this.state.select < 0 || this.state.select >= this.optFilter.length) {
            return null;
        }
        return this.optFilter[this.state.select];
    }
    filter(e) {
        console.log("filter", e);
        this.setState({
            filtro: e,
        })
    }
    renderItem(option, index) {
        let value = option;
        if (option.content) {
            value = option.content;
        }
        const select = index === this.state.select;
        return <SView key={index} style={{
            padding: 8,
            backgroundColor: select ? STheme.color.card : "transparent",
        }} onPress={(e) => {
            if (this.props.onSelect) {
                this.props.onSelect(option, index);
            }
            // console.log("onPress", e);
        }}>
            <SText numberOfLines={1} style={this.props.selectStyle}>{value}</SText>
        </SView>
    }
    optFilter;
    render() {
        const { options } = this.props;
        this.optFilter = options.filter(a => {
            if (this.state.filtro) {
                if (a.key) return a.content.toLowerCase().includes(this.state.filtro.toLowerCase());
                return a.toLowerCase().includes(this.state.filtro.toLowerCase());
            }
            return true;
        })
        return <SView col={"xs-12"} flex>
            <ScrollView>
                {this.optFilter.map((option, index) => (this.renderItem(option, index)))}
            </ScrollView>
        </SView>
    }
}

export default Select2