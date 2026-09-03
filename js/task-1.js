const categoriesEl = document.querySelectorAll("#categories > li.item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelector("ul").children.length;

  console.log(`Category: ${title}, Elements: ${elements}`);
});