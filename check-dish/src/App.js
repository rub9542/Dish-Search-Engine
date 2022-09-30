import React, {useEffect,useState } from 'react';
import Recipe from './Recipe'; 
import './App.css';
import zevi from './zevilogo.svg'

const App = () =>{
  const APP_ID= '1d32e894';
  const APP_KEY= 'd5ff2a1e6856758dbcaef68b9e46a832';
  

  const[recipes,setRecipes]=useState([]);
  const[search, setSearch] =useState('')
  const[query,setQuery] =useState('Chicken')



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }
  const updateSearch = e=>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch =e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
    console.log(search);
  }
  useEffect(() =>{
    getRecipes();
    console.log('we r fetching data'); 
   },[query]);
   
  return(
    <div className='App'>
      <div className='logo-div'><img src={zevi} alt='text'/></div>
      <form onSubmit={getSearch} className='search-form '>
        <input className='search-bar' placeholder='Type Your Dish Here' type='text' value={search} onChange={updateSearch}/>
        <button 
      
          className='search-button' type='submit'>
          Search
        </button>

      </form>
      <div className='recipes'>
        {recipes.map(recipe =>(
          <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label} calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      
  
    </div>
  )
}


export default App;
