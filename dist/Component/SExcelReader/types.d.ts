export declare type SExcelReaderPropsType = {
    header?: SExcelHeaderHeaderPropsType[];
    file?: File;
    onPress?: (sheet: any) => any;
    onSubmit?: (data: any, callback: any) => any;
    onError?: (data: any, callback: any) => any;
    callback?: any;
    children?: any;
    type?: "default" | "toJson";
};
export declare type SExcelHeaderHeaderPropsType = {
    key?: any;
    type?: SExcelTypeOptions;
};
export declare type SExcelTypeOptions = "";
