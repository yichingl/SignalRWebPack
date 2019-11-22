import { RsServerHub } from "./RsServerHub";

export class FakeRsVikHub extends RsServerHub {
    constructor(signalURL: string) {
        super(signalURL, 'fakevik');
    }
    configure() {
        //console.log("FAKE RS VIK HUB: configure()");
    }
    statusUpdate(status: string) {
        //console.info("FAKE RS VIK HUB: statusUpdate()");
    }
}
