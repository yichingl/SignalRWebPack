import { BaseHub } from "../baseHub";

export class ASLControlUIHub extends BaseHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControlUI');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("messageReceived", () => {
            console.log("TESTING: got event");
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // EVENT HANDLERS
}