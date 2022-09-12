const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

// ------------------------MAP--------------------

// const ingredientItem = ingredients.map((ingredient) => {
//   const addItemIngredients = document.createElement("li");

//   addItemIngredients.classList.add("nav-item");

//   addItemIngredients.textContent = ingredient;
//   return addItemIngredients;
// });

// ingredientsEl.append(...ingredientItem);

// ----------------------Function-------------------------
const addItemIngredients = (ingredients) => {
  return ingredients.map((ingredient) => {
      const addItemIngredients = document.createElement("li");
    
      addItemIngredients.classList.add("nav-item");
    
      addItemIngredients.textContent = ingredient;
      console.log(addItemIngredients);
      return addItemIngredients;
});
}
const elements = addItemIngredients(ingredients);
ingredientsEl.append(...elements);

// ----------------------FOR EACH------------------------

// const ingredientItem = [];

// ingredients.forEach(function (ingredient, idx) {
//   // console.log(ingredient);
//   const option = ingredients[idx];

// ingredientItem.push(addItemIngredients);
// })

// console.log(ingredientItem);

// const ingredientsEl = document.querySelector
// ('#ingredients');

// ingredientsEl.append(...ingredientItem);
