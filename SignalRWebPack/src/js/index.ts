import "../css/main.css";
import { aslControlServerHub } from "./Hubs/initHubs";
import { aslControlUIHub } from "./Hubs/initHubs";

import { vikDataServerHub } from "./Hubs/initHubs";
import { libraryDataServerHub } from "./Hubs/initHubs";

//console.log("TESTING: calling new message");
//aslControlUIHub.connection.send("newMessage");

export {
    aslControlServerHub,
    aslControlUIHub,
    vikDataServerHub,
    libraryDataServerHub,
}