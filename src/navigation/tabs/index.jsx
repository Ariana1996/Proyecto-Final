import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Recipe, NewRecipe } from '../../screens';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="RecipeTab"
        component={Recipe}
        initialParams={{ favouritePage: false }}
        options={{
          title: 'Recetas',
          tabBarLabel: 'Recetas',
          tabBarIcon: () => <Ionicons name="fast-food-outline" />,
        }}
      />
      <BottomTab.Screen
        name="AddRecipeTab"
        component={NewRecipe}
        options={{
          title: 'Agregar receta',
          tabBarLabel: 'Agregar receta',
          tabBarIcon: () => <Ionicons name="add-circle-outline" />,
        }}
      />
      <BottomTab.Screen
        name="FavouriteTab"
        component={Recipe}
        initialParams={{ favouritePage: true }}
        options={{
          title: 'Favoritos',
          tabBarLabel: 'Favoritos',
          tabBarIcon: () => <Ionicons name="heart-outline" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
