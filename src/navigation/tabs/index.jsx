import Ionicons from '@expo/vector-icons/Ionicons';
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
        options={{ headerShown: false, tabBarIcon: () => <Ionicons name="log-out-outline" /> }}
      />
      <BottomTab.Screen
        name="Recetario"
        component={RecetarioNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="fast-food-outline" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
