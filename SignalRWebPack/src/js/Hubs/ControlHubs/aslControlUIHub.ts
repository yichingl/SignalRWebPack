import { BaseUIHub } from "../Base/baseUIHub";

export class ASLControlUIHub extends BaseUIHub {

    // CONSTRUCTORS
    // both, connect to same URL
    constructor() {
        super("", "aslControl");
        this.initConnection();
    }

    // INIT METHODS
    // ui only
    protected initUIElements() {
        this.setStatusText("Connected to RS Server");
        //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
    }
    // broadcast only
    protected configureEvents() {
        var thisHub = this;
        this.addEvent("broadcastASLStatusChange", (aslState: string) => {
            this.gotASLStatusChange(thisHub, aslState);
        });
        this.addEvent("broadcastASLDeviceChange", (aslDevice: string) => {
            this.gotASLDeviceChange(thisHub, aslDevice);
        });

        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }
    
    // EVENT HANDLERS
    // listen only
    private gotASLStatusChange(thisHub: any, aslState: string) {
        console.log(`HUB: "${thisHub.getHubPath()}" has state - ${aslState}`);
        thisHub.setStatusText(aslState);
    }
    private gotASLDeviceChange(thisHub: any, aslDevice: string) {
        console.log(`HUB: "${thisHub.getHubPath()}" has device - ${aslDevice}`);
        thisHub.setDeviceText(aslDevice);
    }


    // listen only
    // MAIN UI FUNCTIONS
    private setDeviceText(aslDevice: string) {
        if (aslDevice == 'Standalone') {
            //$('#config-standalone-button').attr("disabled", true);
            //$('#config-ip-button').attr("disabled", false);
            //$('#config-id-button').attr("disabled", false);
            //console.log("in standalone")
            //document.getElementById('setStandaloneButton').disabled = true;
            this.setDeviceInfo("ASL Emulation Mode");
        }
        else {
            //document.getElementById('setEthernetButton').disabled = true;
            this.setDeviceInfo("ASL 5000 #" + aslDevice);
            //$('#config-standalone-button').attr("disabled", false);
            if (aslDevice.length == 4) {
                //$('#config-ip-button').attr("disabled", false);
                //$('#config-id-button').attr("disabled", true);
            }
            else {
                //$('#config-ip-button').attr("disabled", true);
                //$('#config-id-button').attr("disabled", false);
            }
        }
    }
    private setStatusText(status: string) {
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

    // HELPER UI FUNCTIONS
    private setDeviceInfo(statusText: string) {
        //$('.device-status').text(statusText);
        console.log("Device Info: " + statusText);
    }

    // NON-UI HELPER FUNCTIONS
}