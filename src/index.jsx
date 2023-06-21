import { useFonts } from 'expo-font';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';

import { theme } from './constants';
import { init } from './db';
import Navigator from './navigation';
import store from './store/index';
import { styles } from './styles';

init()
  .then(() => {
    console.log('BD iniciada');
  })
  .catch((error) => {
    console.log('Error al iniciar la bd;', error);
  });

export default function App() {
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

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
