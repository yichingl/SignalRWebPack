import { RsServerHub } from "./RsServerHub";

export class RsLibraryHub extends RsServerHub {
    constructor(signalUrl: string) {
        super(signalUrl, 'library');
    }

    configure() {
        this.addEvent("SendScenarioLibrary", this.gotScenarios);
        this.addEvent("SendLungModelLibrary", this.gotLibraries);
    }

    gotScenarios(models: any) {
        console.info(JSON.stringify(models));
    }

    gotLibraries(models: any) {
        console.info(JSON.stringify(models));
    }

    /*update() {
        this.getConnection().invoke("UpdateLML");
    }*/
}
