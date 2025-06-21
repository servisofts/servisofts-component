import React, { Component } from 'react';
import SHr from "../SHr";
import SSection from "../SSection";
import SText from "../SText";
import SView from "../SView";
import { SInput } from "../SInput";
import SBuscador from "../SBuscador";
import SIcon from "../SIcon";
import STheme from "../STheme";
import SThread from "../SThread";
import SOrdenador, { TypeOrdenar } from '../SOrdenador';
import { FlatList } from 'react-native';
import SLanguage from '../SLanguage';


type SListType = {
    data: any,
    horizontal?: boolean,
    inverse?: boolean,
    center?: boolean,
    render: (item: any, key?: any, index?: any,) => JSX.Element,
    sort?: (itema: any, itemb: any) => number,
    filter?: (item: any) => boolean,
    space?: number,
    initSpace?: number,
    limit?: number,
    order?: [TypeOrdenar],
    buscador?: boolean,
    numColumns?: number,
    flexEnd?: boolean,
    flex?: boolean,
    scrollEnabled?: boolean,
    style?: any,
    busqueda?: string,
    contentContainerStyle?: any
}
class SList extends Component<SListType> {
    _buscador;
    state;
    _rend;
    static defaultProps = {
        scrollEnabled: true
    }
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            buscar: this.props.busqueda ?? "",
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
        if (this.props.order) {
            arr = new SOrdenador(this.props.order).ordernarObject(data);
        } else {
            arr = Object.keys(data);
        }


        if (this.props.limit) {
            arr = arr.slice(0, (this.props.limit ?? 1) * this.state.page)
        }

        if (this.props.inverse) {
            arr = arr.slice(0).reverse()
        }

        // let style: any = this.props.style;
        let e_style = {};
        let e_contentstyle = {};
        if (this.props.flex) {
            e_style["width"] = "100%"
            e_style["flex"] = 1
            e_contentstyle["width"] = "100%";
            e_contentstyle["flex"] = 1;
        }
        if (this.props.center) {
            e_contentstyle["alignItems"] = "center";
            e_contentstyle["justifyContent"] = "center";
        }
        // return null
        return <FlatList
            key={"key_for_list"}
            data={arr}
            horizontal={this.props.horizontal}
            numColumns={this.props.numColumns}
            // horizontal={}
            // nestedScrollEnabled={true}
            style={{
                ...e_style
            }}
            contentContainerStyle={{
                ...e_contentstyle,
                ...(this.props.contentContainerStyle ?? {})
            }}
            // scrollEnabled={false}
            // scrollEnabled={this.props.scrollEnabled}
            renderItem={({ item, index }) => {
                if (!this._rend) {
                    this._rend = (o) => <SText>{JSON.stringify(o)}</SText>
                }
                var Item = this._rend(data[item], item, index);
                if (!Item) return null;
                return <SSection key={item + 'item_list'}>
                    {space ? (index == 0 ? <SView {...init_separation_style} /> : <SView {...separation_style} />) : null}
                    {Item}
                    {space ? <SView {...separation_style} /> : null}
                </SSection>
            }}

        />
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
                defaultValue={this.state.buscar}
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
            <SView col={"xs-12"} {...this.props} row={this.props.horizontal} flex>
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