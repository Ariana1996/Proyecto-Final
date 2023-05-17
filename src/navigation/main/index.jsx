import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, MainMenu } from '../../screens';
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRoutName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={({ route }) => ({
          headerTitle: 'Desloguear',
        })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
