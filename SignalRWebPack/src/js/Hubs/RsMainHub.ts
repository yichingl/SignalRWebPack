import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

let SERVER_ROOT = "http://localhost:5003";

export var vikHub = new RsVikHub(SERVER_ROOT);
export var libraryHub = new RsLibraryHub(SERVER_ROOT);

console.info("Vik Hub Connected: " + vikHub.connected);
console.info("Library Hub Connected: " + libraryHub.connected);

libraryHub.update();