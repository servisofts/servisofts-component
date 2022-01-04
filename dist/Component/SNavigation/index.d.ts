import { Component } from 'react';
export declare type SPageProps = {
    params?: [string];
    component: any;
    page?: any;
    header?: any;
    options?: {
        headerShown: boolean;
    };
};
export declare type SPageListProps = {
    [name in string]?: SPageProps | object;
};
export declare type SNavigationProps = {
    props: {
        prefixes: [string];
        pages: {
            [name in string]: SPageProps;
        };
        title?: string;
        navBar?: any;
    };
};
export default class SNavigation extends Component<SNavigationProps> {
    static navigation: any;
    static lastRoute: any;
    static navBar: any;
    static root: any;
    static routes: any[];
    static navigate(route: string, params?: object): void;
    static replace(route: string, params?: object): void;
    static goBack(): void;
    static getParam(key: string, valDef?: any): any;
    constructor(props: any);
    getLinking(): {
        prefixes: [string];
        config: {
            screens: {};
        };
    };
    getPages(Stack: any): JSX.Element[];
    render(): JSX.Element;
}
