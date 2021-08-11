

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
    const content: string;
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