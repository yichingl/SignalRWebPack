

export abstract class BaseUIListenHub{
    constructor(signalUrl: string, baseUrl: string) {
    }
    protected abstract initUIElements();
    protected initConnection(): void {
    }
}

// does not need to extend basehub
// instead