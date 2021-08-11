
const delay = ms => new Promise(res => setTimeout(res, ms));

var HILOS = {};
export default class SThread {
    key;
    active;
    time;
    isRun;
    cb;
    constructor(time, key, replace) {
        this.key = key;
        if (HILOS[key]) {
            this.active = true;
            if (replace) {
                HILOS[key].isRun = false;
                delete HILOS[this.key];
                HILOS[key] = this;
                this.active = false;
            }
        } else {
            HILOS[key] = this;
            this.active = false;
        }
        this.time = time;
    }

    hilo = async () => {
        await delay(this.time)
        if (this.isRun) {
            delete HILOS[this.key];
            this.cb();
        }
    }

    start(cb) {
        this.isRun = true;
        this.cb = cb;
        if (this.active) {
            return;
        }
        this.hilo()
    }

}
