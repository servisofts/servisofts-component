import { SPageListProps } from "../Types";
import Inicio from "./Inicio";
import SIconPage from "./SIcon";
import SvgToReact from "./SvgToReact";
import Formulario from "./Formulario";
import STablePage from "./STablePage";

const Pages: SPageListProps = {
    "scomponent": { component: Inicio },
    "scomponent/SIcon": { component: SIconPage },
    "scomponent/SvgToReact": { component: SvgToReact },
    "scomponent/Formulario": { component: Formulario },
    "scomponent/STable": { component: STablePage },
}
export default Pages;