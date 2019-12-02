import { BasicHub } from "./BasicHub";

export abstract class BaseUIListenHub extends BasicHub {
    constructor(signalUrl: string, baseUrl: string) {
        super(signalUrl, `${baseUrl}UI`);
        this.initUIElements();
    }
    protected abstract initUIElements();
}