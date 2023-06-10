import { NativeModules, NativeEventEmitter, AppRegistry, Platform } from 'react-native';

export const ServisoftsComponent = Platform.select({
    android: NativeModules.ServisoftsComponent,
    ios: NativeModules.ServisoftsComponent,
})

export default class SNativeModules {
    static ServisoftsComponent = ServisoftsComponent;

    static deniedModule = () => {
        return new Promise((resolve, reject) => reject("SNativeModule [ServisoftsComponent] Not found."));
    }
    static test() {
        if (!ServisoftsComponent) return this.deniedModule();
        return ServisoftsComponent.test();
    }
    static setSoftInputMode = (options: ("adjustResize" | "adjustPan" | "adjustNothing" | "stateHidden" | "stateAlwaysHidden" | "stateVisible" | "stateAlwaysVisible")) => {
        if (!ServisoftsComponent) return this.deniedModule();
        return ServisoftsComponent.setSoftInputMode(options);
    }
}

