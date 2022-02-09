import React, { Component } from 'react';
import { SPage, SText, SView } from '../../index';
import SHr from '../SHr';
import SOrdenador, { TypeOrdenar } from '../SOrdenador';


type SListType = {
    data: any,
    render: (item: any) => JSX.Element,
    space?: number,
    order?: [TypeOrdenar]
}
class SList extends Component<SListType> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getData() {

        return new SOrdenador(this.props.order ?? [{ key: "fecha_on", order: "desc", peso: 1 }]).ordernarObject(this.props.data).map((key, index) => {
            var Item = this.props.render(this.props.data[key]);
            if (!Item) return null;
            return <>
                {Item}
                <SHr height={this.props.space ?? 8} />
            </>
        })
    }
    render() {
        return (
            <SView col={"xs-12"} {...this.props}>
                {this.getData()}
            </SView>
        );
    }
}

export default SList;