const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients: DONE
// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

let i = 0;
while (i < ingredients.length) {
  i++;
  console.log(ingredients[i]);
}

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

ingredients.reverse().forEach(x => console.log(x))
