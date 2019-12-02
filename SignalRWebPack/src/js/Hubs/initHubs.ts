
import { ASLControlServerHub } from "./ServerHubs/ASLControlServerHub";
import { VR3ControlServerHub } from "./ServerHubs/vr3ControlServerHub";

import { VIKDataServerHub } from "./ServerHubs/VIKDataServerHub";
import { VitalsDataServerHub } from "./ServerHubs/vitalsDataServerHub";
import { LibraryDataServerHub } from "./ServerHubs/LibraryDataServerHub";

let SERVER_ROOT = "http://localhost:5003";

export var hubs =
{
    aslControlServerHub: new ASLControlServerHub(SERVER_ROOT),
    vr3ControlServerHub: new VR3ControlServerHub(SERVER_ROOT),
    vikDataServerHub: new VIKDataServerHub(SERVER_ROOT),
    vitalsDataServerHub: new VitalsDataServerHub(SERVER_ROOT),
    libraryDataServerHub: new LibraryDataServerHub(SERVER_ROOT)
}