import * as $ from 'jquery';
import { HasUIController } from "../Base/HasUIController";
import { ASLControlUIController } from "../../UIControllers/ASLControlUIController";

export class ASLControlRespisimHub implements HasUIController {

    private UIController;

    constructor() {
        this.registerEvents();
        this.initUIController();
    }

    private registerEvents() {
        // TODO : check if this should be thisHub
        $(document).on("SawASLStatusChange", (event: any, lungModelLibrary: string) => {
            this.UIController.gotASLStatusChange(lungModelLibrary);
        });
        $(document).on("SawASLDeviceChange", (event: any, scenarioLibrary: string) => {
            this.UIController.gotASLDeviceChange(scenarioLibrary);
        });
    }
    public initUIController() {
        this.UIController = new ASLControlUIController();
    }
}