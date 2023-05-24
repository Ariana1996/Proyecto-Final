import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../screens';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
