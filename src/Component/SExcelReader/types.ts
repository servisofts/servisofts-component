
export type SExcelReaderPropsType = {
    header?: SExcelHeaderHeaderPropsType[],
    file?: File,
    onPress?: (sheet: any) => any,
    onSubmit?: (data: any, callback) => any,
    callback?: any,
    children?: any,
    type?: "default" | "toJson"
}



export type SExcelHeaderHeaderPropsType = {
    key?: any,
    type?: SExcelTypeOptions,
}

export type SExcelTypeOptions = ""
