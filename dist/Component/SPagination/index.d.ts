import { Component } from 'react';
declare type typeProps = {
    data?: any;
    limit?: number;
    page?: number;
    onChange?: (page: number) => void;
};
declare class SPagination extends Component<typeProps> {
    constructor(props: any);
    getPageItens: () => number;
    getPagination(): JSX.Element;
    render(): JSX.Element;
}
export default SPagination;
