import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddRecipeNavigator from '../newRecipe';
import RecipeNavigator from '../recipe';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name="RecipesTab"
        component={RecipeNavigator}
        options={{
          tabBarLabel: 'Recetario',
          tabBarIcon: () => <Ionicons name="fast-food-outline" />,
        }}
      />
      <BottomTab.Screen
        name="AddRecipeTab"
        component={AddRecipeNavigator}
        options={{
          tabBarLabel: 'Agregar receta',
          tabBarIcon: () => <Ionicons name="add-circle-outline" />,
        }}
      />
      <BottomTab.Screen
        name="FavouritesTab"
        component={RecipeNavigator}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: () => <Ionicons name="heart-outline" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
