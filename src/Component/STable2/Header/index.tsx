import React, { Component } from 'react';
import { Animated } from 'react-native';
import { SView, SText, STheme } from '../../../index';
import SAPanResponder from '../../SAnimated/SAPanResponder';
import SIcon from '../../SIcon';
import SPopup from '../../SPopup';
import HAjustes from '../HAjustes';
import { STable2cellStyle } from '../Row';
import { CellObject } from 'xlsx-color';

export type HeaderProps = {
    label: string,
    key: string,
    width?: number,
    index?: number,
    space?: number,
    hidden?: boolean,
    center?: boolean,
    onPress?: () => any,
    editable?: boolean,
    order?: "asc" | "desc",
    orderType?: any,
    orderPriority?: number,
    component?: any,
    options?: Array<any>,
    renderHeader?: any,
    render?: (data: any, id?: any) => {},
    excelProps?: CellObject,
    renderExcel?: (data: any) => any,
    sumar?: boolean,
    renderTotal?: (total: number) => any,
    animWidth?: Animated.Value,
    changeHF?: any,
    changeHFNI?: any,
    key_header?: any,
    headerColor?: string,
    filter_h?: any,
    filter_notin?: any,
    total?: any,
    cellStyle?: STable2cellStyle
}
class Header extends Component<HeaderProps> {
    pan;
    size;
    constructor(props) {
        super(props);
        this.state = {
        };
        this.createPan();
    }

    initSize;
    createPan() {
        this.pan = new SAPanResponder({
            onGrand: (e, gs) => {
                this.initSize = (this.props.animWidth as any)._value;
            },
            onMove: (e, gs) => {
                if (this.initSize + gs.dx <= 50) {
                    this.props.animWidth.setValue(50)
                    return;
                }
                this.props.animWidth.setValue(this.initSize + gs.dx);
            },
            onRelease: () => {
            }
        });

    }
    getAjustes() {
        return <SView style={{
            position: "absolute",
            width: 16,
            height: 16,
            top: -2,
            left: 2,
        }} onPress={() => {
            SPopup.open({ key: "hp", content: <HAjustes key_header={this.props.key_header} {...this.props} /> })
        }}>
            <SIcon name={this.props.filter_h || this.props.filter_notin ? "Ajustes" : "Engranaje"} fill={STheme.color.secondary + "66"} width={10} />
        </SView>
    }

    renderTotal() {
        let total = this.props.total;
        if (!total) return null;
        total = parseFloat(total);
        if (this.props.renderTotal) {
            let ITEM = this.props.renderTotal(total);
            if (["string", "number"].includes(typeof ITEM)) {
                total = ITEM;
            } else {
                return ITEM;
            }
        } else {
            total = total.toFixed(2);
        }
        return <SText fontSize={12} font={"Roboto"}>{total}</ SText>
    }
    render() {
        var anm: any = this.props.animWidth
        return (
            <>
                <SView width={this.props.space ? this.props.space : 0} height />
                <SView
                    animated
                    height
                    center
                    style={{
                        width: anm,
                        backgroundColor: this.props.headerColor ?? STheme.color.primary,
                        borderRadius: 0,
                        overflow: 'hidden',
                    }}>
                    <SView row center>
                        {this.props.renderHeader ? this.props.renderHeader() : <SText fontSize={11} font={"Calibri"}>{this.props.label}</SText>}
                        {this.props.order ? <SView width={14} center style={{
                            transform: [{ rotate: (this.props.order != "desc" ? "90deg" : "-90deg") }],
                        }}>
                            <SIcon name={"Arrow"} fill={STheme.color.secondary} width={10} />
                        </SView> : null}
                    </SView>
                    <SView row center>
                        {this.renderTotal()}
                    </SView>
                    <SView
                        {...this.pan.getPanHandlers()}
                        animated
                        style={{
                            position: "absolute",
                            right: 0,
                            width: 8,
                            // backgroundColor:"#f0f",
                            zIndex: 99,
                            height: "100%",
                            cursor: "col-resize",
                            alignItems: "flex-end",
                        }}>
                        <SView style={{
                            width: 2,
                            height: "100%",
                            backgroundColor: STheme.color.secondary + "66"
                        }}>
                        </SView>

                    </SView>
                    {this.getAjustes()}
                </SView>
            </>
        );
    }
}
export default Header;