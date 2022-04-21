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
import { SText, SPage, SButtom, SLocation, SHr } from '../index';
var SLocationPage = /** @class */ (function (_super) {
    __extends(SLocationPage, _super);
    function SLocationPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            position: {}
        };
        return _this;
    }
    SLocationPage.prototype.render = function () {
        var _this = this;
        return (React.createElement(SPage, { title: 'SLocationPage' },
            React.createElement(SText, null, 'POSITION'),
            React.createElement(SText, null, JSON.stringify(this.state.position)),
            React.createElement(SHr, null),
            React.createElement(SHr, null),
            React.createElement(SButtom, { type: "danger", onPress: function () {
                    SLocation.getCurrentPosition().then(function (position) {
                        _this.setState({ position: position });
                    })["catch"](function (error) {
                        console.log(error);
                        _this.setState({ position: error });
                    });
                } }, "GET MY LOCATION"),
            React.createElement(SHr, null),
            React.createElement(SHr, null),
            React.createElement(SText, null, "\n                import { SLocation } from 'servisofts-component';\n\n                 <SButtom type={\"danger\"} onPress={() => {\n                    SLocation.getCurrentPosition().then((position) => {\n                        // this.setState({ position: position });\n                    }).catch((error) => {\n                        console.log(error);\n                        // this.setState({ position: error });\n                    })\n                }}>GET MY LOCATION</SButtom>\n                ")));
    };
    return SLocationPage;
}(Component));
export default SLocationPage;
