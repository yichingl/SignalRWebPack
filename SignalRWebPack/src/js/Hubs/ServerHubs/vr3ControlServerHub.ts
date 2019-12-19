import { BaseHub } from "../Base/BaseHub";

export class VR3ControlServerHub extends BaseHub {

    // CONSTRUCTORS
    constructor(signalUrl : string, RespisimHub : any) {
        super(signalUrl, 'vr3', RespisimHub);
        this.initConnection();
    }

    // INIT METHODS
    protected initConnection(): void {
        super.initConnection();
    }
    protected configureEvents() {
        var thisHub = this;
    }

    // EVENT HANDLERS
}