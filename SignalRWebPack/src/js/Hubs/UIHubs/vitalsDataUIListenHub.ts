﻿import { BaseUIListenHub } from "../Base/BaseUIListenHub";

export class VitalsDataUIListenHub extends BaseUIListenHub {

    // CONSTRUCTORS
    constructor() {
        super("", "vitals");
        this.initConnection();
    }

    // INIT METHODS
    protected initUIElements() {
    }
    protected configureEvents() {
        var thisHub = this;
    }

    // EVENT HANDLERS

}