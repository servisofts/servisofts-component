import React from "react"
import Icon from "./icon.svg";

const Native = Icon;
const Web = (props) => (
    <svg {...props}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73">
        <rect width="141.73" height="141.73" rx="34.98" />
    </svg>
)

export default { Native, Web }
