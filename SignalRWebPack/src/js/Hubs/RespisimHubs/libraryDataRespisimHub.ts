import * as $ from 'jquery';

export class LibraryDataRespisimHub {

    constructor() {
        this.registerEvents();
    }

    private registerEvents() {
        $(document).on("SawLungModelLibrary", (event: any, lungModelLibrary: string) => {
            this.gotLungModelLibrary(lungModelLibrary);
        });
        $(document).on("SawFirstTimeScenarioLibrary", (event: any, scenarioLibrary: string) => {
            this.gotFirstTimeScenarioLibrary(scenarioLibrary);
        });
    }

    private gotLungModelLibrary(lungModelLibrary: string) {
        console.log("pushing lung model library...");
        console.log(lungModelLibrary);
    }
    private gotFirstTimeScenarioLibrary(scenarioLibrary: string) {
        console.log("pushing scenario library...");
        console.log(scenarioLibrary);
    }
}