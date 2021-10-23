import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 24 24">
        <Path d="M12,0H2A2.006,2.006,0,0,0,0,2V18l7-3,7,3V2A2.006,2.006,0,0,0,12,0Z" transform="translate(5 3)" />
    </Svg>

)
const Native = Web;
export default { Native, Web }