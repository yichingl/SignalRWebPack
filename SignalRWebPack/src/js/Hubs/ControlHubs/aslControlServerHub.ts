import { BaseHub } from "../Base/baseHub";
import { HasUIHub } from "../Base/IHasUIHub";
import { ASLControlUIHub } from "./aslControlUIHub";

export class ASLControlServerHub extends BaseHub implements HasUIHub {

    public UIConnectionHub: any;

    constructor(signalUrl: string) {
        super(signalUrl, 'aslControl');
        this.initUIConnectionHub();
        this.initConnection();
    }

    public initUIConnectionHub() {
        this.UIConnectionHub = new ASLControlUIHub();
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

    // EVENT HANDLERS
    private gotASLState(thisHub: any, aslState: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" has state - ${aslState}`);
        thisHub.UIConnectionHub.getConnection().invoke("sawASLStatusChange", aslState);
    }
    private gotASLDevice(thisHub: any, aslDevice: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslDevice}`);
    }
    private gotASLRawData(thisHub: any, aslRawData: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslRawData}`);
    }

    // PUBLIC INVOKE METHODS
    // ASL connect/disconnect
    public connectASL() {
        this.getConnection().invoke("Connect");
    }
    public disconnectASL() {
        this.getConnection().invoke("Disconnect");
    }

    // ASL configuration: using IP, ID, standalone
    public setASLDeviceIP(configIPVal: any) {
        this.getConnection().invoke("SetIP", configIPVal);
    }
    public setASLDeviceID(configIDVal: any) {
        this.getConnection().invoke("SetIdent", configIDVal);
    }
    public setASLStandalone() {
        this.getConnection().invoke("SetStandalone");
    }
}