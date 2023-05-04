var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Inicio from "./Inicio";
import SIconPage from "./SIcon";
import SvgToReact from "./SvgToReact";
import Formulario from "./Formulario";
import STablePage from "./STablePage";
import SGradientPage from "./SGradientPage";
import SInputPages from "../Component/SInput/SInputPages";
import SViewPage from "./SViewPage";
import Docs from "./Docs";
import NewTable from "./NewTable";
import SDate from "./Doc_SDate";
import SLocationPage from "./SLocationPage";
import SMath from "./SMath";
var Pages = __assign({ "servisofts": { component: Inicio }, "scomponent": { component: Inicio }, "scomponent/SMath": { component: SMath }, "scomponent/SIcon": { component: SIconPage }, "scomponent/SvgToReact": { component: SvgToReact }, "scomponent/Formulario": { component: Formulario }, "scomponent/STable": { component: STablePage }, "scomponent/SGradient": { component: SGradientPage }, "scomponent/SView": SViewPage, "scomponent/docs": Docs, "scomponent/NewTable": NewTable, "scomponent/SDate": SDate, "scomponent/SLocation": SLocationPage }, SInputPages);
export default Pages;
