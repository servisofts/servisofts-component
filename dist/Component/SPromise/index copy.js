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
var SPromise = /** @class */ (function (_super) {
    __extends(SPromise, _super);
    function SPromise(executor, timeout) {
        var _this = this;
        var timeoutId;
        var timeoutPromise = new Promise(function (resolve, reject) {
            timeoutId = setTimeout(function () {
                reject(new Error("Promise timed out after " + timeout + " ms"));
            }, timeout);
        });
        _this = _super.call(this, function (resolve, reject) {
            Promise.race([executor(), timeoutPromise])
                .then(function (result) {
                clearTimeout(timeoutId);
                resolve(result);
            })["catch"](function (error) {
                clearTimeout(timeoutId);
                reject(error);
            });
        }) || this;
        return _this;
    }
    return SPromise;
}(Promise));
export default SPromise;
