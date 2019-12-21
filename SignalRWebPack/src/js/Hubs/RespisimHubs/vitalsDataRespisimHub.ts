import * as $ from 'jquery';
import { HasUIController } from "../Base/HasUIController";
import { VitalsDataUIController } from "../../UIControllers/vitalsDataUIController";

export class VitalsDataRespisimHub implements HasUIController {

    private UIController;

    constructor() {
        this.registerEvents();
        this.initUIController();
    }

    private registerEvents() {
        // TODO: connection info should contain 3 items, but is currently a bool
        $(document).on("SawVitalsConnectionStatus", (event: any, connectionInfo: any) => {
            this.gotVitalsConnectionStatus(connectionInfo);
        });
    }
    public initUIController() {
        this.UIController = new VitalsDataUIController();
    }

    private gotVitalsConnectionStatus(connectionInfo: any) {
        console.log("pushing vitals...");
        console.log(connectionInfo[0]);
        console.log(connectionInfo[1]);
        console.log(connectionInfo[2]);
    }
}