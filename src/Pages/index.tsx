import { SPageListProps } from "../Types";
import Inicio from "./Inicio";
import SIconPage from "./SIcon";
import SvgToReact from "./SvgToReact";
import Formulario from "./Formulario";
const Pages: SPageListProps = {
    "scomponent": { component: Inicio },
    "scomponent/SIcon": { component: SIconPage },
    "scomponent/SvgToReact": { component: SvgToReact },
    "scomponent/Formulario": { component: Formulario },
}
export default Pages;