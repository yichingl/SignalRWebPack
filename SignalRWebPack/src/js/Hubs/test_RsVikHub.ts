import { FakeRsServerHub } from "./test_RsServerHub";

export class FakeRsVikHub extends FakeRsServerHub {
    constructor(signalURL: string) {
        super(signalURL, 'fakevik');
    }
    configure() {
        console.log("FAKE RS VIK HUB: configure()");
    }
    statusUpdate(status: string) {
        console.info("FAKE RS VIK HUB: statusUpdate()");
    }
}
