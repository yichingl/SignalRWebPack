import { RsServerHub } from "./RsServerHub";

export class RsASLControlHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControl');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendASLState", (aslState: string) => {
            this.gotASLState(thisHub, aslState);
        });
        this.addEvent("SendASLDevice", (aslDevice: string) => {
            this.gotASLDevice(thisHub, aslDevice);
        });
        this.addEvent("SendASLRawData", (aslRawData: any) => {
            this.gotASLRawData(thisHub, aslRawData);
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // Event Handlers
    private gotASLState(thisHub: any, aslState: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" has state - ${aslState}.`);
    }
    private gotASLDevice(thisHub: any, aslDevice: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslDevice}.`);
    }
    private gotASLRawData(thisHub: any, aslRawData: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslRawData}.`);
    }


}