import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

export var vikHub = new RsVikHub("/hub");
export var libraryHub = new RsLibraryHub("/hub");

console.info("Vik Hub Connected: " + vikHub.connected);
console.info("Library Hub Connected: " + libraryHub.connected);


libraryHub.update();