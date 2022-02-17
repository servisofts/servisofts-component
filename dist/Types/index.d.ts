import { SViewProps } from '../Component/SView/index';
import { STextProps } from '../Component/SText/index';
import { SComponentContainerProps } from '../Component/SComponentContainer/index';
import { SNavigationProps, SPageProps, SPageListProps } from '../Component/SNavigation/index';
import { SThemeColors, SThemeOptions, SThemeProps, SThemeThemes } from '../Component/STheme/index';
declare type TColKey = "xs" | "sm" | "md" | "lg" | "xl";
declare type TColVal = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
declare type TColStr = `${TColKey}-${TColVal}`;
declare type TColCovination = `${TColStr} ${TColStr}`;
declare type TColSujestPage = `xs-${number}` | `xs-${number} sm-${number} ` | `xs-${number} sm-${number} md-${number}` | `xs-${number} sm-${number} md-${number} lg-${number}` | `xs-${number} sm-${number} md-${number} lg-${number} xl-${number}`;
declare type SColType = {
    [index in TColKey]?: TColVal;
} | TColStr | TColCovination | TColSujestPage | `${TColKey}-${any}`;
declare type SDirectionType = "row" | "column";
declare type SAssets = {
    svg: {
        [index: string]: {
            Native: any;
            Web: any;
        };
    };
};
declare type SInputsCofig = {
    [name: string]: {
        View?: any;
        LabelStyle?: any;
        InputText?: any;
        placeholder?: any;
        error?: any;
    };
};
export type { SDirectionType, SColType, TColStr, TColVal, TColKey, SViewProps, STextProps, SComponentContainerProps, SNavigationProps, SPageProps, SPageListProps, SThemeColors, SThemeOptions, SThemeProps, SThemeThemes, SAssets, SInputsCofig };
