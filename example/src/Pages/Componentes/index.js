import { SPageListProps } from 'servisofts-component'

import Inicio from "./Inicio";
import NewTable from './NewTable/index';

const Componentes: SPageListProps = {
    "Componentes": { component: Inicio },
    "Componentes/STable": { component: NewTable },

}
export default Componentes;