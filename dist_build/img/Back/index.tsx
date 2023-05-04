import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 7.4 12">
        <Path d="M7.4,1.41,5.992,0,0,6l5.992,6L7.4,10.59,2.826,6Z" />
    </Svg>

)
const Native = Web;
export default { Native, Web }