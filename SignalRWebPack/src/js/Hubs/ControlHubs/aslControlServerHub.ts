import { BaseHub } from "../baseHub";

export class ASLControlServerHub extends BaseHub {
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

    // EVENT HANDLERS
    private gotASLState(thisHub: any, aslState: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" has state - ${aslState}.`);
    }
    private gotASLDevice(thisHub: any, aslDevice: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslDevice}.`);
    }
    private gotASLRawData(thisHub: any, aslRawData: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslRawData}.`);
    }

    // PUBLIC INVOKE METHODS
    // ASL connect/disconnect
    public connectASL() {
        this.getConnection().invoke("Connect");
    }
    public disconnectASL() {
        this.getConnection().invoke("Disconnect");
    }

    // ASL configuration: using IP
    public setASLDeviceIP(configIPVal: any) {
        this.getConnection().invoke("SetIP", configIPVal);
    }
    /*public useIP(configIPVal: any) { // when formalizing, separate out UI stuff from invoke
        //this.getConnection().invoke("SetIP", $('#config-ip').val())
        //$('#config-id').val("");
        //$('#config-ip').val("");
    }*/

    // ASL configuration: using ID
    public setASLDeviceID(configIDVal: any) {
        this.getConnection().invoke("SetIdent", configIDVal);
    }
    /*public useID(configIDVal: any) {
        this.getConnection().invoke("SetIdent", configIDVal);
        //this.getConnection().invoke("SetIdent", $('#config-id').val())
        //$('#config-id').val("");
        //$('#config-ip').val("");
    }*/

    // ASL configuration: using standalone
    public setASLStandalone() {
        this.getConnection().invoke("SetStandalone");
    }
    /*public useStandalone() {
        this.getConnection().invoke("SetStandalone");
    }*/
}