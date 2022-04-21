import Geolocation from '@react-native-community/geolocation';

export default class SLocation {
    static getCurrentPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                (position) => {
                    var region = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    resolve(region);

                },
                (error) => {
                    reject(error);
                },
                { enableHighAccuracy: false, timeout: 1500, maximumAge: 10000 }
            );
        });
    }
}
