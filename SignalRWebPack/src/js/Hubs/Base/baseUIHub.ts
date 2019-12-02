import { BasicHub } from "./basicHub";

export abstract class BaseUIHub extends BasicHub {
    constructor(signalUrl: string, baseUrl: string) {
        super(signalUrl, `${baseUrl}UI`);
        this.initUIElements();
    }
    protected abstract initUIElements();
}