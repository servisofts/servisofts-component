import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 344.63 260.77">
        <Path fill="#8cc534" d="M142.25,14.51,9.44,208.8c-12.3,15.6-12,34.7-2.5,44,6.94,6.82,17.06,6.69,20.37,6.5,153.52,2,266.38,1.94,292-.18,4.86-.41,14.44-1.84,20.1-8.75,7.4-9.05,7.07-23.78-1.9-34.91l-137-200.58C196.79,9.42,186.83.85,173.81.06,159.76-.8,148.24,8.61,142.25,14.51Z" />
    </Svg>

)
const Native = Web;
export default { Native, Web }
