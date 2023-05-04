import { ExcelDataType } from 'xlsx-color';
export declare type SExcelPropsType = {
    styleHeader?: SExcelStyleHeaderPropsType;
    header: SExcelHeaderPropsType;
    data: any;
    onPress?: (sheet: any) => any;
    renderData?: (obj: any) => any;
    name: string;
    children?: any;
};
export declare type SExcelHeaderPropsType = {
    key: string;
    label: string;
    style?: SExcelStyleHeaderPropsType;
    styleData?: CellStyle;
    type?: ExcelDataType;
    z?: any;
}[];
export declare type SExcelStyleHeaderPropsType = {
    width?: number;
    height?: number;
    fontSize?: number;
    col?: ColInfo;
    row?: RowInfo;
};
declare type ColInfo = {
    hidden?: boolean;
    wpx?: number;
    width?: number;
    wch?: number;
    MDW?: number;
};
declare type RowInfo = {
    hidden?: boolean;
    hpx?: number;
    hpt?: number;
    level?: number;
};
declare type BorderStyle = 'thin' | 'medium' | 'dashed' | 'dotted' | 'thick' | 'double' | 'hair' | 'mediumDashed' | 'dashDot' | 'mediumDashDot' | 'dashDotDot' | 'mediumDashDotDot' | 'slantDashDot';
declare type ColorSpec = {
    theme: number;
} | {
    rgb: string;
} | {
    indexed: number;
};
export interface CellStyle {
    fill?: {
        patternType: 'solid' | 'none';
        fgColor?: ColorSpec;
        bgColor?: ColorSpec;
    };
    font?: {
        name?: string;
        sz?: number;
        color?: ColorSpec;
        bold?: boolean;
        underline?: boolean;
        italic?: boolean;
        strike?: boolean;
        outline?: boolean;
        shadow?: boolean;
    };
    numFmt?: string;
    alignment?: {
        vertical?: 'bottom' | 'center' | 'top';
        horizontal?: 'left' | 'center' | 'right';
        wrapText?: boolean;
        readingOrder?: number;
        textRotation?: number;
    };
    border?: {
        top?: {
            style: BorderStyle;
            color: ColorSpec;
        };
        bottom?: {
            style: BorderStyle;
            color: ColorSpec;
        };
        left?: {
            style: BorderStyle;
            color: ColorSpec;
        };
        right?: {
            style: BorderStyle;
            color: ColorSpec;
        };
        diagonal?: {
            style: BorderStyle;
            color: ColorSpec;
        };
        diagonalUp?: boolean;
        diagonalDown?: boolean;
    };
}
export {};
