export type Position = {
    coords: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number;
        altitudeAccuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
    timestamp: number;
}


export type Options = {
    timeout?: number;
    maximumAge?: number;
    enableHighAccuracy?: boolean;
}
export interface SGeolocationInterface {
    getCurrentPosition(opt: Options): Promise<Position>;
}