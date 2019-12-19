﻿import { BaseHub } from "../Base/BaseHub";

export class VIKDataServerHub extends BaseHub {
    constructor(signalUrl: string, RespisimHub: any) {
        super(signalUrl, 'vik', RespisimHub);
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendVIKConnectionStatus", (vikConnectionStatus: boolean) => {
            this.gotVIKConnectionStatus(thisHub, vikConnectionStatus);
        });
        this.addEvent("SendVIKData", (vikData: any) => {
            this.gotVIKData(thisHub, vikData);
        });
    }

    // EVENT HANDLERS
    private gotVIKConnectionStatus(thisHub: any, vikConnectionStatus: boolean) {
        console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${vikConnectionStatus}.`);
    }
    private gotVIKData(thisHub: any, vikData: any):void {
        console.log(`HUB: "${thisHub.getHubPath()}" has received Vik data with "${vikData.length}" entries.`);
    }
}
