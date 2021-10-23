declare const MapStyle: ({
    elementType: string;
    stylers: {
        color: string;
    }[];
    featureType?: undefined;
} | {
    elementType: string;
    stylers: {
        visibility: string;
    }[];
    featureType?: undefined;
} | {
    featureType: string;
    elementType: string;
    stylers: {
        color: string;
    }[];
})[];
export default MapStyle;
