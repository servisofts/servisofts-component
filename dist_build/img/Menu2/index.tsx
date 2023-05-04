import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 28 28">
  <Path  d="M21,14H0V11.667H21V14Zm0-5.833H0V5.834H21V8.166Zm0-5.834H0V0H21V2.332Z"  fill="#fff"/>
</Svg>

)
const Native = Web;
export default { Native, Web }