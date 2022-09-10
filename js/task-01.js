const categoriesEl = document.querySelector("#categories");

const allItemCategoris = document.querySelectorAll("li.item");
console.log(allItemCategoris);

allItemCategoris.forEach((element) => {
  console.log(element[element.length-1]);
});
