
import React from 'react'
import Svg from "react-native-svg";
import { Path, Rect, Line, Circle } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 141.73 141.73">
<Rect fill="#1d1d1b" width="141.73" height="141.73" rx="34.98"/>
<Path fill="#fff" d="M109.3,41.15a6,6,0,0,0-6,6v2h-16v-18a6,6,0,1,0-12,0v2H39.4v-2a6,6,0,0,0-12,0v79.89a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V45.14h8V57.49a6,6,0,1,0,4,0V45.14h12V57.49a6,6,0,1,0,4,0V45.14h8v65.91a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V61.12h16v49.93a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V47.14A6,6,0,0,0,109.3,41.15Zm-71.9,0a2,2,0,0,0-2,2v65.9h-4V31.16a2,2,0,0,1,4,0v4a2,2,0,0,0,2,2h10v4Zm12,24a2,2,0,1,1,2-2A2,2,0,0,1,49.38,65.12Zm2-24v-4h12v4Zm14,24a2,2,0,1,1,2-2A2,2,0,0,1,65.36,65.12Zm45.93,43.93h-4V59.12a2,2,0,0,0-2-2h-20a2,2,0,0,0-2,2v49.93h-4V43.15a2,2,0,0,0-2-2h-10v-4h10a2,2,0,0,0,2-2v-4a2,2,0,0,1,4,0v20a2,2,0,0,0,2,2h20a2,2,0,0,0,2-2v-4a2,2,0,1,1,4,0Z"/>
</Svg>

)
const Native = Web;
export default { Native, Web }
