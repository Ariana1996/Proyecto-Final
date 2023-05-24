import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginNavigator from '../login';
import RecetarioNavigator from '../recetario';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="LogOutTab">
      <BottomTab.Screen
        name="Desloguearse"
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen name="Recetario" component={RecetarioNavigator} />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
