
import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg  {...props} viewBox="0 0 74 53.87">
        <Path d="M78,62.52V49.37a13,13,0,0,0-13-13H17a13,13,0,0,0-13,13V62.52Z" transform="translate(-4 -14.2)" />
        <Rect class="cls-1" x="11.68" y="49.39" width="16.89" height="4.49" />
        <Rect class="cls-1" x="45.43" y="49.39" width="16.89" height="4.49" />
        <Path class="cls-1" d="M65,14.2H17a13,13,0,0,0-13,13V42.32H4c.41-4.49,5.17-8.12,11.27-8.68V30.2a3.82,3.82,0,0,1,3.83-3.83H35.55a3.82,3.82,0,0,1,3.82,3.83v3.36h3.26V30.2a3.82,3.82,0,0,1,3.82-3.83H62.86a3.82,3.82,0,0,1,3.83,3.83v3.44c6.1.56,10.86,4.19,11.27,8.68h0V27.18A13,13,0,0,0,65,14.2Z" transform="translate(-4 -14.2)" />
    </Svg>

)
const Native = Web;
export default { Native, Web }