import { BasicHub } from "./basicHub";

export class BaseUIBroadcastHub extends BasicHub {
    constructor(hubName: string) {
        super("", `${hubName}UI`);
        this.initConnection();
    }
}