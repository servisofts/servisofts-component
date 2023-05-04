export default (executor, tiempoEspera) => {
    const miPromesa = new Promise((resolve, reject) => {
        executor(resolve, reject)
    }).then((resultado) => {
        // Si la promesa se ha cumplido, devolver el resultado
        return resultado;
    }).catch((error) => {
        // Si la promesa se ha rechazado, lanzar un error con el mensaje correspondiente
        throw new Error(error);
    }).finally(() => {
        // Aquí se puede hacer limpieza u otras acciones que se quieran ejecutar al finalizar la Promesa
    });

    // Agregar un temporizador para manejar el tiempo de espera
    const tiempoEsperaMs = tiempoEspera ;
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Tiempo de espera agotado después de ${tiempoEspera} segundos`);
        }, tiempoEsperaMs);
    });

    // Combinar la Promesa original con el temporizador usando Promise.race
    return Promise.race([timeout, miPromesa]);
}

