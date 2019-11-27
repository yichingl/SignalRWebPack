import { BaseHub } from "../Base/baseHub";

export class LibraryDataServerHub extends BaseHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'library');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendLungModelLibrary", (lungModelLibrary: any) => {
            this.gotLungModelLibrary(thisHub, lungModelLibrary);
        });
        this.addEvent("SendScenarioLibrary", (scenarioLibrary: any) => {
            this.gotScenarioLibrary(thisHub, scenarioLibrary);
        });
        this.addEvent("SendScenario", (scenarioInfo: any, scenario: any) => {
            this.gotScenario(thisHub, scenario);
        });
        this.addEvent("SendActiveLungModel", (activeLungModel: any) => {
            this.gotActiveLungModel(thisHub, activeLungModel);
        });
    }

    // EVENT HANDLERS
    private gotLungModelLibrary(thisHub: any, lungModelLibrary: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Scenario Library with ${lungModelLibrary.length} entries.`);
    }
    private gotScenarioLibrary(thisHub: any, scenarioLibrary: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library - ${JSON.stringify(scenarioLibrary)}`);
    }
    private gotScenario(thisHub: any, scenario: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Scenario with ${scenario.length} entries.`);
    }
    private gotActiveLungModel(thisHub: any, activeLungModel: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library with ${activeLungModel.length} entries.`);
    }

    /*update() {
        this.getConnection().invoke("UpdateLML");
    }*/
}
