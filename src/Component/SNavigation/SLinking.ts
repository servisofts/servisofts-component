import { Linking, Platform } from "react-native";
import SNavigation from ".";
import SThread from "../SThread";

export type SLinkingPropsType = {
    prefixes?: string[],
    getInitialURL?: () => any,
}

export const openURL = (url: string, prefixes: string[], replace: boolean) => {
    prefixes.map((p) => {
        if (url.startsWith(p)) {
            let pageAndParams = url.substring(p.length, url.length);
            let arrpp = pageAndParams.split("?");
            let page = arrpp[0]
            let search = arrpp[1]
            let params = {};
            if (search) {
                params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
            }
            if (replace) {
                SNavigation.replace("/" + page, params)
            } else {
                SNavigation.navigate("/" + page, params)
            }
            return null;
        }
    })

}
export default (props: SLinkingPropsType, pages): any => {
    if (!props.prefixes) return null;
    if (Platform.OS == "web") {
        let screens = {}
        Object.keys(pages).map(k => {
            var url = k;
            if (pages[k].params) {
                pages[k].params.map((parm) => {
                    url += "/:" + parm;
                })
            }
            screens[k] = url;
        })
        return {
            prefixes: [],
            config: {
                screens: screens

            },
        }
    }
    return null;
    return {
        prefixes: props.prefixes,
        async getInitialURL() {
            const url = await Linking.getInitialURL();
            console.log("ENTRO AL LINKING GET INITIAL URL", url)
            if (url != null) {
                new SThread(1000, "deeplink", false).start(() => {
                    openURL(url, props.prefixes, false);
                })
                return null
            }
            if (props.getInitialURL) props.getInitialURL();
            return null;
        },
    }
}