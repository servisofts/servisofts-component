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
import { SView } from '../../../index';
import SForm from '../../SForm';
import SIcon from '../../SIcon';
import SPage from '../../SPage';
import STheme from '../../STheme';
import SThread from '../../SThread';
var HAjustes = /** @class */ (function (_super) {
    __extends(HAjustes, _super);
    function HAjustes(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    HAjustes.prototype.getForm = function () {
        var _this = this;
        var _a;
        return React.createElement(SView, { col: "xs-11" },
            React.createElement(SForm, { inputProps: {
                    customStyle: "calistenia"
                }, inputs: {
                    // "order": { label: "Ordenar", type: "select", defaultValue: this.props?.order, options: ["no", "asc", "desc"], },
                    "filtro": {
                        label: "Filtro", placeholder: "Filtro", defaultValue: (_a = this.props) === null || _a === void 0 ? void 0 : _a.filter_h, icon: (React.createElement(SIcon, { name: 'Search', width: 20, fill: STheme.color.secondary })), onChangeText: function (text) {
                            console.log(text);
                            if (_this.props.changeHF) {
                                new SThread(400, "tbl_buscar_hf", true).start(function () {
                                    _this.props.changeHF(text);
                                });
                            }
                        }
                    }
                } }));
    };
    HAjustes.prototype.render = function () {
        return (React.createElement(SView, { col: "xs-11 sm-10 md-8 lg-6", height: 400, withoutFeedback: true, style: {
                borderRadius: 8,
                overflow: "hidden"
            } },
            React.createElement(SView, { col: "xs-12", height: true, backgroundColor: STheme.color.background, center: true },
                SPage.backgroundComponent,
                this.getForm())));
    };
    return HAjustes;
}(Component));
export default HAjustes;
