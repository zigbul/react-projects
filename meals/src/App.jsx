import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((res) => setMeals(res.data.meals))
      .catch((e) => console.log(e.message));
  }, []);

  const mealList = (
    <ul className="meal-list">
      {meals.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
          <li key={idMeal} className="meal-list__item">
            <img src={strMealThumb} alt={strMeal} className="meal-list__img" />
            <div className="meal-list__text">
              <p className="meal-list__name">{strMeal}</p>
              <p className="meal-list__id">#{idMeal}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="container">
      <h1 className="title">Seafood Meals</h1>
      {mealList}
    </div>
  );
};

export default App;
