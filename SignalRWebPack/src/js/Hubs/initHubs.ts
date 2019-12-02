
import { ASLControlServerHub } from "./ServerHubs/ASLControlServerHub";

import { VIKDataServerHub } from "./ServerHubs/VIKDataServerHub";
import { VitalsDataServerHub } from "./ServerHubs/vitalsDataServerHub";
import { LibraryDataServerHub } from "./ServerHubs/LibraryDataServerHub";

let SERVER_ROOT = "http://localhost:5003";

export var aslControlServerHub = new ASLControlServerHub(SERVER_ROOT);

export var vikDataServerHub = new VIKDataServerHub(SERVER_ROOT);
export var vitalsDataServerHub = new VitalsDataServerHub(SERVER_ROOT);
export var libraryDataServerHub = new LibraryDataServerHub(SERVER_ROOT);