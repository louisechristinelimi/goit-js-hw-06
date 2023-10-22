const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  const fontSize = inputEl.value;
  textEl.style.fontSize = `${fontSize}px`;
});
