import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NewRecipe } from '../../screens';
const Stack = createNativeStackNavigator();

const AddRecipeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddRecipe" component={NewRecipe} options={{ title: 'Agregar receta' }} />
    </Stack.Navigator>
  );
};

export default AddRecipeNavigator;
