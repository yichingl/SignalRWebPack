import { BaseUIHub } from "../Base/baseUIHub";

export class ASLControlUIHub extends BaseUIHub {
    constructor() {
        super("", "aslControlUI");
        this.initConnection();
    }

    // INIT METHODS
    protected initUIElements() {
        this.setStatusText("Connected to RS Server");
        //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
    }
    protected configureEvents() {
        var thisHub = this;
        this.addEvent("broadcastASLStatusChange", (aslState: string) => {
            this.gotASLStatusChange(aslState);
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }
    
    // EVENT HANDLERS
    private gotASLStatusChange(aslState: string) {
        console.log(`HUB: "${this.getHubPath()}" has state - ${aslState}`);
    }

    // UI HELPER FUNCTIONS
    private setStatusText(status) {
        var statusText = status;
        switch (status) {
            case "CONNECTED":
                statusText = "Connected";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
            case "UNCONNECTED":
                statusText = "Not Connected";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
            case "SIMULATING":
                statusText = "Running Simulation";
                //$("#simController").switchClass("fa-play-circle", "fa-pause-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                //$(".spin-on-status").addClass("fa-spin");
                break;
            case "SIMULATIONSTARTED":
                statusText = "Simulation Started";
                //$("#simController").switchClass("fa-play-circle", "fa-pause-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                //$(".spin-on-status").addClass("fa-spin");
                break;
            case "INITIALIZESIMULATION":
                statusText = "Initializing...";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
            case "STOPSIMULATION":
                statusText = "Stopping...";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
        }
        //$('.system-status').text(statusText);
        console.log(statusText);
    }


    // NON-UI HELPER FUNCTIONS
}