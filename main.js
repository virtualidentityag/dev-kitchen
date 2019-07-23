// {
//     "easyAsEddi": false,
//     "easyAsShit": true,
//     "JuniorKitchenDeveloper": false,
//     "SeniorKitchenDeveloper": false,
//     "KitchenImpossible": false
// },

let myJson = [{
    "name": "Gnocchi on tomato-cream sauce with mozzarella and basil",
    "tags": ["italien", "Eddiable", "hungry as hell"],
    "time": 10,
    "price": 1,
    "difficulty": 2,
    "dishWashingLevel": 1,
    "rating": 1,
    "leftovers": 0,
    "vegan": false,
    "vegetarian": true,
    "minPersons": 4,
    "ingredients": [{
            "name": "Gnocchi",
            "amount": {
                "number": 500,
                "unit": "gr"
            }
        },
        {
            "name": "fresh coctail tomatos",
            "amount": {
                "number": 6,
                "unit": "pcs"
            }
        },
        {
            "name": "tomato paste",
            "amount": {
                "number": 2,
                "unit": "hts"
            }
        },
        {
            "name": "tomato pesto",
            "amount": {
                "number": 100,
                "unit": "ml"
            }
        },
        {
            "name": "cream",
            "amount": {
                "number": 200,
                "unit": "ml"
            }
        },
        {
            "name": "mozzarella",
            "amount": {
                "number": 2,
                "unit": "pcs"
            }
        },
        {
            "name": "basil",
            "amount": {
                "number": 60,
                "unit": "gr"
            }
        },
        {
            "name": "pepper & salt",
            "amount": {
                "number": 1,
                "unit": "feeling"
            }
        }
    ],
    "cookingInstructions": [
        "Put tomato paste, tomato pesto and cream in a small pot and let it boil brefly. Afterwards, keep it cooking on the smallest level.",
        "While cutting the fresh coctail tomatos into quaters, boil about 2 L of water for the Gnocchis. Don#t forget to put salt in the water after it startet boiling.",
        "Cut mozzarella into small pieces and take off the basil lieves from the stalk.",
        "Put the fresh coctail tomatos in the sauce and the gnocchis in the water. The gnocchis are finished when swimming on the water surface.",
        "When the gnocchis are ready, pour off the water, spice up the sauce with a pinch of pepper & salt and serve the gnocchis with sauce as topping. Mozzarella and basil can be added optional."
    ]
}];

console.log(myJson);

let listElement;
let recipeElement;
let recipeContent;

createRecipe();

function createRecipe() {

    myJson.forEach(function() {
        listElement = document.createElement("li");
        listElement.className = "list__element";

        recipeElement = document.createElement("ul");
        recipeElement.id = "recipes__element";

        // recipeElement.map(recipeData => {

        recipeContent = document.createElement("li");
        recipeContent.id = "recipes__contentItem";

        let name = recipeData.name;
        let tags = recipeData.tags;
        let time = recipeData.time;
        let price = recipeData.price;
        let difficulty = recipeData.difficulty;
        let dishWashingLevel = recipeData.dishWashingLevel;
        let rating = recipeData.rating;
        let leftovers = recipeData.leftovers;
        let vegan = recipeData.vegan;
        let vegetarian = recipeData.vegetarian;
        let minPerson = recipeData.minPerson;
        let ingredients = recipeData.ingredients;
        let cookingInstructions = recipeData.cookingInstructions;

        recipeContent.innerHTML = name;

        recipeElement.appendChild(recipeContent);
        document.getElementById("recipes_contentItem").appendChild(recipeElement);
    });
    document.getElementById("recipes__list").appendChild(listElement);
    listElement.appendChild(recipeElement);
};
// })