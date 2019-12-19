import * as $ from 'jquery';
import { HasUIController } from "../Base/HasUIController";
import { LibraryDataUIController } from "../../UIControllers/libraryDataUIController";

export class LibraryDataRespisimHub implements HasUIController {

    private UIController;

    constructor() {
        this.registerEvents();
        this.initUIController();
    }

    private registerEvents() {
        $(document).on("SawLungModelLibrary", (event: any, lungModelLibrary: string) => {
            this.gotLungModelLibrary(lungModelLibrary);
        });
        $(document).on("SawFirstTimeScenarioLibrary", (event: any, scenarioLibrary: string) => {
            this.gotFirstTimeScenarioLibrary(scenarioLibrary);
        });
    }
    public initUIController() {
        this.UIController = new LibraryDataUIController();
    }

    private gotLungModelLibrary(lungModelLibrary: string) {
        console.log("pushing lung model library...");
        console.log(lungModelLibrary);
        this.UIController.updateLungModelLibraryUI(lungModelLibrary);
    }
    private gotFirstTimeScenarioLibrary(scenarioLibrary: string) {
        console.log("pushing scenario library...");
        console.log(scenarioLibrary);
    }
}