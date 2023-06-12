import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Recipe } from '../../screens';
const Stack = createNativeStackNavigator();

const RecipeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipe" component={Recipe} options={{ title: 'Recetas' }} />
    </Stack.Navigator>
  );
};

export default RecipeNavigator;
