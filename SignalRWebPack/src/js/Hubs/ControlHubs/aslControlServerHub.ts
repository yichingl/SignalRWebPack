import { BasicHub } from "../Base/BasicHub";
import { HasUIHub } from "../Base/IHasUIHub";
import { BasicUIBroadcastHub } from "../Base/BasicUIBroadcastHub";
import { ASLControlUIListenHub } from "./ASLControlUIHub";

export class ASLControlServerHub extends BasicHub implements HasUIHub {

    private UISenderHub: any;
    private UIReceiveHub: any;
    private aslState = "UNCONNECTED"; 

    // PROPERTIES
    public getASLState() { // renamed aslStartedStatus => getASLState()
        return this.aslState;
    }

    // CONSTRUCTORS
    constructor(signalUrl: string) {
        super(signalUrl, 'aslControl');
        this.initUIBroadcastHub();
        this.initUIListenHub();
        this.initConnection();
    }

    // INIT METHODS
    public initUIBroadcastHub() {
        this.UISenderHub = new BasicUIBroadcastHub(this.getHubPath());
    }
    public initUIListenHub() {
        this.UIReceiveHub = new ASLControlUIListenHub();
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
        super.configureEvents();
    }

    // EVENT HANDLERS
    private gotASLState(thisHub: any, aslState: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" has state - ${aslState}`);
        thisHub.UISenderHub.getConnection().invoke("sawASLStatusChange", aslState);

        thisHub.aslState = aslState;
    }
    private gotASLDevice(thisHub: any, aslDevice: string) {
        console.info(`HUB: "${thisHub.getHubPath()}" is using device - ${aslDevice}`);
        thisHub.UISenderHub.getConnection().invoke("sawASLDeviceChange", aslDevice);
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