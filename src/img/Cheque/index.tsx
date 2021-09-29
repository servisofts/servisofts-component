import React from "react"
import Svg from "react-native-svg";
import { Path, Rect, Line } from "react-native-svg";

const Web = (props) => (
    <Svg {...props} viewBox="0 0 141.73 141.73">
        <Rect fill="#8a4da0" width="141.73" height="141.73" rx="34.98" />
        <Path fill="#010101"
            d="M126,52.65h-9.45V16.74a9.45,9.45,0,0,0-18.9,0v9.45A5.68,5.68,0,0,0,92,31.86V47a1.89,1.89,0,1,0,3.78,0V31.86A1.89,1.89,0,0,1,97.65,30V52.65H33.21A9.45,9.45,0,0,0,14.5,54.53v56.7A9.45,9.45,0,0,0,24,120.68h94.49a1.89,1.89,0,0,0,1.89-1.89v-5.67H126a1.89,1.89,0,0,0,1.89-1.89V54.53A1.89,1.89,0,0,0,126,52.65ZM101.43,16.74a5.67,5.67,0,0,1,11.34,0v1.89H101.43Zm0,5.67h11.34v3.78H101.43Zm0,7.56h11.34V75.32H101.43Zm1.89,52.91V79.1h7.56v3.78Zm5.14,3.78L107.1,92.1l-1.36-5.44ZM18.28,54.53a5.67,5.67,0,0,1,11.34,0v49.2a9.22,9.22,0,0,0-11.34,0Zm98.27,62.37H24a5.67,5.67,0,1,1,5.67-5.67,1.89,1.89,0,0,0,1.89,1.89h85Zm7.56-7.56H33.4V56.42H97.65V77.21a1.89,1.89,0,0,0,1.89,1.89v5.67a1.89,1.89,0,0,0,1.89,1.89h.42l3.42,13.68a1.88,1.88,0,0,0,3.66,0l3.42-13.68h.42a1.89,1.89,0,0,0,1.89-1.89V79.1a1.89,1.89,0,0,0,1.89-1.89V56.42h7.56Z" />
        <Path fill="#010101"
            d="M48.52,77.21c2.31,0,3.78,1.12,3.78,1.89a1.89,1.89,0,0,0,3.78,0c0-2.68-2.38-4.86-5.67-5.48V71.54a1.89,1.89,0,1,0-3.78,0v2.08C43.34,74.24,41,76.41,41,79.1c0,3.18,3.32,5.67,7.56,5.67,2.31,0,3.78,1.12,3.78,1.89s-1.47,1.89-3.78,1.89-3.78-1.12-3.78-1.89a1.89,1.89,0,0,0-3.78,0c0,2.69,2.38,4.86,5.67,5.48v2.08a1.89,1.89,0,0,0,3.78,0V92.14c3.29-.62,5.67-2.79,5.67-5.48,0-3.18-3.32-5.67-7.56-5.67-2.31,0-3.78-1.12-3.78-1.89S46.21,77.21,48.52,77.21Z" />
        <Path fill="#010101" d="M65.53,67.76H92A1.89,1.89,0,0,0,92,64H65.53a1.89,1.89,0,0,0,0,3.78Z" />
        <Path fill="#010101" d="M65.53,75.32H92a1.89,1.89,0,1,0,0-3.78H65.53a1.89,1.89,0,0,0,0,3.78Z" />
        <Path fill="#010101" d="M65.53,94.22H97.65a1.89,1.89,0,0,0,0-3.78H65.53a1.89,1.89,0,0,0,0,3.78Z" />
        <Path fill="#010101" d="M99.54,98h-34a1.89,1.89,0,0,0,0,3.78h34a1.89,1.89,0,0,0,0-3.78Z" />
        <Path fill="#010101" d="M114.66,98a1.89,1.89,0,0,0,0,3.78h3.78a1.89,1.89,0,0,0,0-3.78Z" />
    </Svg>
)
const Native = Web;

export default { Native, Web }
