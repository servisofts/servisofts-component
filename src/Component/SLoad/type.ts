import circle from "./type/circle"
import window from "./type/window"
import skeleton from "./type/skeleton"
import { SViewProps } from "../SView"
export default {
    circle,
    window,
    skeleton

}



export type SLoadPropsType = {
    color?: string,
    hidden?: boolean,
    type?: "circle" | "window" | "skeleton",
    label?: string,
    key?: any,
    onCancel?: () => any,
} & SViewProps


export type SLoadContainerPropsType = {

}