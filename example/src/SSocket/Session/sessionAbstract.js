class SessionAbstract {
    socket;
    props;
    constructor(props) {
        this.props = props;
        // this.log("Iniciando socket\n", JSON.stringify(props, "}", " \t"));
    }
    connect() {
    }

    onMessage(data) {
    }

    onClose() {
    }

    onError(err) {
    }
    send(data) {
        console.log("SendAbstract: " + data);
    }
    log() {
        var msn = "";
        for (var i = 0; i < arguments.length; i++) msn += arguments[i] + " ";
        var msnStr = "";
        msnStr += "\x1b[34m";
        msnStr += "\nSSocket: " + this.props.name + "@" + this.props.host;
        msnStr += "\x1b[39m \n"
        msnStr += "\n";
        msnStr += msn
        msnStr += "\n";
        msnStr += "\x1b[34m\n";
        msnStr += new Date().toISOString();
        msnStr += "\x1b[39m \n"
        console.log(msnStr);
    }

}

export default SessionAbstract;