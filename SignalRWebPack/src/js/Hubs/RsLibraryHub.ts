import { RsServerHub } from "./RsServerHub";

export class RsLibraryHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'library');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendLungModelLibrary", (models: any) => {
            this.gotLungModelLibrary(thisHub, models);
        });
        this.addEvent("SendScenarioLibrary", (models: any) => {
            this.gotScenarioLibrary(thisHub, models);
        });
        this.addEvent("SendScenario", (info: any, model: any) => {
            this.gotScenario(thisHub, model);
        });
        this.addEvent("SendActiveLungModel", (model: any) => {
            this.gotActiveLungModel(thisHub, model);
        });
    }
    // TODO: continue migrating library event handlers, and print accordingly
    // Event Handlers
    private gotLungModelLibrary(thisHub: any, models: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Scenario Library with ${models.length} entries.`);
    }
    private gotScenarioLibrary(thisHub: any, models: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library - ${JSON.stringify(models)}`);
    }
    private gotScenario(thisHub: any, models: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Scenario with ${models.length} entries.`);
    }
    private gotActiveLungModel(thisHub: any, model: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library with ${model.length} entries.`);
    }

    /*update() {
        this.getConnection().invoke("UpdateLML");
    }*/
}
