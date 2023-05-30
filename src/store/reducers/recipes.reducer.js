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
    default:
      return state;
  }
};

export default recipesReducer;
