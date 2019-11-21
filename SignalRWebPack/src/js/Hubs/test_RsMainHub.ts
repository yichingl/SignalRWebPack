import { FakeRsVikHub } from "./test_RsVikHub";

export var testRsHub = new FakeRsVikHub("http://localhost:testhub_port");
testRsHub.setConnected();