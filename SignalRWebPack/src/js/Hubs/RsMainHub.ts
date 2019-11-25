import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

let SERVER_ROOT = "http://localhost:5003";

export var vikHub = new RsVikHub(SERVER_ROOT);
vikHub.startConnection();
vikHub.configure();
console.log("testing 1...");
console.log(vikHub.getHubPath());
console.log("testing 2...");
console.log(vikHub.getConnectionStatus());
//export var libraryHub = new RsLibraryHub(SERVER_ROOT);
