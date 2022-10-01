import "./style.css";
import { buttons, btnName } from "./src/buttonsData.js";
import { display, btnArea } from "./src/calculatorDraw.js";
import equal from "./src/calculatorEngine/calculation.js";

let displayString = "";

function refreshDisplay() {
  if (displayString || displayString === "") {
    display.textContent = displayString;
  } else {
    displayString = "Ошибка";
    refreshDisplay();
    displayString = "";
  }
}

buttons.forEach((el) => {
  const btn = document.createElement("div");

  btn.classList.add("button");

  btn.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="box">
        ${el.text}
        </div>
        `
  );
  if (el.color) {
    btn.style.background = "#53d5ea";
  }
  btn.addEventListener("click", async () => {
    console.log(displayString);
    if (el.text !== "=" && el.text !== "C" && el.text !== "CE") {
      displayString += el.text;
      refreshDisplay();
    } else if (el.text === "=") {
      if (displayString !== "") {
        displayString = await equal(displayString);
        await refreshDisplay();
      }
    } else if (el.text === "C") {
      if (displayString !== "") {
        displayString = "";
        refreshDisplay();
      }
    } else if (el.text === "CE") {
      if (displayString !== "") {
        displayString = displayString.slice(0, displayString.length - 1);
        refreshDisplay();
      }
    }
  });

  btnArea.appendChild(btn);
});

document.addEventListener("keydown", async (event) => {
  switch (true) {
    case event.key === "=" || event.key === "Enter":
      if (displayString !== "") {
        displayString = await equal(displayString);
        await refreshDisplay();
      }
      break;
    case event.key === "c":
      if (displayString !== "") {
        displayString = "";
        refreshDisplay();
      }
      break;
    case event.key === "Backspace" || event.key === "Delete":
      if (displayString !== "") {
        displayString = displayString.slice(0, displayString.length - 1);
        refreshDisplay();
      }
      break;
    case btnName.includes(event.key):
      displayString += event.key;
      refreshDisplay();
      break;
  }
});
