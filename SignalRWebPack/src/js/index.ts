import "../css/main.css";
import { testRsHub } from "./Hubs/test_RsMainHub";
import { vikHub } from "./Hubs/RsMainHub";
import { libraryHub } from "./Hubs/RsMainHub";

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
const username = new Date().getTime();

/*

testRsHub.getConnection().on("messageReceived", (username: string, message: string) => {
    let messageContainer = document.createElement("div");

    messageContainer.innerHTML =
        `<div class="message-author">${username}</div><div>${message}</div>`;

    divMessages.appendChild(messageContainer);
    divMessages.scrollTop = divMessages.scrollHeight;
});

testRsHub.getConnection().start().catch(err => document.write(err));

tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
        console.log("sending message...")
        send();
    }
});

btnSend.addEventListener("click", send);

function send() {
    testRsHub.getConnection().send("newMessage", username, tbMessage.value)
        .then(() => tbMessage.value = "");
}
*/

export {
    testRsHub,
    vikHub,
    libraryHub
}