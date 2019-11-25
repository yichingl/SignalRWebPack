import * as signalR from '@aspnet/signalr'

export abstract class RsServerHub {

    protected connection: any;
    protected connected: boolean;
    protected baseUrl: string;
    protected hubPath: string;


    // Public Properties
    public getConnection() {
        return this.connection;
    }
    public getConnectionStatus() {
        return this.connected;
    }
    public getBaseUrl() {
        return this.baseUrl;
    }
    public getHubPath(): string {
        // test
        return this.hubPath;
    }

    // Constructor Methods
    constructor(signalUrl: string, hubName: string) {
        this.connected = false;
        this.baseUrl = signalUrl;
        this.hubPath = hubName;

        console.log(`HUB: building ${this.hubPath} at url ${this.baseUrl}/${this.hubPath}`);
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${this.baseUrl}/${this.hubPath}`)
            .build();
    }

    // Listen for connection events
    public addEvent(event: string, handler: Function) {
        this.connection.on(event, handler);
    }

    // Public Methods
    public abstract configure(): void;
    public startConnection() {
        console.log(`HUB: "${this.hubPath}" is starting its connection...`);
        this.connection.start()
            .then(
                this._setConnected()
            ).catch(err => {
                console.error(`HUB: "${this.hubPath}" has failed to connect.`);
            });
    }
    private _setConnected() {
        console.log(`HUB: "${this.hubPath}" has connected.`);
        this.connected = true;
    }
}

















/*var rshub_vik = new RsHub(`http://localhost:5003`, "vik");
rshub_vik.build();
rshub_vik.addEvent("SendVIKConnectionStatus", function (status:string) {
    console.info("vik connection: " + status);

}); */



//export { RsHub }

