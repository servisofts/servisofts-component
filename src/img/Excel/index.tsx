
import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 48 48">
        <Path fill="#169154" d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z" />
        <Path fill="#18482a" d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z" />
        <Path fill="#0c8045" d="M14 15.003H29V24.005000000000003H14z" />
        <Path fill="#17472a" d="M14 24.005H29V33.055H14z" />
        <Path fill="#29c27f" d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z" />
        <Path fill="#27663f" d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z" />
        <Path fill="#19ac65" d="M29 15.003H44V24.005000000000003H29z" />
        <Path fill="#129652" d="M29 24.005H44V33.055H29z" />
        <Path fill="#0c7238" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z" />
        <Path fill="#fff" d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z" />
    </Svg>

)
const Native = Web;
export default { Native, Web }
