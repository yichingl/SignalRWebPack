import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

let SYSTEM_ROOT = "http://localhost:5003";

export var vikHub = new RsVikHub(SYSTEM_ROOT);
export var libraryHub = new RsLibraryHub(SYSTEM_ROOT);

console.info("Vik Hub Connected: " + vikHub.connected);
console.info("Library Hub Connected: " + libraryHub.connected);

libraryHub.update();