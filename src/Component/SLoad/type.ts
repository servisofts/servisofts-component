import circle from "./type/circle"
import window from "./type/window"
import skeleton from "./type/skeleton"
import bar from "./type/bar"
import { SViewProps } from "../SView"
export default {
    circle,
    window,
    skeleton,
    bar

}



export type SLoadPropsType = {
    color?: string,
    hidden?: boolean,
    type?: "circle" | "window" | "skeleton" | "bar",
    label?: string,
    key?: any,
    onCancel?: () => any,
} & SViewProps


export type SLoadContainerPropsType = {
    children?: any,
}