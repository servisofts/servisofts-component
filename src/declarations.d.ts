
declare module '*.svg?inline' {
    const content: any
    export default content
}
declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

    export default content;
}

declare module '@react-navigation/native' {
    import { NavigationContainer } from '@react-navigation/native';
    export { NavigationContainer };
}
declare module '@react-navigation/stack' {
    import { createStackNavigator } from '@react-navigation/stack';
    export { createStackNavigator };
}
declare module 'react-native-svg' {
    import Svg, { Line, Rect, Svg, Circle, ClipPath, Defs, Ellipse, ForeignObject, Image, G, LinearGradient, Mask, Marker, Path, Pattern, Polygon, Polyline, Stop, SvgAst, SvgCss, Text, TextPath } from 'react-native-svg';
    export { Svg, Path, Rect, Circle, ClipPath, Defs, Ellipse, ForeignObject, Image, G, LinearGradient, Mask, Marker, Pattern, Polygon, Polyline, Stop, SvgAst, SvgCss, Text, TextPath };
    export default Svg;
}
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