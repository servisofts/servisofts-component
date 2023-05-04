import circle from "./type/circle";
import window from "./type/window";
import skeleton from "./type/skeleton";
import { SViewProps } from "../SView";
declare const _default: {
    circle: typeof circle;
    window: typeof window;
    skeleton: typeof skeleton;
};
export default _default;
export declare type SLoadPropsType = {
    color?: string;
    hidden?: boolean;
    type?: "circle" | "window" | "skeleton";
    label?: string;
    key?: any;
    onCancel?: () => any;
} & SViewProps;
export declare type SLoadContainerPropsType = {};
