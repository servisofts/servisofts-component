import React from "react";
import { TextProps, Text as TextReact } from "react-native"
import SStorage from "../SStorage";
export type Language = "es" | "en";

export type LanguageSource = {
    [key in Language]?: string;
};

export type SLanguageType = {
    defaultLanguage: Language,
    children?: any,
}


export type TextTypeLanguaje = {
} & LanguageSource & TextProps

export class Text extends React.Component<TextTypeLanguaje> {
    state = {
        language: SLanguage.language,
    }
    onChangeLanguage(language: Language) {
        this.setState({ language: language })
    }
    componentDidMount(): void {
        SLanguage.addListener(this.onChangeLanguage.bind(this))
    }
    componentWillUnmount(): void {
        SLanguage.removeListener(this.onChangeLanguage)
    }
    render() {
        const value = this.props[this.state.language];
        return <TextReact {...this.props} >{value}</TextReact >
    }
}

type Listener = (language: Language) => void;
export default class SLanguage extends React.Component<SLanguageType> {
    static Text = Text;
    static Listeners: Listener[] = [];
    static language: Language = "es";
    static loadStorage() {
        SStorage.getItem("language", (l: Language) => {
            if (!l) return;
            SLanguage.change(l);
        })
    }
    static addListener(listener: Listener) {

        SLanguage.Listeners.push(listener);
    }
    static removeListener(listener: Listener) {
        const index = SLanguage.Listeners.indexOf(listener);
        if (index !== -1) {
            SLanguage.Listeners.splice(index, 1);
        }
    }
    static notifyListener(language: Language) {
        SLanguage.Listeners.forEach(a => a(language))
    }

    static change = async (language: Language) => {
        if (SLanguage.language == language) return;
        SLanguage.language = language
        SStorage.setItem("language", language)
        SLanguage.notifyListener(language)

    }

    static select(l: LanguageSource) {
        return l[this.language];
    }

}
