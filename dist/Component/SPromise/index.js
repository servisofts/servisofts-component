export default (function (executor, tiempoEspera) {
    var miPromesa = new Promise(function (resolve, reject) {
        executor(resolve, reject);
    }).then(function (resultado) {
        // Si la promesa se ha cumplido, devolver el resultado
        return resultado;
    })["catch"](function (error) {
        // Si la promesa se ha rechazado, lanzar un error con el mensaje correspondiente
        throw new Error(error);
    })["finally"](function () {
        // Aquí se puede hacer limpieza u otras acciones que se quieran ejecutar al finalizar la Promesa
    });
    // Agregar un temporizador para manejar el tiempo de espera
    var tiempoEsperaMs = tiempoEspera;
    var timeout = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Tiempo de espera agotado despu\u00E9s de " + tiempoEspera + " segundos");
        }, tiempoEsperaMs);
    });
    // Combinar la Promesa original con el temporizador usando Promise.race
    return Promise.race([timeout, miPromesa]);
});
