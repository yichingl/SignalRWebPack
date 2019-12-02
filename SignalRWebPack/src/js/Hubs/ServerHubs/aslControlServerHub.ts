import { BaseHub } from "../Base/BaseHub";
import { HasUIHub } from "../Base/IHasUIHub";
import { BasicUIBroadcastHub } from "../Base/BasicUIBroadcastHub";
import { ASLControlUIListenHub } from "../UIHubs/ASLControlUIListenHub";

export class ASLControlServerHub extends BaseHub implements HasUIHub {

    private UIBroadcastHub: any;
    private UIListenHub: any;
    private aslState = "UNCONNECTED"; 

    // PROPERTIES
    public getASLState() { // renamed aslStartedStatus => getASLState()
        return this.aslState;
    }

    // CONSTRUCTORS
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControl');
        this.initConnection();
    }

    // INIT METHODS
    protected initConnection(): void {
        super.initConnection();
        this.initUIBroadcastHub();
        this.initUIListenHub();
    }
    public initUIBroadcastHub() {
        this.UIBroadcastHub = new BasicUIBroadcastHub(this.getHubPath());
    }
    public initUIListenHub() {
        this.UIListenHub = new ASLControlUIListenHub();
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
    }

    // EVENT HANDLERS
    private gotASLState(thisHub: any, aslState: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" has state - ${aslState}`);
        thisHub.UIBroadcastHub.getConnection().invoke("sawASLStatusChange", aslState);

        thisHub.aslState = aslState;
    }
    private gotASLDevice(thisHub: any, aslDevice: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslDevice}`);
        thisHub.UIBroadcastHub.getConnection().invoke("sawASLDeviceChange", aslDevice);
    }
    private gotASLRawData(thisHub: any, aslRawData: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslRawData}`);
    }

    // PUBLIC INVOKE METHODS
    // ASL connect/disconnect
    public connectASL() { // renamed connectAsl() to this
        this.getConnection().invoke("Connect");
    }
    public disconnectASL() { // renamed disconnectAsl() to this
        this.getConnection().invoke("Disconnect");
    }

    // ASL configuration: using IP, ID, standalone
    public setASLDeviceIP(configIPVal: any) { // renamed useIP() to this
        this.getConnection().invoke("SetIP", configIPVal);
    }
    public setASLDeviceID(configIDVal: any) { // renamed useID(), setAslDevice to this
        this.getConnection().invoke("SetIdent", configIDVal);
    }
    public setASLStandalone() { // renamed useStandalone(), setAslStandalone to this
        this.getConnection().invoke("SetStandalone");
    }
}