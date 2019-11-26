
import { ASLControlServerHub } from "./ControlHubs/aslControlServerHub";
import { ASLControlUIHub } from "./ControlHubs/aslControlUIHub";

import { VIKDataServerHub } from "./DataHubs/vikDataServerHub";
import { LibraryDataServerHub } from "./DataHubs/libraryDataServerHub";

let RESPISIM_ROOT = "";
let SERVER_ROOT = "http://localhost:5003";

export var aslControlServerHub = new ASLControlServerHub(SERVER_ROOT);
export var aslControlUIHub = new ASLControlUIHub(RESPISIM_ROOT);

export var vikDataServerHub = new VIKDataServerHub(SERVER_ROOT);
export var libraryDataServerHub = new LibraryDataServerHub(SERVER_ROOT);