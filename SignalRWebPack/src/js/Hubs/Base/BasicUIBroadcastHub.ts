import { BaseHub } from "./BaseHub";

export class BasicUIBroadcastHub extends BaseHub {
    constructor(hubName: string) {
        super("", `${hubName}UI`);
        this.initConnection();
    }
}