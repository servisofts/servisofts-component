export default class Upload {
    static send(file: any, url: any): void;
    static sendPromise({ file }: {
        file: any;
    }, url: any): Promise<unknown>;
}
