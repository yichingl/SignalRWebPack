import { RsVikHub } from "./RsVikHub";
import { RsLibraryHub } from "./RsLibraryHub";

export var vikHub = new RsVikHub("https://localhost:44395/");
export var libraryHub = new RsLibraryHub("https://localhost:44395/");

console.info("Vik Hub Connected: " + vikHub.connected);
console.info("Library Hub Connected: " + libraryHub.connected);


libraryHub.update();