import Geolocation from '@react-native-community/geolocation';
var SLocation = /** @class */ (function () {
    function SLocation() {
    }
    SLocation.getCurrentPosition = function () {
        return new Promise(function (resolve, reject) {
            Geolocation.getCurrentPosition(function (position) {
                var region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                resolve(region);
            }, function (error) {
                reject(error);
            }, { enableHighAccuracy: false, timeout: 1500, maximumAge: 10000 });
        });
    };
    return SLocation;
}());
export default SLocation;
