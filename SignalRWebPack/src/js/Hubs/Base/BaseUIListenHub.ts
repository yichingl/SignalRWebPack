import { BaseHub } from "./BaseHub";

export abstract class BaseUIListenHub extends BaseHub {
    constructor(signalUrl: string, baseUrl: string) {
        super(signalUrl, `${baseUrl}UI`);
    }
    protected abstract initUIElements();
    protected initConnection(): void {
        super.initConnection();
        this.initUIElements();
    }
}