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
    protected configureEvents() {
    }

    // EVENT HANDLERS
    private gotLungModelLibrary(thisHub: any, lungModelLibrary: any) {

    }
    private gotFirstTimeScenarioLibrary(thisHub: any, scenarioLibrary: any) {
        //showStartScreen(scenarioLibrary);
    }
}