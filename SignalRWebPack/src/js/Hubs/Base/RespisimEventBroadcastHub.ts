import * as $ from 'jquery';

export class RespisimEventBroadcastHub {

    // Library
    public SawLungModelLibrary(lungModelLibrary: string) {
        $(document).triggerHandler('SawLungModelLibrary', lungModelLibrary);
    }
    public SawFirstTimeScenarioLibrary(scenarioLibrary: string) {
        $(document).triggerHandler('SawFirstTimeScenarioLibrary', scenarioLibrary);
    }

    // ASL Control
    public SawASLStatusChange(aslState: string) {
        $(document).triggerHandler('SawASLStatusChange', aslState);
    }
    public SawASLDeviceChange(aslDevice: string) {
        $(document).triggerHandler("sawASLDeviceChange", aslDevice);
    }
}