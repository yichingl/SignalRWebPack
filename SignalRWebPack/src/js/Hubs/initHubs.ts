import { VIKDataServerHub } from "./DataHubs/vikDataServerHub";
import { LibraryDataServerHub } from "./DataHubs/libraryDataServerHub";
import { ASLControlServerHub } from "./ControlHubs/aslControlServerHub";

let SERVER_ROOT = "http://localhost:5003";

export var vikDataServerHub = new VIKDataServerHub(SERVER_ROOT);
export var libraryDataServerHub = new LibraryDataServerHub(SERVER_ROOT);
export var aslControlServerHub = new ASLControlServerHub(SERVER_ROOT);