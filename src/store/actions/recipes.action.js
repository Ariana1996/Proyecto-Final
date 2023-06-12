import { recipesTypes } from '../types';

const { SELECT_RECIPE, ADD_RECIPE } = recipesTypes;

export const selectRecipe = (id) => ({
  type: SELECT_RECIPE,
  recipeId: id,
});

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  newRecipe: recipe,
});
