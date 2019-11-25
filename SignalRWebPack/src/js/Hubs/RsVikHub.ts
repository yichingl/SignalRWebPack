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
        this.addEvent("SendVIKConnectionStatus", (event) => this.gotStatusUpdate(event));
        this.addEvent("SendVIKConnectionStatus", (event) => this.gotDataUpdate(event));
        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    public gotStatusUpdate(status: boolean):void {
        //testtest
        console.log("hello: vik status");
        console.log(`HUB: "${this.hubPath}" has connection status: ${status}.`);
    }

    public gotDataUpdate(dataArray: any):void {
        console.log("hello: vik data");
        console.log(`HUB: "${this.getHubPath()}" has received "${dataArray.length}" values.`);
    }
}
