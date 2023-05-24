import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Recetario } from '../../screens';
const Stack = createNativeStackNavigator();

const RecetarioNavigator = () => {
  return (
    <Stack.Navigator initialRoutName="Recetario">
      <Stack.Screen name="Recetario" component={Recetario} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default RecetarioNavigator;
