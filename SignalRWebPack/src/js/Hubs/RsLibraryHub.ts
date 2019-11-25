import { RsServerHub } from "./RsServerHub";

export class RsLibraryHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'library');
        this.initConnection();
    }

    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendLungModelLibrary", (models: any) => {
            this.gotLibraries(thisHub, models);
        });
        this.addEvent("SendScenarioLibrary", (models: any) => {
            this.gotScenarios(thisHub, models);
        });
    }

    // Event Handlers
    private gotScenarios(thisHub: any, models: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Scenario Library - ${JSON.stringify(models)}`);
    }
    private gotLibraries(thisHub: any, models: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library with ${models.length} entries.`);
    }

    /*update() {
        this.getConnection().invoke("UpdateLML");
    }*/
}
