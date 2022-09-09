
import React, { Component } from 'react';
import { SView } from '../../../index';
import SForm from '../../SForm';
import SIcon from '../../SIcon';
import SPage from '../../SPage';
import STheme from '../../STheme';
import SThread from '../../SThread';


class HAjustes extends Component {
    props;
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getForm() {
        return <SView col={"xs-11"}>
            <SForm
                inputProps={{
                    customStyle: "calistenia"
                }}
                inputs={{
                    // "order": { label: "Ordenar", type: "select", defaultValue: this.props?.order, options: ["no", "asc", "desc"], },
                    "filtro": {
                        label: "Filtro", placeholder: "Filtro", defaultValue: this.props?.filter_h, icon: (<SIcon name='Search' width={20} fill={STheme.color.secondary} />), onChangeText: (text) => {
                            console.log(text);
                            if (this.props.changeHF) {
                                new SThread(400, "tbl_buscar_hf", true).start(() => {
                                    this.props.changeHF(text)
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