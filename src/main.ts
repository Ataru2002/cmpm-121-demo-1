import "./style.css";

//setup divs
const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;

const gameName = "Christmas Breezer";

//variables
interface Item {
  name: string;
  cost: number;
  rate: number;
  upgradecnt: number;
}
const availableItems: Item[] = [
  {
    name: "Regular Ornament",
    cost: 10,
    rate: 0.1,
    upgradecnt: 0,
  },
  {
    name: "Super Ornament",
    cost: 100,
    rate: 2,
    upgradecnt: 0,
  },
  {
    name: "Ultra Ornament",
    cost: 1000,
    rate: 2,
    upgradecnt: 0,
  },
];

let cnt: number = 0.0;
let growth: number = 0;
let lastMill: number = 0;
document.title = gameName;

//button names
const mainbt: HTMLButtonElement = document.createElement("button");
const growbt: HTMLButtonElement = document.createElement("button");
const growbt2: HTMLButtonElement = document.createElement("button");
const growbt3: HTMLButtonElement = document.createElement("button");

mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.textContent = "click the Christmas Tree 🎄";

growbt.className = "growButton";
growbt.type = "button";
growbt.textContent =
  availableItems[0].name +
  " (" +
  availableItems[0].cost +
  " Christmas): " +
  "+" +
  availableItems[0].rate +
  " Christmas/Year";
growbt.disabled = true;

growbt2.className = "growButton2";
growbt2.type = "button";
growbt2.textContent =
  availableItems[1].name +
  " (" +
  availableItems[1].cost +
  " Christmas): " +
  "+" +
  availableItems[1].rate +
  " Christmas/Year";
growbt2.disabled = true;

growbt3.className = "growButton";
growbt3.type = "button";
growbt3.textContent =
  availableItems[2].name +
  " (" +
  availableItems[2].cost +
  " Christmas): " +
  "+" +
  availableItems[2].rate +
  " Christmas/Year";
growbt3.disabled = true;

//Texts setups
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

//button listeners
mainbt.addEventListener("click", function () {
  cnt++;
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
});

growbt.addEventListener("click", function () {
  cnt -= availableItems[0].cost;
  growth += 0.1;
  availableItems[0].upgradecnt++;
  availableItems[0].cost *= 1.15;
  growbt.textContent =
    availableItems[0].name +
    " (" +
    availableItems[0].cost.toFixed(2) +
    " Christmas): " +
    "+" +
    availableItems[0].rate +
    " Christmas/Year";
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade1.innerHTML =
    "Regular Ornament purchased: " + availableItems[0].upgradecnt.toString();
});

growbt2.addEventListener("click", function () {
  cnt -= availableItems[1].cost;
  growth += 2;
  availableItems[1].upgradecnt++;
  availableItems[1].cost *= 1.15;
  growbt2.textContent =
    availableItems[1].name +
    " (" +
    availableItems[1].cost.toFixed(2) +
    " Christmas): " +
    "+" +
    availableItems[1].rate +
    " Christmas/Year";
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade2.innerHTML =
    "Super Ornament purchased: " + availableItems[1].upgradecnt.toString();
});

growbt3.addEventListener("click", function () {
  cnt -= availableItems[2].cost;
  growth += 50;
  availableItems[2].upgradecnt++;
  availableItems[2].cost *= 1.15;
  growbt3.textContent =
    availableItems[2].name +
    " (" +
    availableItems[2].cost.toFixed(2) +
    " Christmas): " +
    "+" +
    availableItems[2].rate +
    " Christmas/Year";
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade3.innerHTML =
    "Ultra Ornament purchased: " + availableItems[2].upgradecnt.toString();
});

//Update runners
requestAnimationFrame(adder);
requestAnimationFrame(checker);

//Displaying the text and buttons
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

//add to the value
function adder(Millis: number) {
  const delta = Millis - lastMill;
  cnt += growth / (1000 / delta);
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
  lastMill = Millis;
  requestAnimationFrame(adder);
}

//Checking buttons enabling
function checker() {
  if (cnt >= availableItems[0].cost) {
    growbt.disabled = false;
  } else {
    growbt.disabled = true;
  }
  if (cnt >= availableItems[1].cost) {
    growbt2.disabled = false;
  } else {
    growbt2.disabled = true;
  }
  if (cnt >= availableItems[2].cost) {
    growbt3.disabled = false;
  } else {
    growbt3.disabled = true;
  }
  requestAnimationFrame(checker);
}
