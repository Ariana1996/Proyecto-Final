import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { theme } from './constants';
import { Login, MainMenu } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userName, setUserName] = useState(null);
  const [loaded] = useFonts({
    Bold: require('../assets/fonts/PTSans-Bold.ttf'),
    BoldItalic: require('../assets/fonts/PTSans-BoldItalic.ttf'),
    Italic: require('../assets/fonts/PTSans-Italic.ttf'),
    Regular: require('../assets/fonts/PTSans-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const onHandleLogin = (userName) => {
    setUserName(userName);
  };

  if (userName) return <MainMenu userName={userName} />;
  return <Login onHandleLogin={onHandleLogin} />;
}
