import { CellObject, ExcelDataType } from 'xlsx-color';
export type SExcelPropsType = {
    styleHeader?: SExcelStyleHeaderPropsType,
    header: SExcelHeaderPropsType
    data: any,
    onPress?: (sheet: any) => any,
    renderData?: (obj:any) => any,
    name: string,
    children?: any,
}



export type SExcelHeaderPropsType = {
    key: string,
    label: string,
    style?: SExcelStyleHeaderPropsType,
    styleData?: CellStyle,
    type?: ExcelDataType,
    z?: any

}[]

export type SExcelStyleHeaderPropsType = {
    width?: number,
    height?: number,
    fontSize?: number,
    col?: ColInfo,
    row?: RowInfo,
}
type ColInfo = {
    /* visibility */
    hidden?: boolean; // if true, the column is hidden

    /* column width is specified in one of the following ways: */
    wpx?: number;  // width in screen pixels
    width?: number;  // width in Excel's "Max Digit Width", width*256 is integral
    wch?: number;  // width in characters

    /* other fields for preserving features from files */
    MDW?: number;  // Excel's "Max Digit Width" unit, always integral
};

type RowInfo = {
    /* visibility */
    hidden?: boolean; // if true, the row is hidden

    /* row height is specified in one of the following ways: */
    hpx?: number;  // height in screen pixels
    hpt?: number;  // height in points

    level?: number;  // 0-indexed outline / group level
};


// type sInfo = {
//     border: {
//         top: { style?: 'thin', color: { rgb?: string } },
//         bottom: { style?: 'thin', color: { rgb?: string } }
//     }
//     fill: { type?: 'pattern', patternType?: 'solid', fgColor: { rgb?: string } }
//     alignment: { horizontal: 'center', vertical: 'middle' },
//     font?: { color?: { rgb?: any }, bold?: boolean }
// }

type BorderStyle =
    | 'thin'
    | 'medium'
    | 'dashed'
    | 'dotted'
    | 'thick'
    | 'double'
    | 'hair'
    | 'mediumDashed'
    | 'dashDot'
    | 'mediumDashDot'
    | 'dashDotDot'
    | 'mediumDashDotDot'
    | 'slantDashDot';

type ColorSpec = { theme: number } | { rgb: string } | { indexed: number };

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
