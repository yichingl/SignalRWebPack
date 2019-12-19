﻿import { BaseHub } from "../Base/BaseHub";

export class LibraryDataServerHub extends BaseHub {

    private firstTimeScenarioLibrary: boolean = true;

    // CONSTRUCTORS
    constructor(signalUrl: string, RespisimHub: any) {
        super(signalUrl, 'library', RespisimHub);
        this.initConnection();
    }

    // INIT METHODS
    protected initConnection(): void {
        super.initConnection();
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
        thisHub.RespisimEventBroadcastHub.SawLungModelLibrary(JSON.stringify(lungModelLibrary));
    }
    private gotScenarioLibrary(thisHub: any, scenarioLibrary: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library - ${JSON.stringify(scenarioLibrary)}`);
        /*if (thisHub.firstTimeScenarioLibrary) {
            thisHub.UIBroadcastHub.getConnection().invoke("SawFirstTimeScenarioLibrary", JSON.stringify(scenarioLibrary));
            thisHub.firstTimeScenarioLibrary = false;
        }*/
    }
    private gotScenario(thisHub: any, scenario: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Scenario with ${scenario.length} entries.`);
    }
    private gotActiveLungModel(thisHub: any, activeLungModel: any) {
        console.info(`HUB: "${thisHub.getHubPath()}" has received Lung Model Library with ${activeLungModel.length} entries.`);
    }

    // PUBLIC INVOKE METHODS
    // Scenario
    public newScenario() {
        // Get initial model here (196 default)
        //startingLungModelSelector.options[startingLungModelSelector.selectedIndex].value
        this.getConnection().invoke("NewScenario", "196");
    }
    public loadScenario(scenarioId) { // rename from rs_loadScenario() to this
        // todo: loadscenario here
        this.getConnection().invoke("GetScenario", scenarioId.toString());
    }

    // Lung Model
    public updateLML(){ // rename from UpdateForLML() to this
        this.getConnection().invoke("UpdateLML");
    }
    public saveLungModel() {
        var name = window.prompt("Lung Model Name");
        this.getConnection().invoke("SaveAsLungModel", name, "1");
    }
    public loadPatientModel(id) { // rename from LoadPatientModel() to this
        this.getConnection().invoke("SetLungModel", id.toString(), 0);
    }

    // Breath Actions
    public invokeCough() { // rename from rs_cough() to this
        this.getConnection().invoke("Cough");
    }
    public invokeSigh() { // rename from rs_sigh to this
        this.getConnection().invoke("Sigh");
    }
}
