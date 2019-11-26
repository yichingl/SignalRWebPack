import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";
import { RsASLControlHub } from "./RsASLControlHub";

let SERVER_ROOT = "http://localhost:5003";

export var vikHub = new RsVikHub(SERVER_ROOT);
export var libraryHub = new RsLibraryHub(SERVER_ROOT);
export var ASLControlHub = new RsASLControlHub(SERVER_ROOT);