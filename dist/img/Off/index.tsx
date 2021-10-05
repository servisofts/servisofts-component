import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 141.73 141.73">
        <Rect fill="#c31c37" width="141.73" height="141.73" rx="34.98" />
        <Path fill="#fff" d="M90.23,27.43a4.51,4.51,0,0,0-3.61,8.26,40.58,40.58,0,1,1-32.46,0,4.51,4.51,0,1,0-3.62-8.26,49.62,49.62,0,1,0,39.69,0Z" />
        <Path fill="#fff" d="M70.39,63.88a4.5,4.5,0,0,0,4.51-4.5V18.79a4.51,4.51,0,0,0-9,0V59.37A4.5,4.5,0,0,0,70.39,63.88Z" />
    </Svg>

)
const Native = Web;
export default { Native, Web }