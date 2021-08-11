import { SPageListProps } from 'sc-1'
import Componentes from './Componentes';
import Documentation from './Documentation';

import InicioPage from "./InicioPage";

const Pages: SPageListProps = {
    "Inicio": { component: InicioPage },
    ...Documentation,
    ...Componentes,
}
export default Pages;