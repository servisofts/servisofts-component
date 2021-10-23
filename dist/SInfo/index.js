var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { Text, View } from 'react-native';
var SInfo = /** @class */ (function (_super) {
    __extends(SInfo, _super);
    function SInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SInfo.prototype.render = function () {
        return (React.createElement(View, null,
            React.createElement(Text, null, " Informarciones ")));
    };
    SInfo.Componentes = [
        { name: 'SInfo', detail: 'Informacion de SInfo' },
        { name: 'SComponentContainer', detail: 'Componente de contenedor de SInfo' },
        { name: 'SGrid', detail: 'Grilla de SInfo' },
        { name: 'SIcon', detail: 'Icono de SInfo' },
        { name: 'SNavBar', detail: 'Barra de navegacion de SInfo' },
        { name: 'SNavigation', detail: 'Navegacion de SInfo' },
        { name: 'SPage', detail: 'Pagina de SInfo' },
        { name: 'SText', detail: 'Texto de SInfo' },
        { name: 'STheme', detail: 'Tema de SInfo' },
        { name: 'SThread', detail: 'Hilo de SInfo' },
        { name: 'SUuid', detail: 'Uuid de SInfo' },
        { name: 'SView', detail: 'Vista de SInfo' },
        { name: 'SStorage', detail: 'Almacenamiento de SInfo' },
        { name: 'SSCrollView', detail: 'Almacenamiento de SScrollView' },
        { name: 'SScrollView2', detail: 'Almacenamiento de SScrollView2' },
    ];
    return SInfo;
}(Component));
export default SInfo;
