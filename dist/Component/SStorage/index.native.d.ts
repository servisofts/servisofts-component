import { Component } from 'react';
export default class SStorage extends Component {
    static getItem: (key: any, callback: any) => Promise<void>;
    static setItem: (key: any, data: any) => void;
    static removeItem: (key: any) => void;
    render(): JSX.Element;
}
