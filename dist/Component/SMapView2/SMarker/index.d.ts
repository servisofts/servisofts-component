/// <reference types="react" />
import SMarkerAbstract from './abstract';
export default class SMarker extends SMarkerAbstract {
    renderMap(child: any, { map, maps }: {
        map: any;
        maps: any;
    }, _toRemove: any): JSX.Element;
    render(): JSX.Element;
}
