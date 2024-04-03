import React from "react";
import DiasDelMes from "./DiasDelMes";
import SView, { SViewProps } from "../SView";
import SDate from "../SDate";
import MesesDelAño from "./MesDelAño";
import Anos from "./Anos";

export type SDatePickerPropsType = {
    onSelect?: (date: SDate) => void;
    defaultValue?: number,
}
// } & SViewProps

export default class SDatePicker extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        type: ""
    }


    render() {
        let COMPONENT: any = Anos;
        switch (this.state.type) {
            case "mes":
                COMPONENT = DiasDelMes;
                break;
            case "ano":
                COMPONENT = Anos;
                break;
        }
        console.log(this.props)
        return <SView {...this.props}>
            <COMPONENT {...this.props} />
        </SView>
    }
}