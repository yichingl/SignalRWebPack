import { BaseUIListenHub } from "../Base/BaseUIListenHub";

export class LibraryDataUIListenHub extends BaseUIListenHub {

    // CONSTRUCTORS
    constructor() {
        super("", "library");
        this.initConnection();
    }

    // INIT METHODS
    protected initUIElements() {
        console.log("initializing UI for library...")
    }
}