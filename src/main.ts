import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Nhan's Game";

document.title = gameName;

const mainbt: HTMLButtonElement = document.createElement("button");
mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.textContent = "click the Christmas Tree 🎄";

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
app.append(mainbt);
