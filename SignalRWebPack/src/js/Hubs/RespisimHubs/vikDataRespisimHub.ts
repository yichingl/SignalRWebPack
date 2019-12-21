import * as $ from 'jquery';

export class VIKDataServerHub {

    constructor() {
        this.registerEvents();
    }

    private registerEvents() {
        $(document).on("SawVIKConnectionStatus", (event: any, vikConnectionStatus: boolean) => {
            this.gotVIKConnectionStatus(vikConnectionStatus);
        });
        $(document).on("SawVIKData", (event: any, vikData: any) => {
            this.gotVIKData(vikData);
        });
    }
    private gotVIKConnectionStatus(vikConnectionStatus: boolean) {
        console.log("respisim vik connection status...");
        console.log(vikConnectionStatus);
    }
    private gotVIKData(vikData: string) {
        console.log("pushing vik data...");
        console.log(vikData);
    }
}