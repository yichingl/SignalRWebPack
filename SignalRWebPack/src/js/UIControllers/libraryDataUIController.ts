import { BaseUIController } from "./Base/BaseUIController";

export class LibraryDataUIController extends BaseUIController {

    // CONSTRUCTORS
    constructor() {
        super();
        this.initUIElements();
    }

    // INIT METHODS
    protected initUIElements() {
        console.log("initializing UI for library...")
    }

    // EVENT HANDLERS
    private updateLungModelLibraryUI(lungModelLibrary: any) {
        console.log("UPDATING LUNGMODEL UI");

    }
    private updateFirstTimeScenarioLibraryUI(scenarioLibrary: any) {
        console.log("UPDATING SCENARIO UI");
    }
}