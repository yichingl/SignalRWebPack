import { RsServerHub } from "./RsServerHub";

export class RsVikHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'vik');
    }

    configure() {
        this.addEvent("SendVIKConnectionStatus", this.statusUpdate);
    }

    statusUpdate(status: string) {
        console.info("VIK Connection: " + status);
    }
}
