export declare type Typesp = "default" | "center" | "center-horizontal" | "center-vertical" | "small";
export declare type TypeVariant = Typesp | [Typesp];
export declare const Variant: (type: TypeVariant) => {
    View: {
        justifyContent: "center";
    };
} | {
    View: {
        alignItems: "center";
    };
} | {
    View: {
        height: number;
    };
};
