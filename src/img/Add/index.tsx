import React from "react"
import Icon from "./icon.svg";

const Native = Icon;
const Web = (props) => (
    <svg {...props}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73">
        <g id="Capa_2" data-name="Capa 2">
            <g id="Capa_1-2" data-name="Capa 1">
                <rect width="141.73" height="141.73" rx="34.98" fill="#c31d38" />
                <line x1="72.47" y1="27.67" x2="72.47" y2="114.07" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="15.1" />
                <line x1="29.27" y1="70.87" x2="115.67" y2="70.87" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="15.1" />
            </g>
        </g>
    </svg>


)

export default { Native, Web }
