import { recipesTypes } from '../types';

const { SELECT_RECIPE } = recipesTypes;

export const selectRecipe = (id) => ({
  type: SELECT_RECIPE,
  recipeId: id,
});
