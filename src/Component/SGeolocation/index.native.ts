import { Options, Position, SGeolocationInterface } from "./type";
import Geolocation from '@react-native-community/geolocation';

export default new class SGeolocation implements SGeolocationInterface {
    getCurrentPosition(opt: Options): Promise<Position> {
        return new Promise((resolve, reject) => {
            const success = (e) => {
                resolve(e);
                console.log("success", e);
            }
            const error = (e) => {
                reject(e);
                console.log("error", e);
            }
            Geolocation.getCurrentPosition(success, error, opt);
        })
    }


}()