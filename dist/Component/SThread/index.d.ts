export default class SThread {
    key: any;
    active: any;
    time: any;
    isRun: any;
    cb: any;
    constructor(time: any, key: any, replace: any);
    hilo: () => Promise<void>;
    start(cb: any): void;
}
