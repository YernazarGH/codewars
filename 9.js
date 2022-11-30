function cakes(recipe, available) {
    let recipeArr = [],
        availableArr = [],
        result = [];
    for(let key in recipe) {
        recipeArr.push(recipe[key])
    }
    for(let key in available) {
        availableArr.push(available[key])
    }
    if( recipeArr.length > availableArr.length) {
        for(let i = 0; i < recipeArr.length; i++) {

        }
    } else {
        for(let i = 0; i < availableArr.length; i++) {
            // console.log(typeof(recipeArr[i]))
            let multiply = 
            math.multiply(recipeArr, 2)
            result.join;
        }
    }
    console.log(result)
}

cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
