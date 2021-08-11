import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';
import Pages from './Pages';
const App = (props) => {
    return (
        <SComponentContainer
            // debug
            theme={{
                initialTheme: "dark",
                themes: {
                    default: {
                        barStyle: "dark-content",
                        barColor: "#ffffff",
                        primary: "#ffffff",
                        secondary: "#000000",
                        background: "#dddddd"
                    },
                    dark: {
                        barStyle: "light-content",
                        barColor: "#000000",
                        primary: "#000000",
                        secondary: "#ffffff",
                        background: "#222222"
                    }
                }
            }}>
            <SNavigation props={{
                prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                pages: {
                    ...Pages
                }
            }} />
        </SComponentContainer>
    )
}
export default App;