import React, { Component } from 'react';
import { Animated } from 'react-native';
import { SView, SText, STheme } from '../../../index';
import SAPanResponder from '../../SAnimated/SAPanResponder';
import SIcon from '../../SIcon';
import SPopup from '../../SPopup';
import HAjustes from '../HAjustes';

export type HeaderProps = {
    label: String,
    key: string,
    width?: number,
    index?: number,
    space?: number,
    hidden?: Boolean,
    editable?: Boolean,
    order?: "asc" | "desc",
    orderPriority?: number,
    // type?: SInputType,
    component?: any,
    options?: Array<any>,
    render?: (data: any, id?: any) => {},
    animWidth?: Animated.Value,
    changeHF: any,
    key_header: any,
    filter_h?: any,
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
            <SIcon name={this.props.filter_h?"Ajustes":"Engranaje"} fill={STheme.color.secondary + "66"} width={10} />
        </SView>
    }
    render() {
        return (
            <>
                <SView width={this.props.space ? this.props.space : 0} height />
                <SView
                    animated
                    height
                    center
                    style={{
                        width: this.props.animWidth,
                        backgroundColor: STheme.color.primary,
                        borderRadius: 2,
                        overflow: 'hidden',
                    }}>
                    <SView row center>
                        <SText fontSize={11} font={"Roboto-Bold"}>{this.props.label}</SText>
                        {this.props.order ? <SView width={14} center style={{
                            transform: [{ rotate: (this.props.order != "desc" ? "90deg" : "-90deg") }],
                        }}>
                            <SIcon name={"Arrow"} fill={STheme.color.secondary} width={10} />
                        </SView> : null}
                    </SView>

                    <SView
                        {...this.pan.getPanHandlers()}
                        animated
                        style={{
                            position: "absolute",
                            right: 0,
                            width: 16,
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