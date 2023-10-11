import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;


const gameName = "Nhan's Game";

let cnt: number = 0;

document.title = gameName;

const mainbt: HTMLButtonElement = document.createElement("button");
mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.textContent = "click the Christmas Tree 🎄";

let countdisplay = document.createElement("h2");
countdisplay.innerHTML = "Number of christmas has passed: 0"
mainbt.addEventListener("click", function () {
  cnt++;
  countdisplay.innerHTML = "Number of christmas has passed: " + cnt.toString();
});
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
app.append(mainbt);
counter.append(countdisplay);

