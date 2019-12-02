import { BaseHub } from "../Base/BaseHub";
import { HasUIHub } from "../Base/IHasUIHub";
import { BasicUIBroadcastHub } from "../Base/BasicUIBroadcastHub";
import { VitalsDataUIListenHub } from "./VitalsDataUIListenHub";

export class VitalsDataServerHub extends BaseHub implements HasUIHub {

    private UIBroadcastHub: any;
    private UIListenHub: any;

    // CONSTRUCTOR
    constructor(signalUrl: string) {
        super(signalUrl, 'vitals');
        this.initConnection();
    }

    // INIT METHODS
    protected initConnection(): void {
        super.initConnection();
        this.initUIBroadcastHub();
        this.initUIListenHub();
    }
    public initUIBroadcastHub() {
        this.UIBroadcastHub = new BasicUIBroadcastHub(this.getHubPath());
    }
    public initUIListenHub() {
        this.UIListenHub = new VitalsDataUIListenHub();
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

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }

    // EVENT HANDLERS
    private gotVitalsConnectionStatus(thisHub: any, connected: boolean, IP: string, port: string) {
        console.log(`HUB: "${thisHub.getHubPath()}" has connection status - ${connected}.`);
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
