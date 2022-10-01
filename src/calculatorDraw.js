export const display = document.createElement("div");
export const btnArea = document.createElement("div");

const container = document.querySelector(".container");
const calcul = document.createElement("div");

calcul.classList.add("calc");
display.classList.add("display");
btnArea.classList.add("btn-area");

container.appendChild(calcul);
calcul.appendChild(display);
calcul.appendChild(btnArea);
