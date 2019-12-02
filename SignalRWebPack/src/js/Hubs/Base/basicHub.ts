import * as signalR from '@aspnet/signalr'

export class BasicHub {
    
    private readonly baseUrl: string;
    private readonly hubPath: string;
    private readonly connection: any;
    private connected: boolean;

    // PROPERTIES 
    protected getConnection() {
        return this.connection;
    }
    protected getConnectionStatus() {
        return this.connected;
    }
    protected getBaseUrl() {
        return this.baseUrl;
    }
    protected getHubPath(): string {
        return this.hubPath;
    }

    // CONSTRUCTORS 
    constructor(signalUrl: string, hubName: string) {
        this.connected = false;
        this.baseUrl = signalUrl;
        this.hubPath = hubName;

        console.log(`HUB: building "${this.hubPath}" at url ${this.baseUrl}/${this.hubPath}`);
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${this.baseUrl}/${this.hubPath}`)
            .build();
    }

    // LISTEN FOR EVENTS
    protected addEvent(event: string, handler: Function) {
        this.connection.on(event, handler);
    }

    // INIT CONNECTION
    protected initConnection(): void {
        this.configureEvents();
        this.startConnection();
    }
    protected configureEvents(): void {
        console.log(`HUB: "${this.getHubPath()}" has been configured.`);
    }
    protected startConnection(): void {
        console.log(`HUB: "${this.hubPath}" is connecting...`);
        this.connection.start()
            .then(() => {
                console.log(`HUB: "${this.hubPath}" has connected.`);
                this.connected = true;
            }
            ).catch(err => {
                console.error(`HUB: "${this.hubPath}" has failed to connect.`);
            });
    }
}

















/*var rshub_vik = new RsHub(`http://localhost:5003`, "vik");
rshub_vik.build();
rshub_vik.addEvent("SendVIKConnectionStatus", function (status:string) {
    console.info("vik connection: " + status);

}); */



//export { RsHub }

