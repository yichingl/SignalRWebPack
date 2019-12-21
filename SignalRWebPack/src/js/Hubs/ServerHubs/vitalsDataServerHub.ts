import { BaseHub } from "../Base/BaseHub";

export class VitalsDataServerHub extends BaseHub {


    // CONSTRUCTOR
    constructor(signalUrl : string, RespisimHub : any) {
        super(signalUrl, 'vitals', RespisimHub);
        this.initConnection();
    }

    // INIT METHODS
    protected initConnection(): void {
        super.initConnection();
    }
    protected configureEvents() {
        var thisHub = this;
        this.addEvent("SendVitalsConnectionStatus", (connected: boolean, IP: string, port: string) => {
            this.gotVitalsConnectionStatus(thisHub, connected, IP, port);
        });
        this.addEvent("SendVitalsValues", (truMonitorData: any) => {
            this.gotVitalsValues(thisHub, truMonitorData);
        });
        this.addEvent("SendWaveformOptions", (waveformDescriptions: any) => {
            this.gotWaveformOptions(thisHub, waveformDescriptions);
        });
        this.addEvent("SendInvestigationOptions", (investigations: any) => {
            this.gotInvestigationOptions(thisHub, investigations);
        });
        this.addEvent("SendCurrentInvestigations", (currentInvestigations: any) => {
            this.gotCurrentInvestigations(thisHub, currentInvestigations);
        });
    }

    // EVENT HANDLERS
    private gotVitalsConnectionStatus(thisHub: any, connected: boolean, IP: string, port: string) {
        console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${connected}.`);
        this.RespisimEventBroadcastHub.SawVitalsConnectionStatus(connected, IP, port);
    }
    private gotVitalsValues(thisHub: any, truMonitorData: any) {
        //console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${connected}.`);
    }
    private gotWaveformOptions(thisHub: any, waveformDescriptions: any) {
        //console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${connected}.`);
    }
    private gotInvestigationOptions(thisHub: any, investigations: any) {
        //console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${connected}.`);
    }
    private gotCurrentInvestigations(thisHub: any, currentInvestigations: any) {
        //console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${connected}.`);
    }
}
