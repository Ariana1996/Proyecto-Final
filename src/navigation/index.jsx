import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './tabs';

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
