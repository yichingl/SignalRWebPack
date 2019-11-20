import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

var testHub = new RsVikHub("http://localhost:5003");
var libHub = new RsLibraryHub("http://localhost:5003");

console.info("Vik Hub Connected: " + testHub.connected);
console.info("Library Hub Connected: " + testHub.connected);


libHub.update();