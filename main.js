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
        ingredients: [
            "500 gr Gnocchi",
            "6 pcs fresh coctail tomatos",
            "2 HTS tomato paste",
            "100 ml tomato pesto",
            "200 ml cream",
            "2 pcs mozzarella",
            "60 gr basil",
            "1 feeling of pepper & salt"
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
        "name": "Swabian pockets (Mauldäschle) with eggs",
        "tags": ["Swabian", "Eddiable", "basics"],
        "time": 10,
        "price": 1,
        "difficulty": 1,
        "dishWashingLevel": 1,
        "rating": 2,
        "leftovers": 1,
        "vegan": false,
        "vegetarian": false,
        "minPersons": 4,
        ingredients: [
            "1 kg Swabian pockets (Mauldäschle)",
            "2 pcs onions",
            "6 pcs eggs",
            "150 ml milk",
            "2 pcs spring onions",
            "1 feeling pepper & salt"
        ],
        cookingInstructions: [
            "Cut the swabian pockets into 4 thick slices.",
            "Fry the swabian pockets in a pan until they are nearly done.",
            "Cut all onions into small pieces and add the normal to the swabian pockets and fry them until the onions are glassy.",
            "Squirl the eggs, milk, spring onions, salt & pepper heavily until the surface is covered with bubbles.",
            "Pure the eggs into the pan with onions and fry everything together until the egg is done."
        ]
    },
    {
        name: "Halloumi Sandwich DELUXE",
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
        ingredients: [
            "1 pcs french baguette",
            "8 pcs salat leaves",
            "100 gr champignons",
            "2 pcs onion",
            "0.5 pcs cucumber",
            "2 pcs halloumi cheese",
            "1 feeling balsamico sauce",
            "1 feeling curry ketchup"
        ],
        cookingInstructions: [
            "Slice the champignons and onions and fry them in a pan until to the wanted consistency",
            "Slice each halloumi into 4 pieces and fry it in a second pan until it is light brown on both sides.",
            "Cut the french baguett into 4 pieces and those pieces into half (like a sandwich bread). Put 2 leaves of salat and some sclies cucumber on one side of the baguette.",
            "Put 2 slices of halloumi, some champignons and onions on the other side of the baguette and add some curry ketchup and balsamico sauce.",
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

            document.getElementById("recipes__itemTags-" + listIndex).innerHTML = "<b>Tags: </b>" + `
                ${recipes[indexReduce].tags[0] ? `<br> - ${recipes[indexReduce].tags[0]}` : ''}
                ${recipes[indexReduce].tags[1] ? `<br> - ${recipes[indexReduce].tags[1]}` : ''}
                ${recipes[indexReduce].tags[2] ? `<br> - ${recipes[indexReduce].tags[2]}` : ''}
                ${recipes[indexReduce].tags[3] ? `<br> - ${recipes[indexReduce].tags[3]}` : ''}
                ${recipes[indexReduce].tags[4] ? `<br> - ${recipes[indexReduce].tags[4]}` : ''}
            `;


            document.getElementById("recipes__itemName-" + listIndex).innerHTML = "<b>Name: </b>" + recipes[indexReduce].name;
            document.getElementById("recipes__itemTime-" + listIndex).innerHTML = "<b>Time: </b>" + recipes[indexReduce].time;
            document.getElementById("recipes__itemPrice-" + listIndex).innerHTML = "<b>$-$$$: </b>" + recipes[indexReduce].price;
            document.getElementById("recipes__itemDifficulty-" + listIndex).innerHTML = "<b>Difficulty (1-5): </b>" + recipes[indexReduce].difficulty;
            document.getElementById("recipes__itemDishWashingLevel-" + listIndex).innerHTML = "<b>Dish washing level (1-5): </b>" + recipes[indexReduce].dishWashingLevel;
            document.getElementById("recipes__itemRating-" + listIndex).innerHTML = "<b>Rating (1-5): </b>" + recipes[indexReduce].rating;
            document.getElementById("recipes__itemLeftovers-" + listIndex).innerHTML = "<b>Leftovers (1-5): </b>" + recipes[indexReduce].leftovers;
            document.getElementById("recipes__itemVegan-" + listIndex).innerHTML = "<b>Vegan: </b>" + recipes[indexReduce].vegan;
            document.getElementById("recipes__itemVegetarian-" + listIndex).innerHTML = "<b>Vegetarian: </b>" + recipes[indexReduce].vegetarian;
            document.getElementById("recipes__itemMinPerson-" + listIndex).innerHTML = "<b>Min persons: </b>" + recipes[indexReduce].minPersons;

            // let ingredients0 = `${recipes[indexReduce].ingredients[0].amount.number} ${recipes[indexReduce].ingredients[0].amount.unit} ${recipes[indexReduce].ingredients[0].name}`;
            // let ingredients1 = `${recipes[indexReduce].ingredients[1].amount.number} ${recipes[indexReduce].ingredients[1].amount.unit} ${recipes[indexReduce].ingredients[1].name}`;
            // let ingredients2 = `${recipes[indexReduce].ingredients[2].amount.number} ${recipes[indexReduce].ingredients[2].amount.unit} ${recipes[indexReduce].ingredients[2].name}`;
            // let ingredients3 = `${recipes[indexReduce].ingredients[3].amount.number} ${recipes[indexReduce].ingredients[3].amount.unit} ${recipes[indexReduce].ingredients[3].name}`;
            // let ingredients4 = `${recipes[indexReduce].ingredients[4].amount.number} ${recipes[indexReduce].ingredients[4].amount.unit} ${recipes[indexReduce].ingredients[4].name}`;
            // let ingredients5 = `${recipes[indexReduce].ingredients[5].amount.number} ${recipes[indexReduce].ingredients[5].amount.unit} ${recipes[indexReduce].ingredients[5].name}`;
            // let ingredients6 = `${recipes[indexReduce].ingredients[6].amount.number} ${recipes[indexReduce].ingredients[6].amount.unit} ${recipes[indexReduce].ingredients[6].name}`;

            // document.getElementById("recipes__itemIngredients-" + listIndex).innerHTML = "Ingredients:" + `
            //     <br> - ${ingredients0} 
            //     <br> - ${ingredients1} 
            //     <br> - ${ingredients2} 
            //     <br> - ${ingredients3} 
            //     <br> - ${ingredients4} 
            //     <br> - ${ingredients5} 
            //     <br> - ${ingredients6}
            //     `;

            // let ingredientsIndex = 0;

            // function createIngredients() {
            //     if (ingredientsIndex < recipes[indexReduce].ingredients.length) {
            //         document.getElementById("recipes__itemIngredients-" + listIndex).innerHTML = "Ingredients:" + `
            //         <br> ${recipes[indexReduce].ingredients[ingredientsIndex]}`;
            //         ingredientsIndex++;
            //     } else {
            //         console.log(recipes[indexReduce].ingredients.length);
            //     }
            // }
            // createIngredients();

            document.getElementById("recipes__itemIngredients-" + listIndex).innerHTML = "<b>Ingredients:</b>" + `
                ${recipes[indexReduce].ingredients[0] ? `<br> -> ${recipes[indexReduce].ingredients[0]}` : ''}
                ${recipes[indexReduce].ingredients[1] ? `<br> -> ${recipes[indexReduce].ingredients[1]}` : ''}
                ${recipes[indexReduce].ingredients[2] ? `<br> -> ${recipes[indexReduce].ingredients[2]}` : ''}
                ${recipes[indexReduce].ingredients[3] ? `<br> -> ${recipes[indexReduce].ingredients[3]}` : ''}
                ${recipes[indexReduce].ingredients[4] ? `<br> -> ${recipes[indexReduce].ingredients[4]}` : ''}
                ${recipes[indexReduce].ingredients[5] ? `<br> -> ${recipes[indexReduce].ingredients[5]}` : ''}
                ${recipes[indexReduce].ingredients[6] ? `<br> -> ${recipes[indexReduce].ingredients[6]}` : ''}
                ${recipes[indexReduce].ingredients[7] ? `<br> -> ${recipes[indexReduce].ingredients[7]}` : ''}
                ${recipes[indexReduce].ingredients[8] ? `<br> -> ${recipes[indexReduce].ingredients[8]}` : ''}
                ${recipes[indexReduce].ingredients[9] ? `<br> -> ${recipes[indexReduce].ingredients[9]}` : ''}
                ${recipes[indexReduce].ingredients[10] ? `<br> -> ${recipes[indexReduce].ingredients[10]}` : ''}
                ${recipes[indexReduce].ingredients[11] ? `<br> -> ${recipes[indexReduce].ingredients[11]}` : ''}
                ${recipes[indexReduce].ingredients[12] ? `<br> -> ${recipes[indexReduce].ingredients[12]}` : ''}
                ${recipes[indexReduce].ingredients[13] ? `<br> -> ${recipes[indexReduce].ingredients[13]}` : ''}
                ${recipes[indexReduce].ingredients[14] ? `<br> -> ${recipes[indexReduce].ingredients[14]}` : ''}
                `;
    document.getElementById("recipes__itemCookingInstructions-" + listIndex).innerHTML = "<b>Cooking instructions:</b>" + `
        <br> <b>Step 1:</b> ${recipes[indexReduce].cookingInstructions[0]} 
        <br> <b>Step 2:</b> ${recipes[indexReduce].cookingInstructions[1]} 
        <br> <b>Step 3:</b> ${recipes[indexReduce].cookingInstructions[2]} 
        <br> <b>Step 4:</b> ${recipes[indexReduce].cookingInstructions[3]} 
        <br> <b>Step 5:</b> ${recipes[indexReduce].cookingInstructions[4]}
        `;
});