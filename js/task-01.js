const list = document.querySelector("#categories");
const childrenListCount = list.children.length;

console.log("Number of categories:", childrenListCount);

const listItems = document.querySelectorAll(".item");

listItems.forEach((listItem) => {
  console.log(`Category: ${listItem.querySelector("h2").textContent}`);
  console.log("Elements:", listItem.querySelectorAll("li").length);
});
