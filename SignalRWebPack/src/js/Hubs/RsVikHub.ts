import { RsHub } from "./RsHub";

export class RsVikHub extends RsHub {
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
