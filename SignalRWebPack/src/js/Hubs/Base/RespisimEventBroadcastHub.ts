﻿import * as $ from 'jquery';

export class RespisimEventBroadcastHub {

    // Library
    public SawLungModelLibrary(lungModelLibrary: string) {
        $(document).triggerHandler('SawLungModelLibrary', lungModelLibrary);
    }
    public SawFirstTimeScenarioLibrary(scenarioLibrary: string) {
        $(document).triggerHandler('SawFirstTimeScenarioLibrary', scenarioLibrary);
    }
}