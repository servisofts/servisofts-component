import STheme from "../Component/STheme"
import Add from "./Add"
import Ajustes from "./Ajustes"
import AlertOutline from "./AlertOutline"
import Alert from "./Alert"
import Ambiente from "./Ambiente"
import Arrow from "./Arrow"
import Back from "./Back"
import Background from "./Background"
import Background2 from "./Background2"
import Box from "./Box"
import Caja from "./Caja"
import Carrito from "./Carrito"
import Check from './Check'
import Card from "./Card"
import Cheque from "./Cheque"
import Close from "./Close"
import Cerrar from "./Cerrar"
import Delete from "./Delete"
import Edit from "./Edit"
import Egreso from "./Egreso"
import Engranaje from "./Engranaje"
import Entrenamiento from "./Entrenamiento"
import Evento from "./Evento"
import Excel from "./Excel"
import Eyes from "./Eyes"
import Favorito from "./Favorito"
import Favorito2 from "./Favorito2"
import Girl from "./Girl"
import Ingreso from "./Ingreso"
import Lock from "./Lock"
import LockOutline from "./LockOutline"
import Moon from "./Moon"
import Menu from "./Menu"
import Menu2 from "./Menu2"
import Money from "./Money"
import NoDelete from "./NoDelete"
import Off from "./Off"
import Paquete from "./Paquete"
import Parameter from "./Parameter"
import Profanity from "./Profanity"
import Reload from "./Reload"
import Reserve from "./Reserve"
import Salir from "./Salir"
import Search from "./Search"
import Servisofts from "./Servisofts"
import Sun from "./Sun"
import Tranfer from "./Tranfer"
import Traspaso from "./Traspaso"
import Usuarios from "./Usuarios"
import Wifi from "./Wifi"
import WifiDisconnect from "./WifiDisconnect"
import Svg from "./Svg";
const Icons = {
    Add,
    Ajustes,
    AlertOutline,
    Alert,
    Ambiente,
    Arrow,
    Back,
    Background,
    Background2,
    Box,
    Caja,
    Card,
    Carrito,
    Cerrar,
    Check,
    Cheque,
    Close,
    Delete,
    Edit,
    Egreso,
    Engranaje,
    Entrenamiento,
    Evento,
    Excel,
    Eyes,
    Favorito,
    Favorito2,
    Girl,
    Ingreso,
    Lock,
    LockOutline,
    Moon,
    Menu,
    Menu2,
    Money,
    NoDelete,
    Off,
    Paquete,
    Parameter,
    Profanity,
    Reload,
    Reserve,
    Salir,
    Search,
    Servisofts,
    Sun,
    Tranfer,
    Traspaso,
    Usuarios,
    "Icon2": Alert,
    Wifi,
    WifiDisconnect,
    ...Svg

}
export default Icons;

// Lo que viente antes del _ es el nombre de la imagen ejemplo: {name}_blue
export const IconsVariant = {
    "Alert": { fill: "#c31c37" },
    "Usuarios": { fill: "transparent" },
    "Usuarios_all": { fill: "#414D90" },
    "Usuarios_cliente": { fill: "#5E5F1B" },
    "Usuarios_ventas": { fill: "#67C0B9" },
    "Usuarios_proveedor": { fill: "#7A0724" },
    "Usuarios_entrenador": { fill: "#15161A" },
    "Usuarios_administrador": { fill: "#83848A" },
}
export type IconVariantType = keyof typeof IconsVariant;

export type IconNames = keyof typeof Icons | IconVariantType;


