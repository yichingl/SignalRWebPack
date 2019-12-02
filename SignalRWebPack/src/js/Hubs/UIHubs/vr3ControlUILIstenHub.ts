import { BaseUIListenHub } from "../Base/BaseUIListenHub";

export class VR3ControlUIListenHub extends BaseUIListenHub {
    // CONSTRUCTORS
    constructor() {
        super("", "vr3");
        this.initConnection();
    }

    // INIT METHODS
    protected initUIElements() {
    }
    protected configureEvents() {
        var thisHub = this;
    }

    // EVENT HANDLERS
}