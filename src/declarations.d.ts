
declare module '*.svg?inline' {
    const content: any
    export default content
}
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

    export default content;
}

// declare module '@react-navigation/native' {
//     import { NavigationContainer } from '@react-navigation/native';
//     export { NavigationContainer };
// }
// declare module '@react-navigation/stack' {
//     import { createStackNavigator } from '@react-navigation/stack';
//     export { createStackNavigator };
// }
// declare module 'react-native-svg' {
//     import Svg, { Line, Rect, Svg, Circle, ClipPath, Defs, Ellipse, ForeignObject, Image, G, LinearGradient, Mask, Marker, Path, Pattern, Polygon, Polyline, Stop, SvgAst, SvgCss, Text, TextPath, SvgXml } from 'react-native-svg';
//     export { Svg, Line, Path, Rect, Circle, ClipPath, Defs, Ellipse, ForeignObject, Image, G, LinearGradient, Mask, Marker, Pattern, Polygon, Polyline, Stop, SvgAst, SvgCss, Text, TextPath, SvgXml };
//     export default Svg;
// }
// declare module 'react-dom' {
//     import ReactDOM from 'react-dom';
//     export default ReactDOM;
// }

declare module 'react-native-linear-gradient' {
    import LinearGradient from 'react-native-linear-gradient';
    export default LinearGradient;
}

declare module 'react-native-file-viewer' {
    import FileViewer from 'react-native-file-viewer';
    export default FileViewer;
}

declare module 'react-native-document-picker' {
    import DocumentPicker from 'react-native-document-picker';
    export default DocumentPicker;
}

// declare module 'react-native-image-picker' {
//     import ImagePicker from 'react-native-image-picker';
//     export default ImagePicker;
// }
declare module 'react-native-image-picker' {
    import ImagePicker from 'react-native-image-picker';
    export { launchImageLibrary, launchCamera } from 'react-native-image-picker';
    export default ImagePicker;
}

declare module 'react-native-compressor' {
    // import ImagePicker from 'react-native-compressor';
    export { Image } from 'react-native-compressor';
    // export default ImagePicker;
}



// declare module 'react-native-maps' {
//     import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
//     export { Marker, PROVIDER_GOOGLE, Polyline };
//     export default MapView;
// }

// declare module 'react-native-reanimated' {
//     import Animated from 'react-native-reanimated';
//     export default Animated;
// }
declare module '@react-native-community/geolocation' {
    import Geolocation from '@react-native-community/geolocation';
    export default Geolocation;
}
declare module 'react-native-fs' {
    import RNFS from 'react-native-fs';
    export default RNFS;
}
declare module '@react-native-async-storage/async-storage' {
    import AsyncStorage from '@react-native-async-storage/async-storage'
    export default AsyncStorage;
}

// declare module 'google-map-react' {
//     import GoogleMapReact from 'google-map-react';
//     export default GoogleMapReact;
// }

// declare module "*.svg" {
//     // export const ReactComponent: (props: React.SVGProps<SVGElement>) => ReactElement
//     // import { SvgProps } from 'react-native-svg';
//     // import React from 'react';
//     // interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }
//     // export const ReactComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
//     const content: any;
//     export default content;
// }

// declare module "\*.jpg" {
//     const content: string;
//     export default content;
// }

// declare module "\*.png" {
//     const content: string;
//     export default content;
// }

declare module "\*.json" {
    const content: any;
    export default content;
}

// declare module "\*.jpg" {
//     const content: string;
//     export default content;
// }

// declare module "\*.png" {
//     const content: string;
//     export default content;
// }

// declare module "\*.json" {
//     const content: string;
//     export default content;
// }