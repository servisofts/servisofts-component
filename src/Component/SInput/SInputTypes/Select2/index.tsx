import React from "react";
import SView from "../../../SView";
import SText from "../../../SText";
import { ScrollView } from "react-native";
import STheme from "../../../STheme";

class Select2 extends React.Component<{ options: any[], onClose?: Function, onSelect: Function }, any> {

    state = {
        select: 0,
        filtro: ""
    }

    componentWillUnmount(): void {
        if (this.props.onClose) {
            this.props.onClose(this.getSelect());
        }
    }

    getSelect() {
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
            marginTop: 4,
            backgroundColor: select ? STheme.color.card : "transparent",
        }} onPress={(e) => {
            if (this.props.onSelect) {
                this.props.onSelect(option, index);
            }
            // console.log("onPress", e);
        }}>
            <SText numberOfLines={1}>{value}</SText>
        </SView>
    }
    optFilter;
    render() {
        const { options } = this.props;
        this.optFilter = options.filter(a => {
            if (this.state.filtro) {
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