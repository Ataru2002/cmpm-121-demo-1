import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;

const gameName = "Nhan's Game";

let cnt: number = 0.0;
let growth: number = 0;
let lastMill: number = 0;
let upgradecnt1: number = 0;
let upgradecnt2: number = 0;
let upgradecnt3: number = 0;

document.title = gameName;

const mainbt: HTMLButtonElement = document.createElement("button");
const growbt: HTMLButtonElement = document.createElement("button");
const growbt2: HTMLButtonElement = document.createElement("button");
const growbt3: HTMLButtonElement = document.createElement("button");

mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.textContent = "click the Christmas Tree 🎄";

growbt.className = "growButton";
growbt.type = "button";
growbt.textContent = "Regular Ornament (10 Christmas): +0.1 Christmas / Year";
growbt.disabled = true;

growbt2.className = "growButton2";
growbt2.type = "button";
growbt2.textContent = "Super Ornament (100 Christmas): +2 Christmas / Year";
growbt2.disabled = true;

growbt3.className = "growButton";
growbt3.type = "button";
growbt3.textContent = "Ultra Ornament (1000 Christmas): +50 Christmas / Year";
growbt3.disabled = true;

let countdisplay = document.createElement("h2");
let countrate = document.createElement("h2.1");
let upgrade1 = document.createElement("h2.2");
let upgrade2 = document.createElement("h2.2");
let upgrade3 = document.createElement("h2.2");

countdisplay.innerHTML = "Number of christmas has passed: 0";
countrate.innerHTML = "Christmas pass rate: 0 Christmas/Year";
upgrade1.innerHTML = "Regular Ornament purchased: 0";
upgrade2.innerHTML = "Super Ornament purchased: 0";
upgrade3.innerHTML = "Ultra Ornament purchased: 0";

mainbt.addEventListener("click", function () {
  cnt++;
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
});

growbt.addEventListener("click", function () {
  cnt -= 10;
  growth += 0.1;
  upgradecnt1++;
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade1.innerHTML = "Regular Ornament purchased: " + upgradecnt1.toString();
});

growbt2.addEventListener("click", function () {
  cnt -= 100;
  growth += 2;
  upgradecnt2++;
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade2.innerHTML = "Regular Ornament purchased: " + upgradecnt2.toString();
});

growbt3.addEventListener("click", function () {
  cnt -= 1000;
  growth += 50;
  upgradecnt3++;
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade3.innerHTML = "Regular Ornament purchased: " + upgradecnt3.toString();
});

requestAnimationFrame(adder);
requestAnimationFrame(checker);

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
app.append(mainbt);
app.append(growbt);
app.append(growbt2);
app.append(growbt3);
counter.append(countdisplay);
counter.append(countrate);
let linebr = document.createElement("br");
counter.appendChild(linebr);
counter.append(upgrade1);
linebr = document.createElement("br");
counter.appendChild(linebr);
counter.append(upgrade2);
linebr = document.createElement("br");
counter.appendChild(linebr);
counter.append(upgrade3);

function adder(Millis: number) {
  const delta = Millis - lastMill;
  cnt += growth / (1000 / delta);
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
  lastMill = Millis;
  requestAnimationFrame(adder);
}

function checker() {
  if (cnt >= 10) {
    growbt.disabled = false;
  } else {
    growbt.disabled = true;
  }
  if (cnt >= 100) {
    growbt2.disabled = false;
  } else {
    growbt2.disabled = true;
  }
  if (cnt >= 1000) {
    growbt3.disabled = false;
  } else {
    growbt3.disabled = true;
  }
  requestAnimationFrame(checker);
}
