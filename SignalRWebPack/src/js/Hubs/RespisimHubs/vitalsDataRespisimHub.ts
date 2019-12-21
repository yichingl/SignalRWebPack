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
        $(document).on("SawVitalsConnectionStatus", (event: any, connected: boolean, IP: string, port: string) => {
            this.gotVitalsConnectionStatus(connected, IP, port);
        });
    }
    public initUIController() {
        this.UIController = new VitalsDataUIController();
    }

    private gotVitalsConnectionStatus(connected: boolean, IP: string, port: string) {
        console.log("pushing vitals...");
        console.log(connected);
        console.log(IP);
        console.log(port);
    }
}