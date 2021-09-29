import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 141.73 141.73">
        <Rect fill="#53b15b" width="141.73" height="141.73" rx="34.98" />
        <Path fill="#1d1d1b" d="M107.85,62l-37-12.26L33.89,62,21.26,82l11.62,3.85v21.32l38,12.59,38-12.59V85.87L120.47,82ZM96.7,64.39,70.87,73,45,64.39l25.84-8.56ZM30.13,78.84l6.91-11,29.39,9.74-6.9,11Zm8.57,9L62,95.53,68,86.09v26.6L38.7,103Zm35.07,24.89V86.09l5.94,9.44L103,87.8V103Zm8.44-24.11-6.91-11,29.39-9.74,6.91,11Z" />
        <Path fill="#1d1d1b" d="M68,20.56h5.81V40H68Z" />
        <Path fill="#1d1d1b" d="M40.62,29.45l5-2.91,9.71,16.81-5,2.91Z" />
        <Path fill="#1d1d1b" d="M86.37,43.35l9.71-16.81,5,2.91-9.7,16.81Z" />
    </Svg>

)
const Native = Web;
export default { Native, Web }
