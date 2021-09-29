import Session from './Session';

var CONFIG = require("./socket.config");
// type SocketsNames = "drive";

class SSocket {
    static SESSIONES = {};
    static send(mensaje, name) {
        var sesion: Session = SSocket.init(name);
        sesion.send(mensaje);
    }
    static init(name) {
        if (!name) name = CONFIG.default;
        if (!this.SESSIONES[name]) {
            var propsSocket = CONFIG[name];
            propsSocket.name = name;
            this.SESSIONES[name] = new Session(propsSocket);
        } else {
            console.log("socket " + name + " already initialized");
        }
        return this.SESSIONES[name];
    }

    // config;
    // constructor(name: SocketsNames) {
    //     this.config = CONFIG[name ? name : CONFIG.default];
    // }


}

export default SSocket;