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
    },
    {
        "name": "Halumi Sandwich DELUXE",
        "tags": ["quick & dirty", "light stuff"],
        "time": 10,
        "price": 2,
        "difficulty": 3,
        "dishWashingLevel": 2,
        "rating": 5,
        "leftovers": 1,
        "vegan": false,
        "vegetarian": true,
        "minPersons": 4,
        "ingredients": [{
                "name": "french baguette",
                "amount": {
                    "number": 1,
                    "unit": "pcs"
                }
            },
            {
                "name": "salat leaves",
                "amount": {
                    "number": 8,
                    "unit": "pcs"
                }
            },
            {
                "name": "champignons",
                "amount": {
                    "number": 100,
                    "unit": "gr"
                }
            },
            {
                "name": "onion",
                "amount": {
                    "number": 2,
                    "unit": "pcs"
                }
            },
            {
                "name": "cucumber",
                "amount": {
                    "number": 0.5,
                    "unit": "pcs"
                }
            },
            {
                "name": "hamuli cheese",
                "amount": {
                    "number": 2,
                    "unit": "pcs"
                }
            },
            {
                "name": "blsamico sauce",
                "amount": {
                    "number": 1,
                    "unit": "feeling"
                }
            },
            {
                "name": "curry ketchup",
                "amount": {
                    "number": 1,
                    "unit": "feeling"
                }
            }
        ],
        "cookingInstructions": [
            "Slice the champignons and onions and fry them in a pan until to the wanted consistency",
            "Slice each halumi into 4 pieces and fry it in a second pan until it is light brown on both sides.",
            "Cut the french baguett into 4 pieces and those pieces into half (like a sandwich bread). Put 2 leaves of salat and some sclies cucumber on one side of the baguette.",
            "Put 2 slices of halumi, some champignons and onions on the other side of the baguette and add some curry ketchup and balsamico sauce.",
            "Put both sides together and enjoy the DELUXE sandwich."
        ]
    }
];

console.log(myJson);

let listElement;
let recipeElement;
let recipeContent;
let listIndex = 0;

myJson.forEach(function() {
    listIndex++;
    listElement = document.createElement("li");
    listElement.className = "recipes__list-element-" + listIndex;

    recipeElement = document.createElement("ul");
    recipeElement.id = "recipes__element-" + listIndex;

    recipeContent = document.createElement("li");
    recipeContent.id = "recipes__contentItem-" + listIndex;

    recipeElement.appendChild(recipeContent);

    // recipeElement.map(myJson => {
    //     let name = recipeData.name;
    //     let tags = recipeData.tags;
    //     let time = recipeData.time;
    //     let price = recipeData.price;
    //     let difficulty = recipeData.difficulty;
    //     let dishWashingLevel = recipeData.dishWashingLevel;
    //     let rating = recipeData.rating;
    //     let leftovers = recipeData.leftovers;
    //     let vegan = recipeData.vegan;
    //     let vegetarian = recipeData.vegetarian;
    //     let minPerson = recipeData.minPerson;
    //     let ingredients = recipeData.ingredients;
    //     let cookingInstructions = recipeData.cookingInstructions;

    // });

    listElement.appendChild(recipeElement);
    document.getElementById("recipes__list").appendChild(listElement);
    // document.getElementById("recipes__element-" + listIndex).innerHTML = myJson[listIndex - 1].name;
    document.getElementById("recipes__contentItem-" + listIndex).innerHTML = myJson[listIndex - 1].name;
    // document.getElementById("recipes__itemIngredients-" + listIndex).innerHTML = myJson[listIndex - 1].ingredients;
});

// };
// })