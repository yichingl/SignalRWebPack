import { BaseUIController } from "./Base/BaseUIController";

export class ASLControlUIController extends BaseUIController {

    // CONSTRUCTORS

    // INIT METHODS
    protected initUIElements() {
        //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
    }
    
    // EVENT HANDLERS
    public gotASLStatusChange(aslState: string) {
        this.setStatusText(aslState);
    }
    public gotASLDeviceChange(aslDevice: string) {
        this.setDeviceText(aslDevice);
    }


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
                statusText = "ASLControl: Connected";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
            case "UNCONNECTED":
                statusText = "ASLControl: Not Connected";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
            case "SIMULATING":
                statusText = "ASLControl: Running Simulation";
                //$("#simController").switchClass("fa-play-circle", "fa-pause-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                //$(".spin-on-status").addClass("fa-spin");
                break;
            case "SIMULATIONSTARTED":
                statusText = "ASLControl: Simulation Started";
                //$("#simController").switchClass("fa-play-circle", "fa-pause-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                //$(".spin-on-status").addClass("fa-spin");
                break;
            case "INITIALIZESIMULATION":
                statusText = "ASLControl: Initializing...";
                //$("#simController").switchClass("fa-pause-circle", "fa-play-circle");
                //$(".spin-on-status").removeClass("fa-spin");
                break;
            case "STOPSIMULATION":
                statusText = "ASLControl: Stopping...";
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