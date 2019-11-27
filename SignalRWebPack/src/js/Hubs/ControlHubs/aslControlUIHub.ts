import { BaseHub } from "../Base/baseHub";

export class ASLControlUIHub extends BaseHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControlUI');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("broadcastASLStatusChange", (aslState: string) => {
            this.gotASLStatusChange(aslState);
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // EVENT HANDLERS
    private gotASLStatusChange(aslState: string) {
        console.log(`HUB: "${this.getHubPath()}" has state - ${aslState}`);

    }
}