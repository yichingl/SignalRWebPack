﻿import { RsServerHub } from "./RsServerHub";

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
        console.log(`HUB: "${this.getHubPath()}" is getting configured.`);
        //this.addEvent("SendVIKConnectionStatus", this.gotStatusUpdate);
        //this.addEvent("SendVIKConnectionStatus", this.gotDataUpdate);
        this.getConnection().on("SendVIKConnectionStatus", (event) => this.gotStatusUpdate(status, event));
        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    public gotStatusUpdate(status: string, event):void {
        //testtest
        console.log("hello: vik status");
        console.log(`HUB: "${this.hubPath}" has connection status ${status}.`);
    }

    /*public gotDataUpdate(dataArray: any) = (event) => {
        console.log("hello: vik data");
        //console.log(`HUB: "${this.getHubPath()}" has received "${dataArray.length}" values.`);
    }*/
}
