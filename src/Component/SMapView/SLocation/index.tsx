export default class SLocation {
    static getCurrentPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    var center = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    resolve(center);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
}
