import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;

const gameName = "Nhan's Game";

let cnt: number = 0.0;
let curFPS: number;

const getFPS = () =>
  new Promise((resolve) =>
    requestAnimationFrame((t1) =>
      requestAnimationFrame((t2) => resolve(1000 / (t2 - t1))),
    ),
  );

document.title = gameName;

const mainbt: HTMLButtonElement = document.createElement("button");
mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.textContent = "click the Christmas Tree 🎄";

let countdisplay = document.createElement("h2");
countdisplay.innerHTML = "Number of christmas has passed: 0";
mainbt.addEventListener("click", function () {
  cnt++;
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
});

requestAnimationFrame(adder);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
app.append(mainbt);
counter.append(countdisplay);

function adder() {
  getFPS().then((result) => {
    curFPS = result;
    cnt += 1 / curFPS;
  });
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
    requestAnimationFrame(adder);
}
