
import { ASLControlServerHub } from "./ControlHubs/ASLControlServerHub";

import { VIKDataServerHub } from "./DataHubs/VIKDataServerHub";
import { LibraryDataServerHub } from "./DataHubs/LibraryDataServerHub";

let SERVER_ROOT = "http://localhost:5003";

export var aslControlServerHub = new ASLControlServerHub(SERVER_ROOT);

export var vikDataServerHub = new VIKDataServerHub(SERVER_ROOT);
export var libraryDataServerHub = new LibraryDataServerHub(SERVER_ROOT);