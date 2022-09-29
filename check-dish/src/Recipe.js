import React from 'react';
import  "./recipe.css";

const Recipe =({title,calories,image,ingredients}) =>{
    return(
        <div className='recipe'>
            <h1 >{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img className='image' src={image} alt=''/>
            
        </div> 
    )
}

export default Recipe;