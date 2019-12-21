import { BaseHub } from "../Base/BaseHub";

export class VIKDataServerHub extends BaseHub {
    constructor(signalUrl: string, RespisimHub: any) {
        super(signalUrl, 'vik', RespisimHub);
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendVIKConnectionStatus", (vikConnectionStatus: boolean) => {
            this.RespisimEventBroadcastHub.SawVIKConnectionStatus(vikConnectionStatus);
        });
        this.addEvent("SendVIKData", (vikData: any) => {
            this.RespisimEventBroadcastHub.SawVIKData(vikData)
        });
    }
}
