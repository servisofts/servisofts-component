
import React, { Component } from 'react';
import { HeaderProps, SHr, SList, SText, SView } from '../../../index';
import SForm from '../../SForm';
import SIcon from '../../SIcon';
import SPage from '../../SPage';
import STheme from '../../STheme';
import SThread from '../../SThread';


class HAjustes extends Component {
    props: HeaderProps;
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getOptions() {
        if (!this.props.options) return null;
        return <SView>
            <SText bold fontSize={16}>{this.props.label}</SText>
            <SHr />
            <SText>Opciones disponibles para buscar:</SText>
            <SHr h={4}/>
            <SList
                data={this.props.options}
                horizontal
                render={(a) => <SText bold color={STheme.color.lightGray}>{a}</SText>}
            />
        </SView>
    }
    getForm() {
        return <SView col={"xs-11"} flex>
            <SHr />
            {this.getOptions()}
            <SHr />
            <SForm
                
                inputProps={{
                    // customStyle: "calistenia",
                }}
                inputs={{
                    // "order": { label: "Ordenar", type: "select", defaultValue: this.props?.order, options: ["no", "asc", "desc"], },
                    "filtro_in": {
                        label: "Filtro IN", placeholder: "Filtro para encontrar", defaultValue: this.props?.filter_h, icon: (<SIcon name='Search' width={20} fill={STheme.color.secondary} />), onChangeText: (text) => {
                            if (this.props.changeHF) {
                                new SThread(400, "tbl_buscar_hf", true).start(() => {
                                    this.props.changeHF(text)
                                })

                            }
                        }
                    },
                    "filtro_notin": {
                        label: "Filtro Not IN", placeholder: "Filtro para ignorar", defaultValue: this.props?.filter_notin, icon: (<SIcon name='Search' width={20} fill={STheme.color.secondary} />), onChangeText: (text) => {
                            if (this.props.changeHFNI) {
                                new SThread(400, "tbl_buscar_hf", true).start(() => {
                                    this.props.changeHFNI(text)
                                })

                            }
                        }
                    },
                }} />
        </SView>
    }
    render() {
        return (
            <SView col={"xs-11 sm-10 md-8 lg-6"} height={400} withoutFeedback style={{
                borderRadius: 8,
                overflow: "hidden",
            }}>
                <SView col={"xs-12"} height backgroundColor={STheme.color.background} center>
                    {SPage.backgroundComponent}
                    {this.getForm()}
                </SView>
            </SView>
        );
    }
}
export default HAjustes;