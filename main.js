// {
//     "easyAsEddi": false,
//     "easyAsShit": true,
//     "JuniorKitchenDeveloper": false,
//     "SeniorKitchenDeveloper": false,
//     "KitchenImpossible": false
// },

let recipes = [{
        name: "Gnocchi on tomato-cream sauce with mozzarella and basil",
        tags: ["italien", "Eddiable", "hungry as hell"],
        time: 10,
        price: 1,
        difficulty: 2,
        dishWashingLevel: 1,
        rating: 1,
        leftovers: 0,
        vegan: false,
        vegetarian: true,
        minPersons: 4,
        ingredients: [{
                name: "Gnocchi",
                amount: {
                    number: 500,
                    unit: "gr"
                }
            },
            {
                name: "fresh coctail tomatos",
                amount: {
                    number: 6,
                    unit: "pcs"
                }
            },
            {
                name: "tomato paste",
                amount: {
                    number: 2,
                    unit: "hts"
                }
            },
            {
                name: "tomato pesto",
                amount: {
                    number: 100,
                    unit: "ml"
                }
            },
            {
                name: "cream",
                amount: {
                    number: 200,
                    unit: "ml"
                }
            },
            {
                name: "mozzarella",
                amount: {
                    number: 2,
                    unit: "pcs"
                }
            },
            {
                name: "basil",
                amount: {
                    number: 60,
                    unit: "gr"
                }
            },
            {
                name: "pepper & salt",
                amount: {
                    number: 1,
                    unit: "feeling"
                }
            }
        ],
        cookingInstructions: [
            "Put tomato paste, tomato pesto and cream in a small pot and let it boil brefly. Afterwards, keep it cooking on the smallest level.",
            "While cutting the fresh coctail tomatos into quaters, boil about 2 L of water for the Gnocchis. Don#t forget to put salt in the water after it startet boiling.",
            "Cut mozzarella into small pieces and take off the basil lieves from the stalk.",
            "Put the fresh coctail tomatos in the sauce and the gnocchis in the water. The gnocchis are finished when swimming on the water surface.",
            "When the gnocchis are ready, pour off the water, spice up the sauce with a pinch of pepper & salt and serve the gnocchis with sauce as topping. Mozzarella and basil can be added optional."
        ]
    },
    {
        name: "Halumi Sandwich DELUXE",
        tags: ["quick & dirty", "light stuff"],
        time: 10,
        price: 2,
        difficulty: 3,
        dishWashingLevel: 2,
        rating: 5,
        leftovers: 1,
        vegan: false,
        vegetarian: true,
        minPersons: 4,
        ingredients: [{
                name: "french baguette",
                amount: {
                    number: 1,
                    unit: "pcs"
                }
            },
            {
                name: "salat leaves",
                amount: {
                    number: 8,
                    unit: "pcs"
                }
            },
            {
                name: "champignons",
                amount: {
                    number: 100,
                    unit: "gr"
                }
            },
            {
                name: "onion",
                amount: {
                    number: 2,
                    unit: "pcs"
                }
            },
            {
                name: "cucumber",
                amount: {
                    number: 0.5,
                    unit: "pcs"
                }
            },
            {
                name: "hamuli cheese",
                amount: {
                    number: 2,
                    unit: "pcs"
                }
            },
            {
                name: "blsamico sauce",
                amount: {
                    number: 1,
                    unit: "feeling"
                }
            },
            {
                name: "curry ketchup",
                amount: {
                    number: 1,
                    unit: "feeling"
                }
            }
        ],
        cookingInstructions: [
            "Slice the champignons and onions and fry them in a pan until to the wanted consistency",
            "Slice each halumi into 4 pieces and fry it in a second pan until it is light brown on both sides.",
            "Cut the french baguett into 4 pieces and those pieces into half (like a sandwich bread). Put 2 leaves of salat and some sclies cucumber on one side of the baguette.",
            "Put 2 slices of halumi, some champignons and onions on the other side of the baguette and add some curry ketchup and balsamico sauce.",
            "Put both sides together and enjoy the DELUXE sandwich."
        ]
    }
];


let listElement;
let recipeItemsName;
let recipeItemsTags;
let recipeItemsTime;
let recipeItemsPrice;
let recipeItemsDifficulty;
let recipeItemsDishWashingLevel;
let recipeItemsRating;
let recipeItemsLeftovers;
let recipeItemsVegan;
let recipeItemsVegetarian;
let recipeItemsMinPerson;
let recipeItemsIngredients;
let recipeItemsCookingInstructions;

let listIndex = 0;

recipes.forEach(function() {
    listIndex++;
    listElement = document.createElement("li");
    listElement.className = "recipes__list-element";

    recipeItemsName = document.createElement("li");
    recipeItemsName.id = "recipes__itemName-" + listIndex;
    recipeItemsName.className = "recipes__items";

    recipeItemsTime = document.createElement("li");
    recipeItemsTime.id = "recipes__itemTime-" + listIndex;
    recipeItemsTime.className = "recipes__items";

    recipeItemsTags = document.createElement("li");
    recipeItemsTags.id = "recipes__itemTags-" + listIndex;
    recipeItemsTags.className = "recipes__items";

    recipeItemsPrice = document.createElement("li");
    recipeItemsPrice.id = "recipes__itemPrice-" + listIndex;
    recipeItemsPrice.className = "recipes__items";

    recipeItemsDifficulty = document.createElement("li");
    recipeItemsDifficulty.id = "recipes__itemDifficulty-" + listIndex;
    recipeItemsDifficulty.className = "recipes__items";

    recipeItemsDishWashingLevel = document.createElement("li");
    recipeItemsDishWashingLevel.id = "recipes__itemDishWashingLevel-" + listIndex;
    recipeItemsDishWashingLevel.className = "recipes__items";

    recipeItemsRating = document.createElement("li");
    recipeItemsRating.id = "recipes__itemRating-" + listIndex;
    recipeItemsRating.className = "recipes__items";

    recipeItemsLeftovers = document.createElement("li");
    recipeItemsLeftovers.id = "recipes__itemLeftovers-" + listIndex;
    recipeItemsLeftovers.className = "recipes__items";

    recipeItemsVegan = document.createElement("li");
    recipeItemsVegan.id = "recipes__itemVegan-" + listIndex;
    recipeItemsVegan.className = "recipes__items";

    recipeItemsVegetarian = document.createElement("li");
    recipeItemsVegetarian.id = "recipes__itemVegetarian-" + listIndex;
    recipeItemsVegetarian.className = "recipes__items";

    recipeItemsMinPerson = document.createElement("li");
    recipeItemsMinPerson.id = "recipes__itemMinPerson-" + listIndex;
    recipeItemsMinPerson.className = "recipes__items";

    recipeItemsIngredients = document.createElement("li");
    recipeItemsIngredients.id = "recipes__itemIngredients-" + listIndex;
    recipeItemsIngredients.className = "recipes__items";

    recipeItemsCookingInstructions = document.createElement("li");
    recipeItemsCookingInstructions.id = "recipes__itemCookingInstructions-" + listIndex;
    recipeItemsCookingInstructions.className = "recipes__items";

    let indexReduce = listIndex - 1;

    listElement.appendChild(recipeItemsName);
    listElement.appendChild(recipeItemsTime);
    listElement.appendChild(recipeItemsTags);
    listElement.appendChild(recipeItemsPrice);
    listElement.appendChild(recipeItemsDifficulty);
    listElement.appendChild(recipeItemsDishWashingLevel);
    listElement.appendChild(recipeItemsRating);
    listElement.appendChild(recipeItemsLeftovers);
    listElement.appendChild(recipeItemsVegan);
    listElement.appendChild(recipeItemsVegetarian);
    listElement.appendChild(recipeItemsMinPerson);
    listElement.appendChild(recipeItemsIngredients);
    listElement.appendChild(recipeItemsCookingInstructions);

    document.getElementById("recipes__list").appendChild(listElement);

    document.getElementById("recipes__itemName-" + listIndex).innerHTML = "Name: " + recipes[indexReduce].name;
    document.getElementById("recipes__itemTags-" + listIndex).innerHTML = "Tags: " + recipes[indexReduce].tags;
    document.getElementById("recipes__itemTime-" + listIndex).innerHTML = "Time: " + recipes[indexReduce].time;
    document.getElementById("recipes__itemPrice-" + listIndex).innerHTML = "$-$$$: " + recipes[indexReduce].price;
    document.getElementById("recipes__itemDifficulty-" + listIndex).innerHTML = "Difficulty (1-5): " + recipes[indexReduce].difficulty;
    document.getElementById("recipes__itemDishWashingLevel-" + listIndex).innerHTML = "Dish washing level (1-5): " + recipes[indexReduce].dishWashingLevel;
    document.getElementById("recipes__itemRating-" + listIndex).innerHTML = "Rating (1-5): " + recipes[indexReduce].Rating;
    document.getElementById("recipes__itemLeftovers-" + listIndex).innerHTML = "Leftovers (1-5): " + recipes[indexReduce].leftovers;
    document.getElementById("recipes__itemVegan-" + listIndex).innerHTML = "Vegan: " + recipes[indexReduce].vegan;
    document.getElementById("recipes__itemVegetarian-" + listIndex).innerHTML = "Vegetarian: " + recipes[indexReduce].vegetarian;
    document.getElementById("recipes__itemMinPerson-" + listIndex).innerHTML = "Min persons: " + recipes[indexReduce].minPersons;

    let ingredients0 = `${recipes[indexReduce].ingredients[0].amount.number} ${recipes[indexReduce].ingredients[0].amount.unit} ${recipes[indexReduce].ingredients[0].name}`;
    let ingredients1 = `${recipes[indexReduce].ingredients[1].amount.number} ${recipes[indexReduce].ingredients[1].amount.unit} ${recipes[indexReduce].ingredients[1].name}`;
    let ingredients2 = `${recipes[indexReduce].ingredients[2].amount.number} ${recipes[indexReduce].ingredients[2].amount.unit} ${recipes[indexReduce].ingredients[2].name}`;
    let ingredients3 = `${recipes[indexReduce].ingredients[3].amount.number} ${recipes[indexReduce].ingredients[3].amount.unit} ${recipes[indexReduce].ingredients[3].name}`;
    let ingredients4 = `${recipes[indexReduce].ingredients[4].amount.number} ${recipes[indexReduce].ingredients[4].amount.unit} ${recipes[indexReduce].ingredients[4].name}`;
    let ingredients5 = `${recipes[indexReduce].ingredients[5].amount.number} ${recipes[indexReduce].ingredients[5].amount.unit} ${recipes[indexReduce].ingredients[5].name}`;
    let ingredients6 = `${recipes[indexReduce].ingredients[6].amount.number} ${recipes[indexReduce].ingredients[6].amount.unit} ${recipes[indexReduce].ingredients[6].name}`;

    document.getElementById("recipes__itemIngredients-" + listIndex).innerHTML = "Ingredients:" + `
        <br> - ${ingredients0} 
        <br> - ${ingredients1} 
        <br> - ${ingredients2} 
        <br> - ${ingredients3} 
        <br> - ${ingredients4} 
        <br> - ${ingredients5} 
        <br> - ${ingredients6}
        `;

    document.getElementById("recipes__itemCookingInstructions-" + listIndex).innerHTML = "Cooking instructions:" + `
        <br> Step 1: ${recipes[indexReduce].cookingInstructions[0]} 
        <br> Step 2: ${recipes[indexReduce].cookingInstructions[1]} 
        <br> Step 3: ${recipes[indexReduce].cookingInstructions[2]} 
        <br> Step 4: ${recipes[indexReduce].cookingInstructions[3]} 
        <br> Step 5: ${recipes[indexReduce].cookingInstructions[4]}
        `;
});