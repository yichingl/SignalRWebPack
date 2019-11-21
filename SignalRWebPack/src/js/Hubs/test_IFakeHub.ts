import * as signalR from '@aspnet/signalr'

export abstract class FakeRsServerHub{
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
        console.log("FAKE HUB: build()");
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("/hub")
            .build();
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