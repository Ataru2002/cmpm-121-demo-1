import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;

const gameName = "Nhan's Game";

let cnt: number = 0.0;
let growth: number = 0;
let curFPS: number;

const getFPS = () =>
  requestAnimationFrame((t1) =>
    requestAnimationFrame((t2) => {
      curFPS = 1000 / (t2 - t1);
      cnt += (growth) / curFPS;
    }),
  );



document.title = gameName;

const mainbt: HTMLButtonElement = document.createElement("button");
const growbt: HTMLButtonElement = document.createElement("button");
mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.textContent = "click the Christmas Tree 🎄";

growbt.className = "growButton";
growbt.type = "button";
growbt.textContent = "purchase upgrade";
growbt.disabled = true;


let countdisplay = document.createElement("h2");
countdisplay.innerHTML = "Number of christmas has passed: 0";
mainbt.addEventListener("click", function () {
  cnt++;
  countdisplay.innerHTML = 
    "Number of christmas has passed: " + Math.round(cnt).toString();
  if (cnt >= 10) {
    growbt.disabled = false;
  } else {
    growbt.disabled = true;
  }
});

growbt.addEventListener("click", function () {
  cnt -= 10;
  growth++;
});



requestAnimationFrame(adder);
requestAnimationFrame(checker);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
app.append(mainbt);
app.append(growbt);
counter.append(countdisplay);

function adder() {
  getFPS();
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
  requestAnimationFrame(adder);
}

function checker(){
  if (cnt >= 10) {
    growbt.disabled = false;
  } else {
    growbt.disabled = true;
  }
  requestAnimationFrame(checker);
}