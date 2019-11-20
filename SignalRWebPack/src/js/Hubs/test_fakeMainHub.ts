import { FakeRsVikHub } from "./test_fakeRsVicHub";

export var testRsHub = new FakeRsVikHub("http://localhost:testhub_port");
testRsHub.setConnected();