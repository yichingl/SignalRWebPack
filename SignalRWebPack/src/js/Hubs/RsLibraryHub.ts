import { RsServerHub } from "./RsServerHub";

export class RsLibraryHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'library');
    }

    public configure() {
        //this.addEvent("SendScenarioLibrary", this.gotScenarios);
        //this.addEvent("SendLungModelLibrary", this.gotLibraries);
        var thisHub = this;
        
        this.connection.on("SendScenarioLibrary", (models: any) => {
            this.gotScenarios(models, thisHub);
        });
        this.connection.on("SendLungModelLibrary", (models: any) => {
            console.log("test lung model library!");
        });
    }

    gotScenarios(models: any, thisHub: any) {
        console.log("scenarios");
        console.log(thisHub.getHubPath());
        console.log(thisHub.getBaseUrl());
        console.info(JSON.stringify(models));
    }
    /*
    gotLibraries(models: any) {
        console.log("models");
        console.info(JSON.stringify(models));
    }*/

    /*update() {
        this.getConnection().invoke("UpdateLML");
    }*/
}
