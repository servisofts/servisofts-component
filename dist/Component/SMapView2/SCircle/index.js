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
import SCircleAbstract from './abstract';
var SCircle = /** @class */ (function (_super) {
    __extends(SCircle, _super);
    function SCircle(props) {
        return _super.call(this, props) || this;
    }
    SCircle.prototype.renderMap = function (child, _a, _toRemove) {
        var _this = this;
        var map = _a.map, maps = _a.maps;
        if (maps) {
            // if (this.circle) {
            //     this.circle.setMap(null);
            // }
            this.circle = new maps.Circle({
                id: this.props.center.latitude + "," + this.props.center.longitude,
                map: map,
                strokeColor: this.props.strokeColor,
                strokeOpacity: this.props.strokeOpacity,
                strokeWeight: this.props.strokeWidth,
                fillColor: this.props.fillColor,
                fillOpacity: this.props.fillOpacity,
                center: {
                    lat: (!this.props.center.latitude ? 0 : this.props.center.latitude),
                    lng: (!this.props.center.longitude ? 0 : this.props.center.longitude)
                },
                radius: (!this.props.radius ? 100 : this.props.radius)
            });
            _toRemove.push(this.circle);
            this.circle.addListener('click', function (evt) {
                if (_this.props.onPress) {
                    _this.props.onPress(evt);
                }
            });
            //     var path = this.props.coordinates.map(c => { return { lat: c.latitude, lng: c.longitude } });
            //     var pln = new maps.Polyline({
            //         path: path,
            //         geodesic: true,
            //         fillColor: this.props.fillColor,
            //         strokeColor: this.props.strokeColor,
            //         strokeOpacity: 1.0,
            //         strokeWeight: this.props.strokeWidth,
            //     });
            //     pln.setMap(map);
            //     _toRemove.push(pln);
        }
        return null;
    };
    SCircle.prototype.render = function () {
        return null;
    };
    return SCircle;
}(SCircleAbstract));
export default SCircle;
