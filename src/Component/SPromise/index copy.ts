export default class SPromise<T> extends Promise<T> {
    constructor(executor, timeout) {
      let timeoutId;
  
      const timeoutPromise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
          reject(new Error(`Promise timed out after ${timeout} ms`));
        }, timeout);
      });
  
      super((resolve, reject) => {
        Promise.race([executor(), timeoutPromise])
          .then(result => {
            clearTimeout(timeoutId);
            resolve(result);
          })
          .catch(error => {
            clearTimeout(timeoutId);
            reject(error);
          });
      });
    }
  }
  
