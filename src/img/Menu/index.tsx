import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
  <Svg {...props} viewBox="0 0 24 24">
    <Path d="M16,16H12V12h4v4Zm-6,0H6V12h4v4ZM4,16H0V12H4v4Zm12-6H12V6h4v4Zm-6,0H6V6h4v4ZM4,10H0V6H4v4ZM16,4H12V0h4V4ZM10,4H6V0h4V4ZM4,4H0V0H4V4Z" transform="translate(4 4)"  />
  </Svg>

)
const Native = Web;
export default { Native, Web }