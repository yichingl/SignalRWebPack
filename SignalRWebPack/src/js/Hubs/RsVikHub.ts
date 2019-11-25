import { RsServerHub } from "./RsServerHub";

// instantiate hub
// var h = new Hub()
// >> allow for that to return
// h.configure()
// h.connect()

export class RsVikHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'vik');
    }

    public configure() {
        var thisHub = this;
        this.addEvent("SendVIKConnectionStatus", (status: any) => {
            this.gotStatusUpdate(thisHub, status);
        });
        this.addEvent("SendVIKData", (dataArray: any) => {
            this.gotStatusUpdate(thisHub, dataArray);
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    gotStatusUpdate(thisHub: any, status: boolean) {
        console.log(`HUB: "${thisHub.hubPath}" has connection status: ${status}.`);
    }
    gotDataUpdate(thisHub: any, dataArray: any):void {
        console.log(`HUB: "${thisHub.getHubPath()}" has received Vik data with "${dataArray.length}" entries.`);
    }
}
