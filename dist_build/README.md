##### by servisofts.com
# **servisofts-component** 

<p align="center">
  <a href="https://www.npmjs.com/package/servisofts-component">
    <img src="https://img.shields.io/npm/v/servisofts-component?color=brightgreen&label=Version" alt="Current npm package version." />
  </a>
  <a href="https://reactnative.dev/docs/contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://github.com/servisofts/s-component.git">
    <img src="https://img.shields.io/github/watchers/servisofts/s-component?style=social&label=Github" alt="Current npm package version." />
  </a>
</p>


Servisofts Component is a library for Android, IOS & web for easing app development in react-native-web.

## Table of contents 
- [servisofts-component](#servisofts-component)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [Using React Native >= 0.60](#using-react-native--060)
      - [iOS Platform:](#ios-platform)
      - [Android Platform:](#android-platform)
      - [Using React Native < 0.60](#using-react-native--060-1)
    - [Configure 'react-native-web' proyect](#configure-react-native-web-proyect)
      - [Configure 'metro.config.js'](#configure-metroconfigjs)
      - [Configure '.eslintrc.js'](#configure-eslintrcjs)
  - [Usage](#usage)
  - [Components](#components)
  - [Types](#types)

## Getting started
Install the required dependences using npm:
```bash
npm install --save-dev
    @babel/core
    @babel/runtime
    metro-react-native-babel-preset
    react-scripts
```
```bash
npm install --save 
    @react-native-community/masked-view 
    react
    react-dom
    react-native
    react-native-web
    react-native-svg
    react-native-svg-transformer
    react-native-gesture-handler
    react-native-reanimated
    react-native-safe-area-context
    react-native-screens
    @react-navigation/native
    @react-navigation/stack
    servisofts-socket 
    react-redux 
    redux 
    redux-thunk
```

Install the library using npm:
```
npm install --save servisofts-component
```

### **Using React Native >= 0.60**
Linking the package manually is not required anymore with [Autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).

#### **iOS Platform:**

  `$ cd ios && pod install && cd ..` # CocoaPods on iOS needs this extra step

#### **Android Platform:**

  Modify your **`android/build.gradle`** configuration to match `minSdkVersion = 21`:
  ```
  buildscript {
    ext {
      ...
      minSdkVersion = 21
      ...
    }
  ```
#### Using React Native < 0.60
--``not supported``--

### **Configure 'react-native-web' proyect**

#### Proyect Files

```
APPNAME
  ├── android/  
  ├── ios/
  ├── public/
  ├── src/
  │   ├── Components/
  │   │   └── ...      // All components
  │   │ 
  │   ├── Pages/
  │   │   └── ...      // All pages
  │   │ 
  │   ├── App.js     
  │   ├── index.css
  │   └── index.js     // Index app web
  │   
  ├── .eslintrc.js
  ├── .flowconfig
  ├── .gitignore
  ├── .watchmanconfig
  ├── app.json        // App name
  ├── babel.config.js
  ├── index.js        // Index app mobile
  ├── metro.config.js
  └── package.json    
```

#### Configure 'metro.config.js'
You will need a [metro.config.js](https://facebook.github.io/metro/docs/en/configuration.html) file in order to use a ( svg , mp3, otf ) extencion.
Inside a `module.exports` object, create a key called `resolver` with another object called `assetExts`. The value of `assetExts` should be an array of the resource file extensions you want to support.

If you want to support `.pem` files (plus all the already supported files), your `metro.config.js` would like like this:
```javascript
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => { 
	const {  
		resolver: { 
			sourceExts, 
			assetExts 
		}  
	} = await getDefaultConfig(); 
    assetExts.push("pem");
	return {
		transformer: {      
			babelTransformerPath: require.resolve("react-native-svg-transformer")    
		},    
		resolver: {
			assetExts: assetExts.filter(ext => ext !== "svg"),
			sourceExts: [...sourceExts, "svg","mp3" ]    
			
		}};
})();
```

<!-- 
#### Configure '.eslintrc.js'
You will need a [.eslintrc.js](https://eslint.org/docs/user-guide/configuring/)

 your `.eslintrc.js` would like like this:
```javascript
module.exports = {
  root: true,
  extends: ["@react-native-community", "react-app", "react-app/jest"],
  rules: {
    'prettier/prettier': 0,
  },
};
``` -->

## Usage
In ``src/app.js`` import ``SComponentContainer``

```javascript
import React from 'react';
import { SComponentContainer } from 'servisofts-component';

const App = () => {
  return (
    <SComponentContainer
      debug //Show debug bar on top
      theme={{
        initialTheme: "dark", 
        themes: {
          default: {
            barStyle: "dark-content",
            barColor: "#ffffff",
            primary: "#ffffff",
            secondary: "#000000",
            background: "#dddddd"
          },
          dark: {
            barStyle: "light-content",
            barColor: "#000000",
            primary: "#000000",
            secondary: "#ffffff",
            background: "#222222"
          }
        }
      }}>

    { /* ... */ }

    </SComponentContainer>
  );
};

```

In ``src/index.css`` copy this ``style``

```css
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

/* These styles make the body full-height */

html, body {
  height: 100%;
}

/* These styles disable body scrolling if you are using <ScrollView> */

body {
  overflow: hidden;
}

/* These styles make the root element full-height */

#root {
  overflow: hidden;
  position: fixed;
  width: 100%;
  display: flex;
  height: 100vh;
}
```

## Components
<table>
    <theader>
        <th>Components</th>     <th>Description</th>       <th>Type</th> <th>Props</th>
    </theader>
    <tboby>
        <tr> 
          <td>SComponentContainer</td>
          <td>Contenedor de app, configura los parametros nesesarios para el funcionamiento de la libreria.</td>
          <td>Component</td>
          <td>
            <p>theme:<a href="#type-sthemeprops">SThemeProps</a></p>
            <p>debug:boolean</p>
          </td>
        </tr>
        <tr> 
          <td>SNavigation</td>
          <td>Gestiona la navegacion entre ventanas en las diferentes plataformas.</td>
          <td>Component</td>
           <td>
            <p>NavigationContainer: any</p>
            <p>Stack: any</p>
            <p>prefixes: [string]</p>
            <p>pages: {[name in string]:<a href="#type-spageprops">SPageProps</a>}</p>
          </td>
        </tr>
        <tr> 
          <td>SView</td>
          <td>Contenedor responsive de facil manejo.</td>
          <td>Component</td>
           <td>
             <p>col?: <a href="#type-scoltype">SColType</a></p>
             <p>dir?: <a href="#type-sdirectiontype">SDirectionType</a></p>
             <p>props?: <a href="#type-sviewprops">SViewProps</a></p>
             <p>style?: <a href="#type-viewstyle">ViewStyle</a></p>
             <p>onPress?: Function</p>
          </td>
        </tr>
        <tr> 
          <td>SText</td>
          <td>Textos adaptados a los colores del tema de la app.</td>
          <td>Component</td>
           <td>
             <p>col?: <a href="#type-scoltype">SColType</a></p>
             <p>dir?: <a href="#type-sdirectiontype">SDirectionType</a></p>
             <p>props?: <a href="#type-sviewprops">SViewProps</a></p>
             <p>style?: <a href="#type-viewstyle">ViewStyle</a></p>
             <p>onPress?: Function</p>
          </td>
        </tr>
        <tr> 
          <td>STheme</td>
          <td>Gestiona los colores y los diferentes stilos "default | dark"</td>
          <td>Component</td>
           <td>
             <p>col?: <a href="#type-scoltype">SColType</a></p>
          </td>
        </tr>
        <tr> 
          <td>SThread</td>
          <td>Manejo de hilos y timers.</td>
          <td>Class</td>
        </tr>
        <tr> 
          <td>SUuid</td>
          <td>Gestiona los codigos UUID</td>
          <td>Function</td>
        </tr>
    </tbody>
<table>


## Types

#### Type SDirectionType
  - "``row``" | "``column``"

#### Type SColType
  - { [``key`` in [TColKey](#type-tcolkey)]?: [TColVal](#type-tcolval) } | [TColStr](#type-tcolstr)

#### Type TColStr
  - "``xs-12 md-6``"

#### Type TColVal
  - "``1``" | "``2``" | "``3``" | "``4``" | "``5``" | "``6``" | "``7``" | "``8``" | "``9``" | "``10``" | "``11``" | "``12``" | "``8.543``" 

#### Type TColKey
  - ``"xs"`` | ``"sm"`` | ``"md"`` | ``"lg"`` | ``"xl"``

#### Type SViewProps
  - col?: [SColType](#type-scoltype)
  - dir?: [SDirectionType](#type-sdirectiontype)
  - props?: [SViewProps](#type-sviewprops)
  - style?: [ViewStyle](#type-viewstyle)
  - onPress?: Function

#### Type STextProps
  - col?: [SColType](#type-scoltype)
  - dir?: [SDirectionType](#type-sdirectiontype)
  - props?: [SViewProps](#type-sviewprops)
  - style?: [ViewStyle](#type-viewstyle)
  - onPress?: Function

#### Type SComponentContainerProps
  - theme: [SThemeProps](#type-sthemeprops)
  - debug: boolean
#### Type SNavigationProps
  - props:
      -  NavigationContainer: any,
      -  Stack: any,
      -  prefixes: [string],
      -  pages: { [name in string]: [SPageProps](#type-spageprops) }
#### Type SPageProps
  - initialTheme: [SThemeOptions](#type-sthemeoptions)
  - themes: [SThemeThemes](#type-sthemethemes)
  - onLoad: (color: [SThemeColors]("#type-sthemecolors")) => any

#### Type SPageListProps
  - url: string,
  - component: any,
  - options: { headerShown: boolean }
  
#### Type SThemeColors
  - barStyle: "``dark-content``" | "``light-content``"
  - barColor: string
  - primary: string
  - secondary: string
  - background: string

#### Type SThemeOptions
  - "``default``" | "``dark``"

#### Type SThemeProps
  - initialTheme: [SThemeOptions](#type-sthemeoptions)
  - themes: [SThemeThemes](#type-sthemethemes)
  - onLoad: (color: [SThemeColors](#type-sthemecolors)) => any

#### Type SThemeThemes
  - { [index in [SThemeOptions](#type-sthemeoptions)]: [SThemeColors](#type-sthemecolors) }