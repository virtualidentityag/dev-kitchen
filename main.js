const results = [];
fetch('https://virtualidentityag.github.io/dev-kitchen/data/recipes.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(recipes) {
            results.push(...recipes);

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

            let difficulties = ["easyAsEddi", "easyAsShit", "JuniorKitchenDeveloper", "SeniorKitchenDeveloper", "KitchenImpossible"];
            let price = ["$", "$$", "$$$"];
            let rating = ["★", "★★", "★★★", "★★★★", "★★★★★"];
            let leftovers = ["🗑", "🗑🗑", "🗑🗑🗑", "🗑🗑🗑🗑", "🗑🗑🗑🗑🗑"];
            let persons = ["👤", "👤👤", "👤👤👤", "👤👤👤👤", "👤👤👤👤👤", "👤👤👤👤👤👤", "👤👤👤👤👤👤👤", "👤👤👤👤👤👤👤👤"];

            let listIndex = 0;

            results.forEach(function() {
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
                            ${results[indexReduce].tags[0] ? `<br> - ${results[indexReduce].tags[0]}` : ''}
                            ${results[indexReduce].tags[1] ? `<br> - ${results[indexReduce].tags[1]}` : ''}
                            ${results[indexReduce].tags[2] ? `<br> - ${results[indexReduce].tags[2]}` : ''}
                            ${results[indexReduce].tags[3] ? `<br> - ${results[indexReduce].tags[3]}` : ''}
                            ${results[indexReduce].tags[4] ? `<br> - ${results[indexReduce].tags[4]}` : ''}
                            `;

                        document.getElementById("recipes__itemName-" + listIndex).innerHTML = "<b>Name: </b>" + results[indexReduce].name;
                        document.getElementById("recipes__itemTime-" + listIndex).innerHTML = "<b>Time: </b>" + results[indexReduce].time + " mins";
                        document.getElementById("recipes__itemPrice-" + listIndex).innerHTML = "<b>Price (1-3): </b>" + price[results[indexReduce].price - 1];
                        document.getElementById("recipes__itemDifficulty-" + listIndex).innerHTML = "<b>Difficulty (1-5): </b>" + difficulties[results[indexReduce].difficulty - 1];
                        document.getElementById("recipes__itemDishWashingLevel-" + listIndex).innerHTML = "<b>Dish washing level (1-5): </b>" + results[indexReduce].dishWashingLevel;
                        document.getElementById("recipes__itemRating-" + listIndex).innerHTML = "<b>Rating (1-5): </b>" + rating[results[indexReduce].rating - 1];
                        document.getElementById("recipes__itemLeftovers-" + listIndex).innerHTML = "<b>Leftovers (1-5): </b>" + leftovers[results[indexReduce].leftovers];
                        document.getElementById("recipes__itemVegan-" + listIndex).innerHTML = "<b>Vegan: </b>" + `${results[indexReduce].vegan === true ? `✓ `: `✗`}`;
                        document.getElementById("recipes__itemVegetarian-" + listIndex).innerHTML = "<b>Vegetarian: </b>" + `${results[indexReduce].vegetarian === true ? `✓ `: `✗`}`;
                        document.getElementById("recipes__itemMinPerson-" + listIndex).innerHTML = "<b>Min persons: </b>" + persons[results[indexReduce].minPersons - 1];
                        
                        document.getElementById("recipes__itemIngredients-" + listIndex).innerHTML = "<b>Ingredients:</b>" + `
                        ${results[indexReduce].ingredients[0] ? `<br> -> ${results[indexReduce].ingredients[0]}` : ''}
                        ${results[indexReduce].ingredients[1] ? `<br> -> ${results[indexReduce].ingredients[1]}` : ''}
                        ${results[indexReduce].ingredients[2] ? `<br> -> ${results[indexReduce].ingredients[2]}` : ''}
                        ${results[indexReduce].ingredients[3] ? `<br> -> ${results[indexReduce].ingredients[3]}` : ''}
                        ${results[indexReduce].ingredients[4] ? `<br> -> ${results[indexReduce].ingredients[4]}` : ''}
                        ${results[indexReduce].ingredients[5] ? `<br> -> ${results[indexReduce].ingredients[5]}` : ''}
                        ${results[indexReduce].ingredients[6] ? `<br> -> ${results[indexReduce].ingredients[6]}` : ''}
                        ${results[indexReduce].ingredients[7] ? `<br> -> ${results[indexReduce].ingredients[7]}` : ''}
                        ${results[indexReduce].ingredients[8] ? `<br> -> ${results[indexReduce].ingredients[8]}` : ''}
                        ${results[indexReduce].ingredients[9] ? `<br> -> ${results[indexReduce].ingredients[9]}` : ''}
                        ${results[indexReduce].ingredients[10] ? `<br> -> ${results[indexReduce].ingredients[10]}` : ''}
                        ${results[indexReduce].ingredients[11] ? `<br> -> ${results[indexReduce].ingredients[11]}` : ''}
                        ${results[indexReduce].ingredients[12] ? `<br> -> ${results[indexReduce].ingredients[12]}` : ''}
                        ${results[indexReduce].ingredients[13] ? `<br> -> ${results[indexReduce].ingredients[13]}` : ''}
                        ${results[indexReduce].ingredients[14] ? `<br> -> ${results[indexReduce].ingredients[14]}` : ''}
                        `;
                        
                        document.getElementById("recipes__itemCookingInstructions-" + listIndex).innerHTML = "<b>Cooking instructions:</b>" + `
                        ${results[indexReduce].cookingInstructions[0] ? `<br> <b>Step 1:</b> ${results[indexReduce].cookingInstructions[0]}` : ''}
                        ${results[indexReduce].cookingInstructions[1] ? `<br> <b>Step 2:</b> ${results[indexReduce].cookingInstructions[1]}` : ''}
                        ${results[indexReduce].cookingInstructions[2] ? `<br> <b>Step 3:</b> ${results[indexReduce].cookingInstructions[2]}` : ''}
                        ${results[indexReduce].cookingInstructions[3] ? `<br> <b>Step 4:</b> ${results[indexReduce].cookingInstructions[3]}` : ''}
                        ${results[indexReduce].cookingInstructions[4] ? `<br> <b>Step 5:</b> ${results[indexReduce].cookingInstructions[4]}` : ''}
                        ${results[indexReduce].cookingInstructions[5] ? `<br> <b>Step 6:</b> ${results[indexReduce].cookingInstructions[5]}` : ''}
                        ${results[indexReduce].cookingInstructions[6] ? `<br> <b>Step 7:</b> ${results[indexReduce].cookingInstructions[6]}` : ''}
                        `;

                        document.getElementById("recipes__itemAssistantChef-" + listIndex).innerHTML = "<b>Assistant Chef: </b>" + `<br> <img src="${results[indexReduce].assistantChef[2]}" alt="Photo">` + `<br> <a href="${results[indexReduce].assistantChef[0]}" target="_blank">${results[indexReduce].assistantChef[1]}</a>`;
                        
                    });            
    });
    document.getElementById("searchButton").onclick = findMatches;
    document.getElementById("searchInput").onchange = findMatches;
    let searchInput = document.getElementById("searchInput").value;
    
    function findMatches(searchInput, results) {
        return results.filter(recipe => {
            const regex = new RegExp(searchInput, "gi");
            return recipe.name.match(regex);
        })
        console.log(results);
    }