import { TextInput } from 'react-native';
import { Component } from 'react';
import { SInput2PropsType } from './type';
export default abstract class SInput2TypeAbstract extends Component<SInput2PropsType> {
    _ref: {
        input?: TextInput & {
            value?: any;
        };
    };
    constructor(props: any);
    handleRef: (r: any, type: any) => void;
}
