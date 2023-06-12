import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import LoginNavigator from './login';
import TabNavigator from './tabs';

const Navigation = () => {
  //const userId = useSelector((state) => state.login.userId);
  const userId = 'lala';
  return (
    <NavigationContainer>{userId ? <TabNavigator /> : <LoginNavigator />}</NavigationContainer>
  );
};

export default Navigation;
