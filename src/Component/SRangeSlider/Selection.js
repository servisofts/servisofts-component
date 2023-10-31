// @ts-nocheck
import { Platform } from "react-native";

export default {
    preventSelection: () => {
        if (Platform.OS != "web") return;
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
        document.body.style.mozUserSelect = "none";
        document.body.style.msUserSelect = "none";
    },
    allowSelection: () => {
        if (Platform.OS != "web") return;
        document.body.style.userSelect = "";
        document.body.style.webkitUserSelect = "";
        document.body.style.mozUserSelect = "";
        document.body.style.msUserSelect = "";
    }

}