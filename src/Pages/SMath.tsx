import React, { Component } from 'react';
import { SHr, SList, SMath, SPage, SText, SView } from '../';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const dataTest = [
            10,
            100,
            10000,
            21312.2133,
            234234,
            0,
            0.009,
            -100.323,
            "100",
            "1020203.320320"
        ]
        return (
            <SPage title={'SMath'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>

                    <SHr height={50} />
                    <SText>{'SMath.formatMoney(n)'}</SText>
                    <SList
                        center
                        space={16}
                        data={dataTest}
                        render={n => <SText fontSize={18} col={"xs-12"} style={{ textAlign: "right" }}>{SMath.formatMoney(n)}</SText>}
                    />
                    <SHr height={50} />
                    <SText>{'SMath.formatMoney(n,0)'}</SText>
                    <SList
                        center
                        space={16}
                        data={dataTest}
                        render={n => <SText fontSize={18} col={"xs-12"} style={{ textAlign: "right" }}>{SMath.formatMoney(n, 0)}</SText>}
                    />
                    <SHr height={50} />

                    <SText>{'SMath.formatMoney( n , 2 , "." )'}</SText>
                    <SList
                        center
                        space={16}
                        data={dataTest}
                        render={n => <SText fontSize={18} col={"xs-12"} style={{ textAlign: "right" }}>{SMath.formatMoney(n, 2, ".")}</SText>}
                    />
                    <SHr height={50} />
                    <SText>{'SMath.formatMoney( n , 0 , "." )'}</SText>
                    <SList
                        center
                        space={16}
                        data={dataTest}
                        render={n => <SText fontSize={18} col={"xs-12"} style={{ textAlign: "right" }}>{SMath.formatMoney(n, 0, ".")}</SText>}
                    />
                </SView>
            </SPage>
        );
    }
}
