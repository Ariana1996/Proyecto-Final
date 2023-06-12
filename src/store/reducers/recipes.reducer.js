/* eslint-disable no-case-declarations */
import recipesMock from '../../services/mockRecipes';
import { recipesTypes } from '../types/recipes.type';

const initialState = {
  data: recipesMock,
  selected: '',
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case recipesTypes.SELECT_RECIPE:
      const indexRecipe = state.data.findIndex((recipe) => recipe.id == action.recipeId);
      if (indexRecipe === -1) return state;
      return {
        ...state,
        selected: state.data[indexRecipe],
      };
    case recipesTypes.ADD_RECIPE:
      const ids = state.data.map((recipe) => {
        return recipe.id;
      });
      const max = Math.max(...ids);
      const newRecipe = action.newRecipe;
      newRecipe.id = max + 1;
      newRecipe.imgUrl = 'https://assets.unileversolutions.com/recipes-v2/165292.jpg';
      const updatedData = [...state.data, newRecipe];
      return {
        ...state,
        data: updatedData,
      };
    default:
      return state;
  }
};

export default recipesReducer;
