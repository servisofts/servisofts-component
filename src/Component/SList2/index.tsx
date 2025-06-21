import React, { Component } from 'react';
import { SHr, SPage, SSection, SText, SView, SInput, SBuscador, SIcon, STheme, SThread, SLanguage } from '../../index';
import SOrdenador, { TypeOrdenar } from '../SOrdenador';


type SListType = {
    data: any,
    horizontal?: boolean,
    inverse?: boolean,
    center?: boolean,
    render: (item: any, key?: any, index?: any,) => JSX.Element,
    filter?: (item: any) => boolean,
    space?: number,
    initSpace?: number,
    limit?: number,
    order?: [TypeOrdenar],
    buscador?: boolean,
    flexEnd?: boolean
}
class SList extends Component<SListType> {
    _buscador;
    state;
    _rend;
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            buscar: ""
        };
        this._rend = props.render;

    }

    getMoreItems(inverse) {
        if (!this.props.inverse != !inverse) return null;
        if (!this.props.limit) return null;
        if (this.state.cant <= (this.state.page * this.props.limit)) {
            return null;
        }
        var props: any = {
        }
        if (this.props.horizontal) {
            props = {
                width: 100,
                height: true
            }
        } else {
            props = {
                col: "xs-12",
            }
        }
        return <SView {...props} center style={{
            padding: 8,
        }} onPress={() => {
            this.state.page += 1;
            this.setState({ ...this.state })
        }}>
            <SText style={{// textDecoration: "underline"
            }} underLine>Ver más</SText>
        </SView>
    }
    getData() {
        var space = this.props.space ?? 8;
        if (this.props.space === 0) {
            space = null;
        }
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
            width: space / 2,
            height: space / 2
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
        // arr = new SOrdenador([]).ordernarObject(data);
        if (this.props.order) {
            arr = new SOrdenador(this.props.order).ordernarObject(data);
        } else {
            arr = Object.keys(data);
        }
        if (this.props.limit) {
            // if (this.props.inverse) {
            //     var init = arr.length - 1 - ((this.props.limit ?? 1) * this.state.page);
            //     if (init < 0) init = 0;
            //     arr = arr.slice(init, arr.length - 1)
            // } else {
            arr = arr.slice(0, (this.props.limit ?? 1) * this.state.page)
            // }
        }

        if (this.props.inverse) {
            arr = arr.slice(0).reverse()
        }
        // arr = arr.slice(0, 10)
        return arr.map((key, index) => {
            if (!this._rend) {
                this._rend = (o) => <SText>{JSON.stringify(o)}</SText>
            }
            var Item = this._rend(data[key], key, index);
            if (!Item) return null;
            return <SSection key={key + 'item_list'}>
                {space ? (index == 0 ? <SView {...init_separation_style} /> : <SView {...separation_style} />) : null}
                {Item}
                {space ? <SView {...separation_style} /> : null}
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
                placeholder={SLanguage.select({
                    en: "Find...",
                    es: "Buscar..."
                })}
                ref={r => this._buscador = r}
                onChangeText={(val) => {
                    new SThread(500, "buscador_list", true).start(() => {
                        this.setState({ buscar: val })
                    })

                }} />
            <SHr />
        </SView>
    }
    render() {
        return (
            <SView col={"xs-12"} {...this.props} row={this.props.horizontal}>
                {this.getMoreItems(true)}
                {this.getBuscardo()}
                {this.getData()}
                {this.getMoreItems(false)}
                {this.props.flexEnd ? <SView flex /> : null}
            </SView>
        );
    }
}

export default SList;