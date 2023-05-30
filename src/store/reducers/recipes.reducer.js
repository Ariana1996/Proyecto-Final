import recipesMock from '../../services/mockRecipes';

const initialState = {
  data: recipesMock,
  selected: null,
};

const recipesReducer = (state = initialState, action) => {
  return state;
};

export default recipesReducer;
