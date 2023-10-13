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
  description: string;
}
const availableItems: Item[] = [
  {
    name: "Regular Ornament",
    cost: 10,
    rate: 0.1,
    upgradecnt: 0,
    description: "An ornament you buy at a dollar tree",
  },
  {
    name: "Super Ornament",
    cost: 100,
    rate: 2,
    upgradecnt: 0,
    description: "An ornament you buy at supermarkets",
  },
  {
    name: "Ultra Ornament",
    cost: 1000,
    rate: 50,
    upgradecnt: 0,
    description: "An ornament you buy at specialized christmas stores",
  },
  {
    name: "Santa Figurine",
    cost: 3000,
    rate: 100,
    upgradecnt: 0,
    description: "A special item you can only buy from Santa himself",
  },
  {
    name: "Christmas Tree Sap",
    cost: 5000,
    rate: 500,
    upgradecnt: 0,
    description: "An item collected only from the alpha Christmas Tree",
  },
];

let cnt: number = 0.0;
let growth: number = 0;
let lastMill: number = 0;
document.title = gameName;

//button names
const mainbt: HTMLButtonElement = document.createElement("button");
const growbts: HTMLButtonElement[] = [
  document.createElement("button"),
  document.createElement("button"),
  document.createElement("button"),
  document.createElement("button"),
  document.createElement("button"),
];

mainbt.className = "mainButton";
mainbt.type = "button";
mainbt.innerHTML = `click the Christmas Tree 🎄`;

for (let i = 0; i < 5; i++) {
  growbts[i].className = "growButton";
  growbts[i].type = "button";
  growbts[i].innerHTML = messageGen(availableItems[i]);
  growbts[i].disabled = true;
}

//Texts setups
let countdisplay = document.createElement("h2");
let countrate = document.createElement("h2.1");
const upgrades: HTMLElement[] = [
  document.createElement("h2.2"),
  document.createElement("h2.2"),
  document.createElement("h2.2"),
  document.createElement("h2.2"),
  document.createElement("h2.2"),
];

countdisplay.innerHTML = `Number of christmas has passed: 0`;
countrate.innerHTML = "Christmas pass rate: 0 Christmas/Year";
for (let i = 0; i < 5; i++) {
  upgrades[i].innerHTML = availableItems[i].name + " purchased: 0";
}

//button listeners
mainbt.addEventListener("click", function () {
  cnt++;
  countdisplay.innerHTML =
    "Number of christmas has passed: " + Math.round(cnt).toString();
});

for (let i = 0; i < 5; i++) {
  growbts[i].addEventListener("click", function () {
    cnt -= availableItems[i].cost;
    growth += availableItems[i].rate;
    availableItems[i].upgradecnt++;
    availableItems[i].cost *= 1.15;
    growbts[i].innerHTML = messageGen(availableItems[i]);
    countrate.innerHTML =
      "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
    upgrades[i].innerHTML =
      availableItems[i].name +
      " purchased: " +
      availableItems[i].upgradecnt.toString();
  });
}

//Update runners
requestAnimationFrame(adder);
requestAnimationFrame(checker);

//Displaying the text and buttons
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);
app.append(mainbt);
for (let i = 0; i < 5; i++) {
  app.append(growbts[i]);
}
counter.append(countdisplay);
counter.append(countrate);
let linebr = document.createElement("br");
for (let i = 0; i < 5; i++) {
  linebr = document.createElement("br");
  counter.appendChild(linebr);
  counter.append(upgrades[i]);
}

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
  for (let i = 0; i < 5; i++) {
    growbts[i].disabled = cnt < availableItems[i].cost;
  }
  requestAnimationFrame(checker);
}

function messageGen(Item: Item) {
  return (
    Item.name +
    `<br> (` +
    Item.cost.toFixed(2) +
    ` Christmas): +` +
    Item.rate +
    ` Christmas/Year <br>` +
    Item.description
  );
}
