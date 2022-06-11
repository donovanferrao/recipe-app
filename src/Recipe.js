import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title , calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img className={style.image} src={image} all="" />
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>

                ))};
            </ol>
        </div>
    );
};

export default Recipe;