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
import SPolylineAbstract from './abstract';
var SPolyline = /** @class */ (function (_super) {
    __extends(SPolyline, _super);
    function SPolyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SPolyline.prototype.renderMap = function (child, _a, _toRemove) {
        var map = _a.map, maps = _a.maps;
        if (maps) {
            var path = this.props.coordinates.map(function (c) { return { lat: c.latitude, lng: c.longitude }; });
            var pln = new maps.Polyline({
                path: path,
                geodesic: true,
                fillColor: this.props.fillColor,
                strokeColor: this.props.strokeColor,
                strokeOpacity: 1.0,
                strokeWeight: this.props.strokeWidth
            });
            pln.setMap(map);
            _toRemove.push(pln);
        }
        return null;
    };
    SPolyline.prototype.render = function () {
        return null;
    };
    return SPolyline;
}(SPolylineAbstract));
export default SPolyline;
