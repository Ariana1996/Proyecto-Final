import { selectRecipes, insertRecipe, setFavouriteRecipe } from '../../db';
import { recipesTypes } from '../types';

const { SELECT_RECIPE, ADD_RECIPE, GET_RECIPES, SET_FAVOURITE } = recipesTypes;

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

export const getRecipes = (favouritePage) => {
  return async (dispatch) => {
    const result = await selectRecipes(favouritePage);
    const recipes = result.rows._array;
    dispatch({
      type: GET_RECIPES,
      recipes,
    });
  };
};

export const setFavourite = (idRecipe, isfavourite) => {
  return async (dispatch) => {
    await setFavouriteRecipe(idRecipe, isfavourite);
    dispatch({
      type: SET_FAVOURITE,
    });
  };
};
