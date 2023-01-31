import React, { Component } from 'react';
import { SHr, SPage, SSection, SText, SView, SInput, SBuscador, SIcon, STheme, SThread } from '../../index';
import SOrdenador, { TypeOrdenar } from '../SOrdenador';


type SListType = {
    data: any,
    horizontal?: boolean,
    center?: boolean,
    render: (item: any, key?: any) => JSX.Element,
    filter?: (item: any) => boolean,
    space?: number,
    initSpace?: number,
    limit?: number,
    order?: [TypeOrdenar],
    buscador?: boolean,
}
class SList extends Component<SListType> {
    _buscador;
    state;
    _rend;
    constructor(props) {
        super(props);
        this.state = {
            render: 0,
            buscar: ""
        };
        this._rend = props.render;
    }

    getData() {
        var space = this.props.space ?? 8;
        var data = this.props.data;
        if (!data) return null;
        if (!data[0]) {
            data = Object.values(data);

        }
        if (this.state.buscar) {
            data = data.filter((itm) => {
                return SBuscador.validate(itm, this.state.buscar);
            })
        }
        if (this.props.filter) {
            data = data.filter(this.props.filter)
        }
        var separation_style: any = {
            ...this.props.horizontal ? { width: space / 2 } : { height: space / 2 }
        }
        var init_separation_style: any = {
            ...this.props.horizontal ? { width: this.props.initSpace ?? 0 } : { height: this.props.initSpace ?? 0 }
        }
        var cant = Object.keys(data).length
        if (this.state.cant != cant) {
            this.setState({
                cant: cant
            })
        }
        var arr;
        if (this.props.order) {
            arr = new SOrdenador(this.props.order).ordernarObject(data);
        } else {
            arr = Object.keys(data);
        }
        if (this.props.limit) {
            arr = arr.slice(0, this.props.limit)
        }
        return arr.map((key, index) => {
            if (!this._rend) {
                this._rend = (o) => <SText>{JSON.stringify(o)}</SText>
            }
            var Item = this._rend(data[key], key);
            if (!Item) return null;
            return <SSection key={key + 'item_list'}>
                {index == 0 ? <SView {...init_separation_style} /> : <SView {...separation_style} />}
                {Item}
                <SView {...separation_style} />
            </SSection>
        })
    }
    getBuscardo() {
        if (!this.props.buscador) return null;
        return <SView col={"xs-12"}>
            <SInput
                icon={<SView center col={"xs-12"} height><SIcon name={"Search"} fill={STheme.color.gray} width={22} /></SView>}
                iconR={<SView center style={{
                    padding: 4
                }} height><SText fontSize={12} color={STheme.color.gray}>{`(${this.state.cant ?? 0})`}</SText></SView>}
                placeholder={"Buscar..."}
                ref={r => this._buscador = r}
                onChangeText={(val) => {
                    this.setState({ buscar: val })
                }} />
            <SHr />
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"} {...this.props} row={this.props.horizontal}>
                {this.getBuscardo()}
                {this.getData()}
            </SView>
        );
    }
}

export default SList;