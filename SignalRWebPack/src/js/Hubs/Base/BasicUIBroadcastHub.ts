import { BasicHub } from "./basicHub";

export class BasicUIBroadcastHub extends BasicHub {
    constructor(hubName: string) {
        super("", `${hubName}UI`);
        this.initConnection();
    }
}