import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 24 24">
        <Path d="M10,20A10,10,0,0,1,2.926,2.926,10,10,0,0,1,17.074,17.074,9.937,9.937,0,0,1,10,20Zm0-8.59h0L13.59,15,15,13.59,11.41,10,15,6.41,13.59,5,10,8.59,6.41,5,5,6.41,8.59,10,5,13.59,6.41,15,10,11.411Z" transform="translate(2 2)" />
    </Svg>

)
const Native = Web;
export default { Native, Web }