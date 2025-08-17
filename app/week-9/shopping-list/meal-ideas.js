"use client"

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      const data = await response.json()
      return data
    } catch (e) {
      console.error("Error: ", e)
    }
  }

export default function MealIdeas({ ingredient }) {
  
    const [meals, setMeals] = useState([])

    function loadMealIdeas() {
        fetchMealIdeas(ingredient).then(result => {
            if (result.meals === null) {
                setMeals([])
                return
            }

            console.log(ingredient)
            
            setMeals(result.meals)
        })
    }

    useEffect(() => {
        if (ingredient === "") {
            return
        }
        
        loadMealIdeas()
    }, [ingredient])

    return (
        <div className="basis-full m-4">

        <h1 className="text-center mt-2 text-2xl font-bold">Meals</h1>

        <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}>
                    <p className="text-center mt-1">{meal.strMeal}</p>
                </li>
            ))}
        </ul>

        </div>
    );
}