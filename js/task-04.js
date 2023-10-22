const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let currentValue = 0;

decrementEl.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementEl.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
