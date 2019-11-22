import { RsServerHub } from "./RsServerHub";

export class RsVikHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'vik');
    }

    configure() {
        this.addEvent("SendVIKConnectionStatus", this.gotStatusUpdate);
        this.addEvent("SendVIKConnectionStatus", this.gotDataUpdate);
    }

    gotStatusUpdate(status: string) {
        console.log(`HUB: "${this.getHubPath()}" has connection status ${status}.`);
    }

    gotDataUpdate(dataArray: any) {
        console.log(`HUB: "${this.getHubPath()}" has received "${dataArray.length}" values.`);
    }
}
