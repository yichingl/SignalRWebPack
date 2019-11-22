import * as signalR from '@aspnet/signalr'

export abstract class RsServerHub {

    private connection: any;
    private connected: boolean;
    private baseUrl: string;
    private hubPath: string;

    constructor(signalUrl: string, hubName: string) {
        this.connected = false;
        this.baseUrl = signalUrl;
        this.hubPath = hubName;
        this._initHub();
        this.configure();
    }

    // Build Methods
    private _initHub() {
        this._buildConnection();
        this._startConnection();
    }
    private _buildConnection() {
        console.log(`HUB: building ${this.hubPath} at url ${this.baseUrl}/${this.hubPath}`);
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${this.baseUrl}/${this.hubPath}`)
            .build();
    }
    private _startConnection() {
        console.log(`HUB: "${this.hubPath}" has been created. Starting...`);
        this.connection.start()
            .then( () => {
                console.log(`HUB: "${this.hubPath}" has connected.`);
                this.connected = true;
            }).catch( err => {
                console.error(`HUB: "${this.hubPath}" has failed to connect.`);
            });
    }

    // Public Properties
    public getConnection() {
        return this.connection;
    }
    public getConnectionStatus() {
        return this.connected;
    }

    // Configure Methods
    public configure() {
        // Nothing, add events here
    }


    public addEvent(event: string, handler: Function) {
        this.connection.on(event, handler);
    }
}

















/*var rshub_vik = new RsHub(`http://localhost:5003`, "vik");
rshub_vik.build();
rshub_vik.addEvent("SendVIKConnectionStatus", function (status:string) {
    console.info("vik connection: " + status);

}); */



//export { RsHub }

