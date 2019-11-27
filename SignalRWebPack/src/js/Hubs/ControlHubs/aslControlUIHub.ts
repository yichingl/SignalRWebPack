import { BaseHub } from "../Base/baseHub";

export class ASLControlUIHub extends BaseHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControlUI');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("broadcastASLStatusChange", () => {
            this.gotASLStatusChange();
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // EVENT HANDLERS
    private gotASLStatusChange() {
        console.log("TESTING: got event with state - ");

    }
}