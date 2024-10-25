import React from 'react';
import RecipeBanner from './RecipeBanner/RecipeBanner';

const Recipe = () => {
    return (
        <>
          <RecipeBanner/>
          <section className='recipe'></section>
          <section className='popularRecipe'></section>
          <section className='recipeQuestion'></section>
        </>
    );
};

export default Recipe;