import { NativeModules, Platform } from 'react-native';
export var ServisoftsComponent = Platform.select({
    android: NativeModules.ServisoftsComponent,
    ios: NativeModules.ServisoftsComponent
});
var SNativeModules = /** @class */ (function () {
    function SNativeModules() {
    }
    SNativeModules.test = function () {
        if (!ServisoftsComponent)
            return this.deniedModule();
        return ServisoftsComponent.test();
    };
    var _a;
    _a = SNativeModules;
    SNativeModules.ServisoftsComponent = ServisoftsComponent;
    SNativeModules.deniedModule = function () {
        return new Promise(function (resolve, reject) { return reject("SNativeModule [ServisoftsComponent] Not found."); });
    };
    SNativeModules.setSoftInputMode = function (options) {
        if (!ServisoftsComponent)
            return _a.deniedModule();
        return ServisoftsComponent.setSoftInputMode(options);
    };
    return SNativeModules;
}());
export default SNativeModules;
