import * as signalR from '@aspnet/signalr'

export abstract class RsServerHub {
    baseUrl: string;
    hubPath: string;
    connection: any;
    connected: boolean = false;

    constructor(signalUrl: string, hubName: string) {
        this.baseUrl = signalUrl;
        this.hubPath = hubName;
        this.build();
        this.configure();
    }

    public build() {
        var cn = false;
        console.log(`Building Hub: ${this.hubPath} at base url ${this.baseUrl}`);
        this.connection = new signalR.HubConnectionBuilder().withUrl(`${this.baseUrl}/${this.hubPath}`).build();
        console.log(`Hub "${this.hubPath}" has been created. Starting...`);
        this.connection.start().then(function () { cn = true; });
        console.log(`Hub "${this.hubPath}" has been started.`);

        this.connected = cn;
    }

    public configure() {

        // Nothing, add events here

    }


    public addEvent(event: string, handler: Function) {
        this.connection.on(event, handler);
    }

    public setConnected() {
        this.connected = true;
        console.info("Connected!");
        return this.connected;
    }
}

















/*var rshub_vik = new RsHub(`http://localhost:5003`, "vik");
rshub_vik.build();
rshub_vik.addEvent("SendVIKConnectionStatus", function (status:string) {
    console.info("vik connection: " + status);

}); */



//export { RsHub }

