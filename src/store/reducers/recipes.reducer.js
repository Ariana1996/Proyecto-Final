/* eslint-disable no-case-declarations */
import initialRecipes from '../../services/mockRecipes';
import { recipesTypes } from '../types/recipes.type';

const initialState = {
  data: initialRecipes,
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
      const arrayRecipes = [];

      if (action.recipe == undefined) return state;
      arrayRecipes.push(action.recipe);

      return {
        ...state,
        data: arrayRecipes,
      };

    case recipesTypes.GET_RECIPES:
      return {
        ...state,
        data: [...action.recipes],
      };
    case recipesTypes.SET_FAVOURITE:
      return {
        ...state,
        selected: state.selected,
      };
    default:
      return state;
  }
};

export default recipesReducer;
