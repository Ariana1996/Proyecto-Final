import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState(null);

  const onLogin = () => {
    navigation.navigate('MainMenu', {
      name: userName,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@! Ingrese su nombre:</Text>
      <TextInput style={styles.input} value={userName} onChangeText={(text) => setUserName(text)} />
      <Button title="Ingresar" onPress={onLogin} />
    </View>
  );
};

export default Login;
