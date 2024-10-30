import React from 'react';
import RecipeBanner from './RecipeBanner/RecipeBanner';
import RecipeCards from './RecipeCards/RecipeCards';
import RecipePopular from './RecipePopular/RecipePopular';

const Recipe = () => {
    return (
        <>
          <RecipeBanner/>
          <RecipeCards/>
          <RecipePopular/>
         
        </>
    );
};
 
export default Recipe;