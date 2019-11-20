import { RsHub } from "./RsHub";

export class RsLibraryHub extends RsHub {
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

    update() {
        this.connection.invoke("UpdateLML");
    }
}
