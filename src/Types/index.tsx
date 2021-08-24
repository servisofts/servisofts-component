// --- SERVISOFTS TYPES ---
import { SViewProps } from '../Component/SView/index';
import { STextProps } from '../Component/SText/index';
import { SComponentContainerProps } from '../Component/SComponentContainer/index';
import { SNavigationProps, SPageProps, SPageListProps } from '../Component/SNavigation/index';
import { SThemeColors, SThemeOptions, SThemeProps, SThemeThemes } from '../Component/STheme/index';

// SCOL
type TColKey = "xs" | "sm" | "md" | "lg" | "xl";
type TColVal = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type TColStr = `${TColKey}-${TColVal}`;
type TColCovination = `${TColStr} ${TColStr}`
type TColCovination2 = `${TColStr} ${TColStr} ${string}`

// type TColSujestPage = `xs-12 sm-10 md-8 lg-7 xl-6` | `xs-12 md-8 xl-6`
type TColSujestPage =
    `xs-${number}`
    | `xs-${number} sm-${number} `
    | `xs-${number} sm-${number} md-${number}`
    | `xs-${number} sm-${number} md-${number} lg-${number}`
    | `xs-${number} sm-${number} md-${number} lg-${number} xl-${number}`

type SColType =
    { [index in TColKey]?: TColVal }
    | TColStr
    | TColCovination
    | TColSujestPage
    | `${TColKey}-${any}`
    ;

//Direcciones
type SDirectionType = "row" | "column";



//Assets

type SAssets = {
    svg: {
        [index: string]: {
            Native: any,
            Web: any
        }
    }
}


export type {
    SDirectionType, SColType, TColStr, TColVal, TColKey,
    SViewProps,
    STextProps,
    SComponentContainerProps,
    SNavigationProps, SPageProps, SPageListProps,
    SThemeColors, SThemeOptions, SThemeProps, SThemeThemes,
    SAssets
}
