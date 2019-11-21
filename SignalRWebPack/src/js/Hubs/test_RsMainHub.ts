import { FakeRsVikHub } from "./test_RsVicHub";

export var testRsHub = new FakeRsVikHub("http://localhost:testhub_port");
testRsHub.setConnected();