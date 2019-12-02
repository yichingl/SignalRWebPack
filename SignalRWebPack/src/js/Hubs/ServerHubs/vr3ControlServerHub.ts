import { BaseHub } from "../Base/BaseHub";
import { HasUIHub } from "../Base/IHasUIHub";
import { BasicUIBroadcastHub } from "../Base/BasicUIBroadcastHub";
import { VR3ControlUIListenHub } from "../UIHubs/vr3ControlUIListenHub";

export class VR3ControlServerHub extends BaseHub implements HasUIHub {

    private UIBroadcastHub: any;
    private UIListenHub: any;

    // CONSTRUCTORS
    constructor(signalUrl: string) {
        super(signalUrl, 'vr3');
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
        this.UIListenHub = new VR3ControlUIListenHub();
    }
    protected configureEvents() {
        var thisHub = this;
    }

    // EVENT HANDLERS
}