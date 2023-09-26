import { Linking, Platform } from "react-native";
import SNavigation from ".";
import SThread from "../SThread";

export type SLinkingPropsType = {
    prefixes?: string[],
    getInitialURL?: () => any,
}

export const openURL = (url: string, prefixes: string[]) => {
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
            console.log("Entro acaaa")
            SNavigation.replace("/" + page, params)
            return null;
        }
    })

}
export default ({ prefixes, getInitialURL }: SLinkingPropsType, pages): any => {
    if (!prefixes) return null;
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
    return {
        prefixes: prefixes,
        async getInitialURL() {
            const url = await Linking.getInitialURL();
            if (url != null) {
                new SThread(1000, "deeplink", false).start(() => {
                    openURL(url, prefixes);
                })
                return null
            }
            if (getInitialURL) getInitialURL();
            return url;
        },
        subscribe(listener) {
            const onReceiveURL = ({ url }: { url: string }) => {
                openURL(url, prefixes);
            };
            Linking.addEventListener('url', onReceiveURL);
            return () => {
                Linking.removeEventListener('url', onReceiveURL);
            };
        },
        config: {
            screens: {
                "test": {
                    path: "test"
                }
            }
        },
    }
}