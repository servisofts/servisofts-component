import { PanResponder } from 'react-native';
var SAPanResponder = /** @class */ (function () {
    function SAPanResponder(props) {
        this.props = props;
        this.createPam();
    }
    SAPanResponder.prototype.getPanHandlers = function () {
        return this.panResponder.panHandlers;
    };
    SAPanResponder.prototype.createPam = function () {
        var _this = this;
        this.panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: function (evt, gestureState) { return (gestureState.dx != 0 || gestureState.dy != 0); },
            // onShouldBlockNativeResponder:(evt,gh)=>true,
            // onMoveShouldSetPanResponder: (evt, gestureState) => true,
            // onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: function (evt, gs) {
                if (_this.props.onGrand)
                    _this.props.onGrand(evt, gs);
                // console.log("onPanResponderGrant")
            },
            onPanResponderMove: function (evt, gs) {
                if (_this.props.onMove)
                    _this.props.onMove(evt, gs);
                // console.log("onPanResponderMove")
            },
            onPanResponderRelease: function (evt, gs) {
                if (_this.props.onRelease)
                    _this.props.onRelease(evt, gs);
                // console.log("onPanResponderRelease")
            },
            onPanResponderEnd: function (evt, gs) {
                if (_this.props.onEnd)
                    _this.props.onEnd(evt, gs);
                // console.log("onPanResponderEnd")
            }
        });
    };
    return SAPanResponder;
}());
export default SAPanResponder;
