import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 27 27">
        <Path d="M11.219,20.194,9.592,18.741C3.814,13.6,0,10.212,0,6.053A6.053,6.053,0,0,1,6.17,0a6.772,6.772,0,0,1,5.048,2.3A6.772,6.772,0,0,1,16.267,0a6.053,6.053,0,0,1,6.17,6.053c0,4.16-3.814,7.549-9.592,12.7Z" transform="translate(2.244 3.366)" />
    </Svg>

)
const Native = Web;
export default { Native, Web }