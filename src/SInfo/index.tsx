import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class SInfo extends Component {

    public static Componentes = [
        { name: 'SInfo', detail: 'Informacion de SInfo' },
        { name: 'SComponentContainer', detail: 'Componente de contenedor de SInfo' },
        { name: 'SGrid', detail: 'Grilla de SInfo' },
        { name: 'SIcon', detail: 'Icono de SInfo' },
        { name: 'SNavBar', detail: 'Barra de navegacion de SInfo' },
        { name: 'SNavigation', detail: 'Navegacion de SInfo' },
        { name: 'SPage', detail: 'Pagina de SInfo' },
        { name: 'SScrollView', detail: 'ScrollView de SInfo' },
        { name: 'SText', detail: 'Texto de SInfo' },
        { name: 'STheme', detail: 'Tema de SInfo' },
        { name: 'SThread', detail: 'Hilo de SInfo' },
        { name: 'SUuid', detail: 'Uuid de SInfo' },
        { name: 'SView', detail: 'Vista de SInfo' },
        { name: 'SStorage', detail: 'Almacenamiento de SInfo' }
    ]

    render() {
        return (
            <View>
                <Text> Informarciones </Text>
            </View>
        )
    }
}
