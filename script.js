  //button action set-up
const targetButton = document.getElementById('search-btn');
const actionButton = targetButton.addEventListener('click', function () {
     //display clean
    document.getElementById("meal-details").innerHTML = "";
    document.getElementById("clicked-meal-details").innerHTML = "";

      //search bar value pass
    const targetSearchBar = document.getElementById('search-bar').value;
    searchMeal(targetSearchBar);
})

function searchMeal(meal) {
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
     
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => displayMeal(data));

    const displayMeal = mealDetails => {
        const innerMeal = mealDetails.meals;
        const mealDiv = document.getElementById('meal-details');
         
        innerMeal.forEach(mealData => {
            
            const mealName = mealData.strMeal;
            const mealPicture = mealData.strMealThumb;
            
            const mealSubDiv = document.createElement('div');
            mealSubDiv.className = 'mealSubDivStyle';
            mealSubDiv.innerHTML = `
                    <img onclick="passMealName('${mealName}')" src="${mealPicture}">
                    <h3 onclick="passMealName('${mealName}')" id='headerTagStyle' class='country-name'>${mealName}</h3>  
               `;
            mealDiv.appendChild(mealSubDiv);
        });
    }

}
  
async function passMealName(meal) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
    const data = await response.json();
    const innerMeal = data.meals[0];

    const mealName = innerMeal.strMeal;
    const mealPicture = innerMeal.strMealThumb;
    //html part
    const mealUpperDiv = document.getElementById('clicked-meal-details');
    mealUpperDiv.className = 'clickedMealDivStyle';
    mealUpperDiv.innerHTML = "";
     mealUpperDiv.innerHTML = `
            <img src="${mealPicture}">
            <h3 id='clickedHeaderTagStyle' class='country-name'>${mealName}</h3>
            <h2>Ingredients</h2>
            <ul>
                <li>${innerMeal.strMeasure1} ${innerMeal.strIngredient1}</li>
                <li>${innerMeal.strMeasure2} ${innerMeal.strIngredient2}</li>
                <li>${innerMeal.strMeasure3} ${innerMeal.strIngredient3}</li>
                <li>${innerMeal.strMeasure4} ${innerMeal.strIngredient4}</li>
                <li>${innerMeal.strMeasure5} ${innerMeal.strIngredient5}</li>
                <li>${innerMeal.strMeasure6} ${innerMeal.strIngredient6}</li>
                <li>${innerMeal.strMeasure7} ${innerMeal.strIngredient7}</li>
                <li>${innerMeal.strMeasure8} ${innerMeal.strIngredient8}</li>
                <li>${innerMeal.strMeasure9} ${innerMeal.strIngredient9}</li>
                <li>${innerMeal.strMeasure10} ${innerMeal.strIngredient10}</li>
                <li>${innerMeal.strMeasure11} ${innerMeal.strIngredient11}</li>
                <li>${innerMeal.strMeasure12} ${innerMeal.strIngredient12}</li>
           </ul> 
       `;
}





