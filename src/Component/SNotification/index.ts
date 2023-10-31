import SThread from "../SThread";
import { SUuid } from "../SUuid";
import SNotificationContainer from "./SNotificationContainer";

export type Notification = {
    title: string,
    body?: string,
    image?:string,
    deeplink?:string,

    key?: string,
    time?: number,
    color?: string,
    type?: "loading",
}

export type NotificationInstance = {
    close: () => void
} & Notification

export default new class SNotification {

    _Container: SNotificationContainer;
    _setInstance(ref: SNotificationContainer) {
        this._Container = ref;
    }
    _createInstance(notification: Notification) {
        const NI: NotificationInstance = {
            ...notification,
            close: () => this.remove(notification.key),
        };
        return NI;
    }

    send(notification: Notification) {
        return new Promise<NotificationInstance>((resolve, reject) => {
            if (!this._Container) return reject("SNotificationContainer not instance found.")
            if (!notification.key) notification.key = SUuid();

            this._Container.state.data[notification.key] = notification;
            this._Container.repaint()
            if (notification.time) {
                new SThread(notification.time, notification.key, false).start(() => {
                    this.remove(notification.key);
                })
            }
            resolve(this._createInstance(notification));
        })

    }

    remove(key: string) {
        delete this._Container.state.data[key];
        this._Container.repaint()
    }

    removeAll() {
        this._Container.state.data = {}
        this._Container.repaint()
    }

}();