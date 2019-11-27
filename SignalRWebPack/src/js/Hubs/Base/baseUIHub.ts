import { BaseHub } from "../Base/baseHub";

export abstract class BaseUIHub extends BaseHub {
    constructor(signalUrl: string, baseUrl: string) {
        super(signalUrl, baseUrl);
        this.initUIElements;
    }
    protected abstract initUIElements();
}