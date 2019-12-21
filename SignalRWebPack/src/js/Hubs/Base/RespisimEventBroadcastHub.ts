import * as $ from 'jquery';

export class RespisimEventBroadcastHub {

    // Library Data
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

    // VIK Data
    public SawVIKConnectionStatus(vikConnectionStatus: boolean) {
        $(document).triggerHandler("SawVIKConnectionStatus", vikConnectionStatus);
    }
    public SawVIKData(vikData: any) {
        $(document).triggerHandler("SawVIKData", vikData);
    }

    // Vitals Data
    public SawVitalsConnectionStatus(connected: boolean, IP: string, port: string) {
        $(document).triggerHandler('SawVitalsConnectionStatus', [connected, IP, port]);
    }
}