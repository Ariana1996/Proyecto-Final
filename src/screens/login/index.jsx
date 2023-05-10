import { useState } from 'react';
import { Button, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

const Login = ({ onHandleLogin }) => {
  const [userName, setUserName] = useState(null);
  const onPressButton = () => {
    onHandleLogin(userName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenid@! Ingrese su nombre:</Text>
      <TextInput style={styles.input} value={userName} onChangeText={(text) => setUserName(text)} />
      <Button title="Ingresar" onPress={onPressButton} />
    </View>
  );
};

export default Login;
