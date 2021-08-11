import { SPageListProps } from 'sc-1'

import Introduccion from "./1_introduccion";
import Install from "./2_install";
import Grid from './3_grid/index';

const Documentation: SPageListProps = {
    "docs": {
        component: Introduccion
    },
    "docs/install": {
        component: Install
    },
    "docs/grid": {
        component: Grid
    },
}
export default Documentation;