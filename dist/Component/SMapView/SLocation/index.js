var SLocation = /** @class */ (function () {
    function SLocation() {
    }
    SLocation.getCurrentPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var center = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                resolve(center);
            }, function (error) {
                reject(error);
            });
        });
    };
    return SLocation;
}());
export default SLocation;
