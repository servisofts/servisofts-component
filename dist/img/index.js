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
import Add from "./Add";
import Ajustes from "./Ajustes";
import AlertOutline from "./AlertOutline";
import Alert from "./Alert";
import Arrow from "./Arrow";
import Box from "./Box";
import Carrito from "./Carrito";
import Delete from "./Delete";
import Engranaje from "./Engranaje";
import Lock from "./Lock";
import LockOutline from "./LockOutline";
import Moon from "./Moon";
import Parameter from "./Parameter";
import Profanity from "./Profanity";
import Reload from "./Reload";
import Salir from "./Salir";
import Sun from "./Sun";
import Usuarios from "./Usuarios";
import Wifi from "./Wifi";
import WifiDisconnect from "./WifiDisconnect";
import Svg from "./Svg";
var Icons = __assign({ Add: Add, Ajustes: Ajustes, AlertOutline: AlertOutline, Alert: Alert, Arrow: Arrow, Box: Box, Carrito: Carrito, Delete: Delete, Engranaje: Engranaje, Lock: Lock, LockOutline: LockOutline, Moon: Moon, Parameter: Parameter, Profanity: Profanity, Reload: Reload, Salir: Salir, Sun: Sun, Usuarios: Usuarios, "Icon2": Alert, Wifi: Wifi, WifiDisconnect: WifiDisconnect }, Svg);
export default Icons;
// Lo que viente antes del _ es el nombre de la imagen ejemplo: {name}_blue
export var IconsVariant = {
    "Alert": { fill: "#c31c37" },
    "Usuarios": { fill: "transparent" },
    "Usuarios_all": { fill: "#414D90" },
    "Usuarios_cliente": { fill: "#5E5F1B" },
    "Usuarios_ventas": { fill: "#67C0B9" },
    "Usuarios_proveedor": { fill: "#7A0724" },
    "Usuarios_entrenador": { fill: "#15161A" },
    "Usuarios_administrador": { fill: "#83848A" }
};
