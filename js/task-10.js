function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${width}px`;
    boxEl.style.height = `${height}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    width += 10;
    height += 10;

    boxesEl.appendChild(boxEl);
  }
}

createBtn.addEventListener("click", () => {
  const amount = Number(inputEl.value);

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
});

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
