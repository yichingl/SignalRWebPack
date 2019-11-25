import { RsServerHub } from "./RsServerHub";

export class RsLibraryHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'library');
    }

    public configure() {
        var thisHub = this;
        this.addEvent("SendLungModelLibrary", (models: any) => {
            this.gotLibraries(thisHub, models);
        });
        this.addEvent("SendScenarioLibrary", (models: any) => {
            this.gotScenarios(thisHub, models);
        });
    }

    gotScenarios(thisHub: any, models: any) {
        console.log(`HUB: "${thisHub.hubPath}" has received Scenario Library with ${models.length} entries.`);
    }
    gotLibraries(thisHub: any, models: any) {
        console.log(`HUB: "${thisHub.hubPath}" has received Lung Model Library...`);
        console.info(JSON.stringify(models));
    }

    /*update() {
        this.getConnection().invoke("UpdateLML");
    }*/
}
