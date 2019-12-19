import * as $ from 'jquery';

export class LibraryDataRespisimHub {

    // init (to be shared, later)
    constructor() {
        $(document).on("SawLungModelLibrary", (event: any, lungModelLibrary: string) => {
            console.log("pushing lung model library...");
            console.log(lungModelLibrary);
        });
        $(document).on("SawFirstTimeScenarioLibrary", (event: any, scenarioLibrary: string) => {
            console.log("pushing scenario library...");
            console.log(scenarioLibrary);
        });
    }
}