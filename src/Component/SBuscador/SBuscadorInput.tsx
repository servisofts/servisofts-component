import React, { Component } from 'react';
import { SHr, SIcon, SInput, SText, STheme, SThread, SView } from '../..';
import { SBuscadorInputPropsType } from './type';


export default class SBuscadorInput extends Component<SBuscadorInputPropsType> {
    props: SBuscadorInputPropsType;
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    _buscador
    data: [];
    proccessData() {
        this.data = [];
        if (!this.props.data) return;
        // if()
    }
    render() {
        this.proccessData();
        // if (!this.props.buscador) return null;
        var cant = 0;
        return <SView col={"xs-12"}>
            <SInput
                icon={<SView center col={"xs-12"} height><SIcon name={"Search"} fill={STheme.color.gray} width={22} /></SView>}
                iconR={<SView center style={{
                    padding: 4
                }} height><SText fontSize={12} color={STheme.color.gray}>{`(${cant ?? 0})`}</SText></SView>}
                placeholder={"Buscar..."}
                ref={r => this._buscador = r}
                onChangeText={(val) => {
                    new SThread(500, "SBuscadorInput", true).start(() => {
                        if (!this.props.onChange) return;
                        this.props.onChange(val)
                    })
                }} />
        </SView>
    }
}