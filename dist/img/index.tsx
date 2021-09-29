import STheme from "../Component/STheme"
import Add from "./Add"
import Ajustes from "./Ajustes"
import AlertOutline from "./AlertOutline"
import Alert from "./Alert"
import Arrow from "./Arrow"
import Background from "./Background"
import Box from "./Box"
import Caja from "./Caja"
import Carrito from "./Carrito"
import Card from "./Card"
import Cheque from "./Cheque"
import Delete from "./Delete"
import Egreso from "./Egreso"
import Engranaje from "./Engranaje"
import Ingreso from "./Ingreso"
import Lock from "./Lock"
import LockOutline from "./LockOutline"
import Moon from "./Moon"
import Money from "./Money"
import NoDelete from "./NoDelete"
import Off from "./Off"
import Paquete from "./Paquete"
import Parameter from "./Parameter"
import Profanity from "./Profanity"
import Reload from "./Reload"
import Salir from "./Salir"
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
    Arrow,
    Background,
    Box,
    Caja,
    Card,
    Carrito,
    Cheque,
    Delete,
    Egreso,
    Engranaje,
    Ingreso,
    Lock,
    LockOutline,
    Moon,
    Money,
    NoDelete,
    Off,
    Paquete,
    Parameter,
    Profanity,
    Reload,
    Salir,
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


