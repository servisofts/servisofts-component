import { createConnection } from 'servisofts-socket'
import SessionAbstract from './sessionAbstract';
class Session extends SessionAbstract {
    socket;
    pem;
    constructor(props) {
        super(props)

        var host = props.host;
        var puerto = props.ports.socket;

        var cert_begin = "-----BEGIN CERTIFICATE-----\n";
        var end_cert = "\n-----END CERTIFICATE-----";
        var cert = props.ssl.cert;
        this.pem = cert_begin + cert + end_cert;

    }
    connect() {
        this.socket = createConnection({
            host: this.props.host,
            port: this.props.ports.socket,
            timeout: 2000,
            tls: true,
            tlsCert: { uri: this.pem }
        }, () => {
            this.log('Conectado al socket');
        })
    }
    onMessage(data) {

    }

    onClose() {

    }

    onError(err) {

    }

}

export default Session;