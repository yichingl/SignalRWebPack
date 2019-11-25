import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

let SERVER_ROOT = "http://localhost:5003";

export var vikHub = new RsVikHub(SERVER_ROOT);
vikHub.startConnection();
vikHub.configure();
export var libraryHub = new RsLibraryHub(SERVER_ROOT);
libraryHub.startConnection();
libraryHub.configure();
