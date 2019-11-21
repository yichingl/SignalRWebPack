import * as signalR from '@aspnet/signalr'

export abstract class FakeRsServerHub {
    baseUrl: string;
    hubPath: string;
    connection: any;
    connected: boolean;

    constructor(signalUrl: string, hubName: string) {
        this.baseUrl = signalUrl;
        this.hubPath = hubName;
        this.build();
        this.configure();
    }

    public build() {
        console.log(`Building Fake Hub: ${this.hubPath} at base url ${this.baseUrl}`);
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${this.baseUrl}`)
            .build();
        //.withUrl(`${this.baseUrl}/${this.hubPath}`)
    }
    public configure() {
        console.log("FAKE HUB: configure()");
    }
    public addEvent() {
        console.log("FAKE HUB: addEvent()");
    }
    public setConnected() {
        console.log("FAKE HUB: setConnected()");
    }
} 