import { RsServerHub } from "./RsServerHub";

export class RsASLControlHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControl');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendASLState", (ASLState: string) => {
            this.gotASLState(thisHub, ASLState);
        });
        this.addEvent("SendASLDevice", (ASLDevice: string) => {
            this.gotASLDevice(thisHub, ASLDevice);
        });
        this.addEvent("SendASLRawData", (ASLRawData: any) => {
            this.gotASLRawData(thisHub, ASLRawData);
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // Event Handlers
    private gotASLState(thisHub: any, ASLState: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" has state - ${ASLState}.`);
    }
    private gotASLDevice(thisHub: any, ASLDevice: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${ASLDevice}.`);
    }
    private gotASLRawData(thisHub: any, ASLRawData: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${ASLRawData}.`);
    }


}