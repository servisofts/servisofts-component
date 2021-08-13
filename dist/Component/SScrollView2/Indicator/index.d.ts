import { Component } from 'react';
import SAPanResponder from '../../SAnimated/SAPanResponder';
import Scroll from '../Scroll';
declare type typeScroll = {
    horizontal?: Boolean;
    scroll?: Scroll;
};
declare class Indicator extends Component<typeScroll> {
    panMove: any;
    state: any;
    onMove: any;
    scroll: any;
    startPosition: any;
    constructor(props: any);
    repaint(scroll: any): void;
    setScroll: (scroll: any) => void;
    onScroll({ contentOffset, contentSize, layoutMeasurement }: {
        contentOffset: any;
        contentSize: any;
        layoutMeasurement: any;
    }): void;
    setSize: ({ width, height }: {
        width: any;
        height: any;
    }) => void;
    setScrollPosition: ({ x, y }: {
        x: any;
        y: any;
    }) => void;
    render(): JSX.Element;
    moveScrollAsync: (scroll: Scroll, moveTo: any) => Promise<void>;
    createPanMove(): SAPanResponder;
}
export default Indicator;
