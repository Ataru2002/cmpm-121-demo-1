import "./style.css";

//setup divs
const app: HTMLDivElement = document.querySelector("#app")!;
const counter: HTMLDivElement = document.querySelector("#counter")!;

const gameName = "Christmas Breezer";

//variables
let cnt: number = 0.0;
let growth: number = 0;
let lastMill: number = 0;
let upgradecnt1: number = 0;
let upgradecnt2: number = 0;
let upgradecnt3: number = 0;
let price1: number = 10;
let price2: number = 100;
let price3: number = 1000;
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
  cnt -= price1;
  growth += 0.1;
  upgradecnt1++;
  price1 *= 1.15;
  growbt.textContent = "Regular Ornament (" + price1.toFixed(2) + " Christmas): +0.1 Christmas/Year"; 
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade1.innerHTML = "Regular Ornament purchased: " + upgradecnt1.toString();
});

growbt2.addEventListener("click", function () {
  cnt -= price2;
  growth += 2;
  upgradecnt2++;
  price2 *= 1.15;
  growbt2.textContent =
    "Super Ornament (" +
    price2.toFixed(2) +
    " Christmas): +2 Christmas/Year"; 
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade2.innerHTML = "Super Ornament purchased: " + upgradecnt2.toString();
});

growbt3.addEventListener("click", function () {
  cnt -= price3;
  growth += 50;
  upgradecnt3++;
  price3 *= 1.15;
  growbt3.textContent =
    "Ultra Ornament (" + price3.toFixed(2) + " Christmas): +50 Christmas/Year"; 
  countrate.innerHTML =
    "Christmas pass rate: " + growth.toFixed(1) + " Christmas/Year";
  upgrade3.innerHTML = "Ultra Ornament purchased: " + upgradecnt3.toString();
});

//Update runners
requestAnimationFrame(adder);
requestAnimationFrame(checker);

//Displaying
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
  if (cnt >= price1) {
    growbt.disabled = false;
  } else {
    growbt.disabled = true;
  }
  if (cnt >= price2) {
    growbt2.disabled = false;
  } else {
    growbt2.disabled = true;
  }
  if (cnt >= price3) {
    growbt3.disabled = false;
  } else {
    growbt3.disabled = true;
  }
  requestAnimationFrame(checker);
}
