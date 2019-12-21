
import { RespisimEventBroadcastHub } from './Base/RespisimEventBroadcastHub';
import { VR3ControlServerHub } from "./ServerHubs/vr3ControlServerHub";
import { VIKDataServerHub } from "./ServerHubs/VIKDataServerHub";
import { VitalsDataServerHub } from "./ServerHubs/vitalsDataServerHub";

import { LibraryDataServerHub } from "./ServerHubs/LibraryDataServerHub";
import { LibraryDataRespisimHub } from "./RespisimHubs/libraryDataRespisimHub";

import { ASLControlServerHub } from "./ServerHubs/ASLControlServerHub";
import { ASLControlRespisimHub } from "./RespisimHubs/ASLControlRespisimHub";

let SERVER_ROOT = "http://localhost:5003";
var RespisimHub = new RespisimEventBroadcastHub();

export var hubs =
{
    //aslControlServerHub: new ASLControlServerHub(SERVER_ROOT, RespisimHub),
    //vr3ControlServerHub: new VR3ControlServerHub(SERVER_ROOT, RespisimHub),
    //vikDataServerHub: new VIKDataServerHub(SERVER_ROOT, RespisimHub),
    //vitalsDataServerHub: new VitalsDataServerHub(SERVER_ROOT, RespisimHub),
    LibraryDataServerHub: new LibraryDataServerHub(SERVER_ROOT, RespisimHub),
    LibraryDataRespisimHub: new LibraryDataRespisimHub(),
    ASLControlServerHub: new ASLControlServerHub(SERVER_ROOT, RespisimHub),
    ASLControlRespisimHub: new ASLControlRespisimHub(),
}