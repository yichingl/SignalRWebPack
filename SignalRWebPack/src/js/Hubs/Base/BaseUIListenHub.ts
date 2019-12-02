import { BasicHub } from "./BasicHub";

export abstract class BaseUIListenHub extends BasicHub {
    constructor(signalUrl: string, baseUrl: string) {
        super(signalUrl, `${baseUrl}UI`);
    }
    protected abstract initUIElements();
    protected initConnection(): void {
        super.initConnection();
        this.initUIElements();
    }
}