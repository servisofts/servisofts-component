import { Options, Position, SGeolocationInterface } from "./type";

export default new class SGeolocation implements SGeolocationInterface {
    getCurrentPosition(opt: Options): Promise<Position> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (e) => {
                    console.log("success", e);
                    resolve(e);
                },
                (e) => {
                    console.log("error", e);
                    reject(e);
                }
            );
        })
    }
}()