import React from "react"
import Svg, { Path } from "react-native-svg";

const Web = (props) => (
    <Svg {...props}
        viewBox="0 0 70.87 97.84">
        <Path
            d="M35.43,0A35.48,35.48,0,0,0,0,35.43C0,59.68,31.71,95.28,33.06,96.78a3.2,3.2,0,0,0,4.75,0c1.35-1.5,33.06-37.1,33.06-61.35A35.48,35.48,0,0,0,35.43,0Zm0,53.26A17.83,17.83,0,1,1,53.26,35.43,17.84,17.84,0,0,1,35.43,53.26Z"
        />
    </Svg>
)
const Native = Web;

export default { Native, Web }
