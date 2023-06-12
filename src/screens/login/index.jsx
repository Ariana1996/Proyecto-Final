import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { login, logout, register } from '../../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? 'Bienvenid@!' : 'Registrarme';
  const buttonTittle = isLogin ? 'Ingresar' : 'Registrarme';
  const message = isLogin ? 'No poseo una cuenta' : 'Poseo una cuenta';

  const onLogin = () => {
    dispatch(isLogin ? login({ email, password }) : register({ email, password }));
  };

  const onRegister = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button style={styles.buttonMessage} title={message} onPress={onRegister} />
      <Button title={buttonTittle} onPress={onLogin} />
    </View>
  );
};

export default Login;
