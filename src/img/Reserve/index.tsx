import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 24 24">
        <Path d="M10,0C4.48,0,0,2.24,0,5,0,7.24,2.94,9.13,7,9.77V13l4-4L7,5V7.73C3.85,7.17,2,5.83,2,5c0-1.06,3.04-3,8-3s8,1.94,8,3c0,.73-1.46,1.89-4,2.53V9.58c3.53-.77,6-2.53,6-4.58C20,2.24,15.52,0,10,0Z" transform="translate(2.5 6)" />
    </Svg>
)
const Native = Web;
export default { Native, Web }