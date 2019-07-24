// {Difficulties:
//     "easyAsEddi": false,
//     "easyAsShit": true,
//     "JuniorKitchenDeveloper": false,
//     "SeniorKitchenDeveloper": false,
//     "KitchenImpossible": false
// },

fetch('https://virtualidentityag.github.io/dev-kitchen/data/recipes.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(recipes) {

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
            let recipeItemsAssistantChef;

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

                        recipeItemsAssistantChef = document.createElement("li");
                        recipeItemsAssistantChef.id = "recipes__itemAssistantChef-" + listIndex;
                        recipeItemsAssistantChef.className = "recipes__items";

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
                        listElement.appendChild(recipeItemsAssistantChef);

                        let indexReduce = listIndex - 1;

                        document.getElementById("recipes__list").appendChild(listElement);

                        document.getElementById("recipes__itemTags-" + listIndex).innerHTML = "<b>Tags: </b>" + `
                            ${recipes[indexReduce].tags[0] ? `<br> - ${recipes[indexReduce].tags[0]}` : ''}
                            ${recipes[indexReduce].tags[1] ? `<br> - ${recipes[indexReduce].tags[1]}` : ''}
                            ${recipes[indexReduce].tags[2] ? `<br> - ${recipes[indexReduce].tags[2]}` : ''}
                            ${recipes[indexReduce].tags[3] ? `<br> - ${recipes[indexReduce].tags[3]}` : ''}
                            ${recipes[indexReduce].tags[4] ? `<br> - ${recipes[indexReduce].tags[4]}` : ''}
                            `;

                        document.getElementById("recipes__itemName-" + listIndex).innerHTML = "<b>Name: </b>" + recipes[indexReduce].name;
                        document.getElementById("recipes__itemTime-" + listIndex).innerHTML = "<b>Time: </b>" + recipes[indexReduce].time + " mins";
                        document.getElementById("recipes__itemPrice-" + listIndex).innerHTML = "<b>$-$$$: </b>" + recipes[indexReduce].price;
                        document.getElementById("recipes__itemDifficulty-" + listIndex).innerHTML = "<b>Difficulty (1-5): </b>" + recipes[indexReduce].difficulty;
                        document.getElementById("recipes__itemDishWashingLevel-" + listIndex).innerHTML = "<b>Dish washing level (1-5): </b>" + recipes[indexReduce].dishWashingLevel;
                        document.getElementById("recipes__itemRating-" + listIndex).innerHTML = "<b>Rating (1-5): </b>" + recipes[indexReduce].rating;
                        document.getElementById("recipes__itemLeftovers-" + listIndex).innerHTML = "<b>Leftovers (1-5): </b>" + recipes[indexReduce].leftovers;
                        document.getElementById("recipes__itemVegan-" + listIndex).innerHTML = "<b>Vegan: </b>" + recipes[indexReduce].vegan;
                        document.getElementById("recipes__itemVegetarian-" + listIndex).innerHTML = "<b>Vegetarian: </b>" + recipes[indexReduce].vegetarian;
                        document.getElementById("recipes__itemMinPerson-" + listIndex).innerHTML = "<b>Min persons: </b>" + recipes[indexReduce].minPersons;
                        
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
                        ${recipes[indexReduce].cookingInstructions[0] ? `<br> <b>Step 1:</b> ${recipes[indexReduce].cookingInstructions[0]}` : ''}
                        ${recipes[indexReduce].cookingInstructions[1] ? `<br> <b>Step 2:</b> ${recipes[indexReduce].cookingInstructions[1]}` : ''}
                        ${recipes[indexReduce].cookingInstructions[2] ? `<br> <b>Step 3:</b> ${recipes[indexReduce].cookingInstructions[2]}` : ''}
                        ${recipes[indexReduce].cookingInstructions[3] ? `<br> <b>Step 4:</b> ${recipes[indexReduce].cookingInstructions[3]}` : ''}
                        ${recipes[indexReduce].cookingInstructions[4] ? `<br> <b>Step 5:</b> ${recipes[indexReduce].cookingInstructions[4]}` : ''}
                        ${recipes[indexReduce].cookingInstructions[5] ? `<br> <b>Step 6:</b> ${recipes[indexReduce].cookingInstructions[5]}` : ''}
                        ${recipes[indexReduce].cookingInstructions[6] ? `<br> <b>Step 7:</b> ${recipes[indexReduce].cookingInstructions[6]}` : ''}
                        `;

                        document.getElementById("recipes__itemAssistantChef-" + listIndex).innerHTML = "<b>Assistant Chef: </b>" + `<a href="${recipes[indexReduce].assistantChef[0]}" target="_blank">${recipes[indexReduce].assistantChef[1]}</a>`;
                })
            
    })