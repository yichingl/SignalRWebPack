import { RsServerHub } from "./RsServerHub";

// instantiate hub
// var h = new Hub()
// >> allow for that to return
// h.configure()
// h.connect()

export class RsVikHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'vik');
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

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // Event Handlers
    private gotVIKConnectionStatus(thisHub: any, vikConnectionStatus: boolean) {
        console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${vikConnectionStatus}.`);
    }
    private gotVIKData(thisHub: any, vikData: any):void {
        console.log(`HUB: "${thisHub.getHubPath()}" has received Vik data with "${vikData.length}" entries.`);
    }
}
