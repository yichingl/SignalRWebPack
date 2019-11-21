import "../css/main.css";
import { global_obj } from "./testGlobal";
import { testRsHub } from "./Hubs/test_RsMainHub";


const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
const username = new Date().getTime();



testRsHub.connection.on("messageReceived", (username: string, message: string) => {
    let messageContainer = document.createElement("div");

    messageContainer.innerHTML =
        `<div class="message-author">${username}</div><div>${message}</div>`;

    divMessages.appendChild(messageContainer);
    divMessages.scrollTop = divMessages.scrollHeight;
});

testRsHub.connection.start().catch(err => document.write(err));

tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
    if (e.keyCode === 13) {
        console.log("sending message...")
        send();
    }
});

btnSend.addEventListener("click", send);

function send() {
    testRsHub.connection.send("newMessage", username, tbMessage.value)
        .then(() => tbMessage.value = "");
}

console.log("Global num2: " + global_obj.printValue());
console.log("exporting to library...");

export {
    testRsHub,
    global_obj
}