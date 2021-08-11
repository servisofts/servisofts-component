import { SPageListProps } from 'servisofts-component'
import Componentes from './Componentes';
import Documentation from './Documentation';

import InicioPage from "./InicioPage";

const Pages: SPageListProps = {
    "Inicio": { component: InicioPage },
    ...Documentation,
    ...Componentes,
}
export default Pages;