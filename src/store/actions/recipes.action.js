import { selectRecipes, insertRecipe } from '../../db';
import { recipesTypes } from '../types';

const { SELECT_RECIPE, ADD_RECIPE, GET_RECIPES } = recipesTypes;

export const selectRecipe = (id) => ({
  type: SELECT_RECIPE,
  recipeId: id,
});

export const addRecipe = (recipe) => {
  return async (dispatch) => {
    const result = await insertRecipe(
      recipe.title,
      recipe.imgUrl,
      recipe.steps,
      recipe.ingredients
    );

    recipe.id = result.insertId;

    dispatch({
      type: ADD_RECIPE,
      newRecipe: recipe,
    });
  };
};

export const getRecipes = () => {
  return async (dispatch) => {
    const result = await selectRecipes();
    const recipes = result.rows._array;

    dispatch({
      type: GET_RECIPES,
      recipes,
    });
  };
};
