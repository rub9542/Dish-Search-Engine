import React from 'react';
import  "./recipe.css";

const Recipe =({title,calories,image,ingredients}) =>{
    return(
        <div className='recipe'>
            <h1 >{title}</h1>
            <ul>
                {ingredients.map((ingredient,index) =>(
                    <li key={index}className='list-item'>{ingredient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img className='image' src={image} alt='text'/>
            
        </div> 
    )
}

export default Recipe;