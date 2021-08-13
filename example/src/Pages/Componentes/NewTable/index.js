import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { SText, STable, SView } from 'servisofts-component';
import DataJson from './data.json'
class NewTable extends Component {
    static navigationOptions = {
        headerShown: false,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getCuadricula({ width, height, space }) {

        var Cuadricula = [];
        var separation = !space ? 20 : space
        for (let i = 0; i < height; i += separation) {
            for (let j = 0; j < width; j += separation) {
                var pos = {
                    x: j / separation,
                    y: i / separation
                }
                Cuadricula.push(<SView
                    props={{
                        customStyle: (((pos.x + pos.y) % 2) == 0 ? "primary" : "secondary")
                    }}
                    onPress={(evt) => {
                        this.scroll.scrollTo({ x: evt.layout.x + 50, y: evt.layout.y + 50 });
                    }}
                    style={{
                        width: separation,
                        height: separation
                    }}>
                    {/* {`{ x: ${j/separation}, y: ${i/separation} }`} */}
                    {`${pos.x},${pos.y}`}
                </SView>)
            }
        }
        return Cuadricula;
    }
    render() {
        return (
            <SView props={{
                variant: "center",
            }} style={{
                width: "100%",
                height: "100%"
            }}>
                <SView style={{
                    width: "100%",
                    height: "100%",
                }}>
                    <STable
                        header={[
                            { label: "Nombres", key: "data/Nombres/dato", width: 150, index: 2 },
                            { label: "Apellidos", key: "data/Apellidos/dato", width: 120, index: 1 },
                            { label: "Correo", key: "data/Correo/dato", width: 200, index: 3 },
                            { label: "Fecha nacimineto", key: "data/Fecha de nacimiento/dato", width: 120, index: 4 },
                            { label: "Teléfono", key: "data/Telefono/dato", width: 120, index: 5 },
                            { label: "Sexo", key: "data/Sexo/dato", width: 80, index: 6 },
                            { label: "Nacionalidad", key: "data/Nacionalidad/dato", width: 100, index: 7 },
                            { label: "Domicilio actual", key: "data/Domicilio actual/dato/direccion", width: 250, index: 8 },
                            { label: "Codigo de referencia", key: "data/Codigo de referencia/dato", width: 100, index: 9 },
                            { label: "Carnet de identidad", key: "data/Carnet de identidad/dato/back", width: 100, index: 10 },
                            { label: "Password", key: "data/Password/dato", width: 200, index: 11 },
                            // { label: "Fecha", key: "Apellidos/fecha_on", width: 180 },
                        ]}
                        data={DataJson}
                    />
                </SView>
            </SView>
        );
    }
}

export default NewTable
